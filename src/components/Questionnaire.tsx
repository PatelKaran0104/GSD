import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessibilityControls from './AccessibilityControls';
import { preQuestions } from '../data/preQuestions';
import { postQuestions } from '../data/postQuestions';
import { 
  Container, 
  Paper, 
  Title, 
  Text, 
  Button, 
  Group, 
  Stack, 
  Radio, 
  Checkbox, 
  TextInput, 
  Textarea, 
  NumberInput,
  Progress,
  Alert,
  Modal,
  ActionIcon,
  Flex,
  Box
} from '@mantine/core';
import { ChevronLeft, ChevronRight, Save, Volume2, XCircle, Home } from 'lucide-react';

const Questionnaire: React.FC = () => {
  const { part } = useParams<{ part: string }>();
  const navigate = useNavigate();
  const { formData, updateFormData, fontSize, highContrast, language } = useAppContext();
  
  const questions = part === 'pre' ? preQuestions : postQuestions;
  const [currentStep, setCurrentStep] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [showError, setShowError] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [showHomeConfirm, setShowHomeConfirm] = useState(false);
  
  useEffect(() => {
    setStartTime(new Date());
    setCurrentStep(0);
    if (window.speechSynthesis) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, [part]);

  useEffect(() => {
    return () => {
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [speechSynthesis, language]);

  const currentQuestion = questions[currentStep];

  const shouldDisplayQuestion = (question: any): boolean => {
    if (!question.conditionalDisplay) return true;
    
    const { questionId, value } = question.conditionalDisplay;
    const dependentAnswer = formData[questionId];
    
    if (Array.isArray(dependentAnswer)) {
      return dependentAnswer.includes(value);
    }
    
    return dependentAnswer === value;
  };

  const getSupportedLanguage = (preferredLang: string): string => {
    const voices = speechSynthesis?.getVoices() || [];
    
    if (voices.some(voice => voice.lang === preferredLang)) {
      return preferredLang;
    }

    const genericLang = preferredLang.split('-')[0];
    const matchingVoice = voices.find(voice => voice.lang.startsWith(genericLang));
    if (matchingVoice) {
      return matchingVoice.lang;
    }

    return navigator.language || 'en-US';
  };

  const readQuestion = () => {
    if (!speechSynthesis) {
      setSpeechError(language === 'de' 
        ? 'Text-zu-Sprache wird von Ihrem Browser nicht unterstützt.'
        : 'Text-to-speech is not supported by your browser.');
      return;
    }

    speechSynthesis.cancel();
    setSpeechError(null);

    try {
      const questionText = currentQuestion.question[language];
      const optionsText = currentQuestion.options 
        ? (language === 'de' ? 'Die Antwortmöglichkeiten sind: ' : 'The answer options are: ') + 
          currentQuestion.options.map(opt => opt.label[language]).join(', ')
        : '';
      
      const utterance = new SpeechSynthesisUtterance(questionText + '. ' + optionsText);
      
      const supportedLang = getSupportedLanguage(language === 'de' ? 'de-DE' : 'en-US');
      utterance.lang = supportedLang;
      utterance.rate = 0.9;
      
      utterance.onstart = () => {
        setIsReading(true);
        setSpeechError(null);
      };
      
      utterance.onend = () => {
        setIsReading(false);
        setSpeechError(null);
      };
      
      utterance.onerror = (event) => {
        setIsReading(false);
        
        if (event.error !== 'interrupted') {
          console.error('SpeechSynthesisUtterance error:', event);
          const errorMessage = language === 'de'
            ? 'Es gab ein Problem beim Vorlesen des Textes. Bitte versuchen Sie es später erneut.'
            : 'There was a problem reading the text. Please try again later.';
          setSpeechError(errorMessage);
        }
      };

      speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Error initializing speech synthesis:', error);
      setIsReading(false);
      setSpeechError(language === 'de'
        ? 'Ein unerwarteter Fehler ist aufgetreten.'
        : 'An unexpected error occurred.');
    }
  };

  const stopReading = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsReading(false);
      setSpeechError(null);
    }
  };

  const findNextVisibleQuestion = (startIndex: number): number => {
    for (let i = startIndex; i < questions.length; i++) {
      if (shouldDisplayQuestion(questions[i])) {
        return i;
      }
    }
    return questions.length;
  };

  const findPreviousVisibleQuestion = (startIndex: number): number => {
    for (let i = startIndex; i >= 0; i--) {
      if (shouldDisplayQuestion(questions[i])) {
        return i;
      }
    }
    return 0;
  };

  const handleHomeClick = () => {
    setShowHomeConfirm(true);
  };

  const confirmGoHome = () => {
    stopReading();
    navigate('/');
  };

  const cancelGoHome = () => {
    setShowHomeConfirm(false);
  };
  
  const handleNext = () => {
    const isAnswered = formData[currentQuestion.id] !== undefined && 
                      formData[currentQuestion.id] !== null && 
                      (!Array.isArray(formData[currentQuestion.id]) || 
                       (formData[currentQuestion.id] as string[]).length > 0);

    if (currentQuestion.required && !isAnswered) {
      setShowError(true);
      return;
    }

    setShowError(false);
    stopReading();

    if (currentQuestion.conditionalNext) {
      const answer = formData[currentQuestion.id];
      const nextStep = currentQuestion.conditionalNext[answer as string];
      if (nextStep !== undefined) {
        const nextVisibleStep = findNextVisibleQuestion(nextStep);
        setCurrentStep(nextVisibleStep);
        return;
      }
    }
    
    const nextStep = findNextVisibleQuestion(currentStep + 1);
    if (nextStep < questions.length) {
      setCurrentStep(nextStep);
    } else {
      if (startTime) {
        const endTime = new Date();
        const minutesTaken = Math.round((endTime.getTime() - startTime.getTime()) / 60000);
        
        console.log(`${part === 'pre' ? 'Pre-assessment' : 'Post-assessment'} questionnaire completed in ${minutesTaken} minutes`);
        console.log('Questionnaire data:', formData);
        
        updateFormData(`${part}_completion_time`, minutesTaken.toString());
      }
      
      navigate('/thank-you');
    }
  };

  const handlePrevious = () => {
    stopReading();
    const prevStep = findPreviousVisibleQuestion(currentStep - 1);
    if (prevStep >= 0) {
      setCurrentStep(prevStep);
    } else {
      setShowHomeConfirm(true);
    }
  };

  const handleInputChange = (id: string, value: string | string[]) => {
    setShowError(false);
    updateFormData(id, value);
  };
  
  const renderQuestionContent = () => {
    const question = currentQuestion;
    
    switch (question.type) {
      case 'radio':
        return (
          <Radio.Group
            value={formData[question.id] as string || ''}
            onChange={(value) => handleInputChange(question.id, value)}
          >
            <Stack gap="xl">
              {question.options?.map((option, idx) => (
                <Paper 
                  key={idx}
                  p="xl" 
                  radius="lg"
                  className="radio-option-paper"
                  style={{
                    border: `2px solid ${formData[question.id] === option.value 
                      ? (highContrast ? '#ffffff' : '#3b82f6') 
                      : (highContrast ? '#ffffff' : '#e5e7eb')}`,
                    backgroundColor: formData[question.id] === option.value 
                      ? (highContrast ? '#1e3a8a' : '#dbeafe') 
                      : (highContrast ? '#000000' : '#ffffff'),
                    cursor: 'pointer',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                  onClick={() => handleInputChange(question.id, option.value)}
                >
                  <Radio 
                    value={option.value} 
                    label={option.label[language]}
                    styles={{
                      root: {
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                      },
                      body: {
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                      },
                      labelWrapper: {
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                      },
                      label: { 
                        fontSize: fontSize === 'text-xl' ? '1.375rem' : 
                                 fontSize === 'text-2xl' ? '1.625rem' :
                                 fontSize === 'text-3xl' ? '2rem' : '2.5rem',
                        fontWeight: 500,
                        color: highContrast ? '#ffffff' : undefined,
                        lineHeight: 1.4,
                        marginLeft: '16px',
                      },
                      radio: {
                        width: '24px',
                        height: '24px',
                        flexShrink: 0,
                      }
                    }}
                  />
                </Paper>
              ))}
            </Stack>
          </Radio.Group>
        );
        
      case 'checkbox':
        return (
          <Checkbox.Group
            value={(formData[question.id] as string[]) || []}
            onChange={(value) => handleInputChange(question.id, value)}
          >
            <Stack gap="xl">
              {question.options?.map((option, idx) => {
                const selectedValues = (formData[question.id] as string[]) || [];
                const isChecked = selectedValues.includes(option.value);
                
                return (
                  <Paper 
                    key={idx}
                    p="xl" 
                    radius="lg"
                    className="checkbox-option-paper"
                    style={{
                      border: `2px solid ${isChecked 
                        ? (highContrast ? '#ffffff' : '#3b82f6') 
                        : (highContrast ? '#ffffff' : '#e5e7eb')}`,
                      backgroundColor: isChecked 
                        ? (highContrast ? '#1e3a8a' : '#dbeafe') 
                        : (highContrast ? '#000000' : '#ffffff'),
                      cursor: 'pointer',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                    onClick={() => {
                      const currentValues = [...(formData[question.id] as string[] || [])];
                      const newValues = isChecked 
                        ? currentValues.filter(v => v !== option.value)
                        : [...currentValues, option.value];
                      handleInputChange(question.id, newValues);
                    }}
                  >
                    <Checkbox 
                      value={option.value} 
                      label={option.label[language]}
                      styles={{
                        root: {
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        },
                        body: {
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        },
                        labelWrapper: {
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        },
                        label: { 
                          fontSize: fontSize === 'text-xl' ? '1.375rem' : 
                                   fontSize === 'text-2xl' ? '1.625rem' :
                                   fontSize === 'text-3xl' ? '2rem' : '2.5rem',
                          fontWeight: 500,
                          color: highContrast ? '#ffffff' : undefined,
                          lineHeight: 1.4,
                          marginLeft: '16px',
                        },
                        input: {
                          width: '24px',
                          height: '24px',
                          flexShrink: 0,
                        }
                      }}
                    />
                  </Paper>
                );
              })}
            </Stack>
          </Checkbox.Group>
        );
        
      case 'scale':
        return (
          <Box mt="xl">
            <Group justify="space-between" mb="lg">
              <Text size="lg" fw={500}>{question.scaleStart?.[language]}</Text>
              <Text size="lg" fw={500}>{question.scaleEnd?.[language]}</Text>
            </Group>
            <div className="scale-button-grid">
              {[0, 1, 2, 3, 4].map((value) => (
                <Button
                  key={value}
                  onClick={() => handleInputChange(question.id, value.toString())}
                  variant={formData[question.id] === value.toString() ? "filled" : "outline"}
                  color={highContrast ? "gray" : "blue"}
                  size="xl"
                  radius="lg"
                  style={{
                    backgroundColor: formData[question.id] === value.toString() 
                      ? (highContrast ? '#ffffff' : undefined)
                      : (highContrast ? '#333333' : undefined),
                    color: formData[question.id] === value.toString() 
                      ? (highContrast ? '#000000' : undefined)
                      : (highContrast ? '#ffffff' : undefined),
                    borderColor: highContrast ? '#ffffff' : undefined,
                    fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                             fontSize === 'text-2xl' ? '1.875rem' :
                             fontSize === 'text-3xl' ? '2.25rem' : '2.75rem',
                    fontWeight: 700,
                    minHeight: '80px',
                    minWidth: '80px',
                  }}
                >
                  {value}
                </Button>
              ))}
            </div>
            <div className="scale-labels">
              <Text size="md" fw={500}>{question.scaleLabels?.[language][0] || ''}</Text>
              <Text size="md" fw={500}>{question.scaleLabels?.[language][2] || ''}</Text>
              <Text size="md" fw={500}>{question.scaleLabels?.[language][4] || ''}</Text>
            </div>
          </Box>
        );
        
      case 'text':
        return (
          <Textarea
            value={formData[question.id] as string || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            rows={6}
            radius="lg"
            size="xl"
            placeholder={question.placeholder || ''}
            styles={{
              input: {
                fontSize: fontSize === 'text-xl' ? '1.375rem' : 
                         fontSize === 'text-2xl' ? '1.625rem' :
                         fontSize === 'text-3xl' ? '2rem' : '2.5rem',
                backgroundColor: highContrast ? '#000000' : undefined,
                color: highContrast ? '#ffffff' : undefined,
                borderColor: highContrast ? '#ffffff' : undefined,
                padding: '20px',
                minHeight: '120px',
              }
            }}
          />
        );
        
      case 'number':
        return (
          <NumberInput
            value={formData[question.id] as string || ''}
            onChange={(value) => handleInputChange(question.id, value?.toString() || '')}
            min={0}
            radius="lg"
            size="xl"
            placeholder={question.placeholder || ''}
            styles={{
              input: {
                fontSize: fontSize === 'text-xl' ? '1.375rem' : 
                         fontSize === 'text-2xl' ? '1.625rem' :
                         fontSize === 'text-3xl' ? '2rem' : '2.5rem',
                backgroundColor: highContrast ? '#000000' : undefined,
                color: highContrast ? '#ffffff' : undefined,
                borderColor: highContrast ? '#ffffff' : undefined,
                padding: '20px',
                minHeight: '80px',
              }
            }}
          />
        );
        
      default:
        return null;
    }
  };

  const visibleQuestions = questions.filter(shouldDisplayQuestion);
  const currentVisibleIndex = visibleQuestions.findIndex(q => q.id === currentQuestion.id);
  const progress = Math.round(((currentVisibleIndex + 1) / visibleQuestions.length) * 100);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: highContrast ? '#000000' : '#eff6ff',
    color: highContrast ? '#ffffff' : '#1e3a8a',
  };
  
  return (
    <div style={containerStyle} className={`${fontSize} ${highContrast ? 'high-contrast' : ''}`}>
      <Container size="lg" py="xl">
        <AccessibilityControls />
        
        <Modal
          opened={showHomeConfirm}
          onClose={cancelGoHome}
          title={
            <Text fw={700} size="lg">
              {language === 'de' 
                ? 'Zur Startseite zurückkehren?' 
                : 'Return to home page?'}
            </Text>
          }
          radius="lg"
          centered
        >
          <Stack gap="md">
            <Text>
              {language === 'de'
                ? 'Ihre bisherigen Antworten gehen verloren. Sind Sie sicher?'
                : 'Your current answers will be lost. Are you sure?'}
            </Text>
            <Group justify="flex-end" gap="sm">
              <Button variant="outline" radius="lg" onClick={cancelGoHome}>
                {language === 'de' ? 'Abbrechen' : 'Cancel'}
              </Button>
              <Button color="red" radius="lg" onClick={confirmGoHome}>
                {language === 'de' ? 'Ja, zurück' : 'Yes, go back'}
              </Button>
            </Group>
          </Stack>
        </Modal>
        
        <Box mt="xl">
          {/* Progress Section - Now at the top */}
          <Paper 
            radius="lg" 
            p="lg"
            mb="lg"
            style={{
              backgroundColor: highContrast ? '#000000' : '#ffffff',
              border: highContrast ? '2px solid #ffffff' : undefined,
              color: highContrast ? '#ffffff' : undefined,
            }}
          >
            <Group justify="space-between" align="center" mb="md">
              <Group gap="md">
                <Text fw={600} size="lg">
                  {language === 'de' 
                    ? `Frage ${currentVisibleIndex + 1} von ${visibleQuestions.length}`
                    : `Question ${currentVisibleIndex + 1} of ${visibleQuestions.length}`}
                </Text>
                <ActionIcon
                  onClick={handleHomeClick}
                  variant={highContrast ? "filled" : "light"}
                  color={highContrast ? "gray" : "gray"}
                  size="xl"
                  className="home-button"
                  style={{
                    borderRadius: '50%',
                    backgroundColor: highContrast ? '#ffffff' : undefined,
                    color: highContrast ? '#000000' : undefined,
                    minWidth: '48px',
                    minHeight: '48px',
                  }}
                >
                  <Home size={24} />
                </ActionIcon>
              </Group>
              <Text fw={600} size="lg">{progress}%</Text>
            </Group>
            <Progress 
              value={progress} 
              size="lg" 
              radius="xl"
              color={highContrast ? "gray" : "blue"}
              styles={{
                root: {
                  backgroundColor: highContrast ? '#333333' : undefined,
                },
                bar: {
                  backgroundColor: highContrast ? '#ffffff' : undefined,
                }
              }}
            />
          </Paper>
          
          {/* Section Header */}
          <Paper 
            radius="lg" 
            style={{
              backgroundColor: highContrast ? '#1e3a8a' : '#1d4ed8',
              color: '#ffffff',
            }}
            p="lg"
          >
            <Title 
              order={2}
              style={{ 
                fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                         fontSize === 'text-2xl' ? '1.875rem' :
                         fontSize === 'text-3xl' ? '2.25rem' : '2.75rem'
              }}
            >
              {part === 'pre' 
                ? language === 'de' ? 'Teil 1: Vorerhebung' : 'Part 1: Pre-assessment'
                : language === 'de' ? 'Teil 2: Erfolgskontrolle' : 'Part 2: Success evaluation'}
            </Title>
            <Text size="lg">
              {currentQuestion.section[language]}
            </Text>
          </Paper>
          
          {/* Question Content */}
          <Paper 
            shadow="xl" 
            radius="lg" 
            p="xl" 
            mt={0}
            style={{
              backgroundColor: highContrast ? '#000000' : undefined,
              border: highContrast ? '2px solid #ffffff' : undefined,
              color: highContrast ? '#ffffff' : undefined,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <Stack gap="xl">
              <Flex justify="space-between" align="flex-start" gap="md">
                <Title 
                  order={3}
                  style={{ 
                    flex: 1,
                    fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                             fontSize === 'text-2xl' ? '1.875rem' :
                             fontSize === 'text-3xl' ? '2.25rem' : '2.75rem'
                  }}
                >
                  {currentQuestion.question[language]}
                </Title>
                <ActionIcon
                  onClick={isReading ? stopReading : readQuestion}
                  variant={highContrast ? "filled" : "light"}
                  color={highContrast ? "gray" : "blue"}
                  size="xl"
                  className="speech-button"
                  style={{
                    backgroundColor: highContrast ? '#ffffff' : undefined,
                    color: highContrast ? '#000000' : undefined,
                    borderRadius: '50%',
                    minWidth: '48px',
                    minHeight: '48px',
                  }}
                >
                  <Volume2 size={24} className={isReading ? 'animate-pulse' : ''} />
                </ActionIcon>
              </Flex>
              
              {currentQuestion.description && (
                <Text 
                  c={highContrast ? "gray.3" : "gray.6"}
                  size="lg"
                >
                  {currentQuestion.description[language]}
                </Text>
              )}

              {speechError && (
                <Alert 
                  icon={<XCircle size={16} />} 
                  color="red"
                  radius="lg"
                  variant={highContrast ? "filled" : "light"}
                >
                  {speechError}
                </Alert>
              )}

              {showError && (
                <Alert 
                  icon={<XCircle size={16} />} 
                  color="red"
                  radius="lg"
                  variant={highContrast ? "filled" : "light"}
                >
                  {language === 'de'
                    ? 'Bitte wählen Sie eine Antwort aus, bevor Sie fortfahren.'
                    : 'Please select an answer before continuing.'}
                </Alert>
              )}
              
              {renderQuestionContent()}
            </Stack>
            
            <Group justify="space-between" mt="xl">
              <Button
                onClick={handlePrevious}
                variant={highContrast ? "filled" : "light"}
                color={highContrast ? "gray" : "gray"}
                size="xl"
                radius="lg"
                leftSection={<ChevronLeft size={20} />}
                style={{
                  backgroundColor: highContrast ? '#ffffff' : undefined,
                  color: highContrast ? '#000000' : undefined,
                  minHeight: '60px',
                  fontSize: '1.125rem',
                }}
              >
                {language === 'de' ? 'Zurück' : 'Back'}
              </Button>
              
              <Button
                onClick={handleNext}
                size="xl"
                radius="lg"
                variant={highContrast ? "filled" : "filled"}
                color={highContrast ? "gray" : "blue"}
                disabled={
                  currentQuestion.required && 
                  (formData[currentQuestion.id] === undefined || 
                   formData[currentQuestion.id] === null || 
                   (Array.isArray(formData[currentQuestion.id]) && (formData[currentQuestion.id] as string[]).length === 0) ||
                   formData[currentQuestion.id] === '')
                }
                rightSection={
                  currentVisibleIndex === visibleQuestions.length - 1 ? 
                    <Save size={20} /> : 
                    <ChevronRight size={20} />
                }
                style={{
                  backgroundColor: highContrast ? '#ffffff' : undefined,
                  color: highContrast ? '#000000' : undefined,
                  minHeight: '60px',
                  fontSize: '1.125rem',
                }}
              >
                {currentVisibleIndex === visibleQuestions.length - 1 ? (
                  language === 'de' ? 'Abschließen' : 'Complete'
                ) : (
                  language === 'de' ? 'Weiter' : 'Next'
                )}
              </Button>
            </Group>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Questionnaire;