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
            <Stack gap="lg">
              {question.options?.map((option, idx) => (
                <Paper 
                  key={idx}
                  p="xl" 
                  radius="lg"
                  className={`option-card ${formData[question.id] === option.value ? 'selected' : ''}`}
                  style={{
                    border: `2px solid ${formData[question.id] === option.value 
                      ? (highContrast ? '#f9fafb' : '#3b82f6') 
                      : (highContrast ? '#6b7280' : '#e5e7eb')}`,
                    backgroundColor: formData[question.id] === option.value 
                      ? (highContrast ? '#4b5563' : '#dbeafe') 
                      : (highContrast ? '#374151' : '#ffffff'),
                    cursor: 'pointer',
                  }}
                  onClick={() => handleInputChange(question.id, option.value)}
                >
                  <Radio 
                    value={option.value} 
                    label={option.label[language]}
                    styles={{
                      label: { 
                        fontSize: 'inherit',
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: highContrast ? '#f9fafb' : '#1f2937'
                      },
                      radio: {
                        cursor: 'pointer'
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
            <Stack gap="lg">
              {question.options?.map((option, idx) => {
                const selectedValues = (formData[question.id] as string[]) || [];
                const isChecked = selectedValues.includes(option.value);
                
                return (
                  <Paper 
                    key={idx}
                    p="xl" 
                    radius="lg"
                    className={`option-card ${isChecked ? 'selected' : ''}`}
                    style={{
                      border: `2px solid ${isChecked 
                        ? (highContrast ? '#f9fafb' : '#3b82f6') 
                        : (highContrast ? '#6b7280' : '#e5e7eb')}`,
                      backgroundColor: isChecked 
                        ? (highContrast ? '#4b5563' : '#dbeafe') 
                        : (highContrast ? '#374151' : '#ffffff'),
                      cursor: 'pointer',
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
                        label: { 
                          fontSize: 'inherit',
                          fontWeight: 500,
                          lineHeight: 1.6,
                          color: highContrast ? '#f9fafb' : '#1f2937'
                        },
                        input: {
                          cursor: 'pointer'
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
            <Group justify="space-between" mb="md">
              <Text 
                size="sm" 
                fw={500}
                style={{ color: highContrast ? '#e5e7eb' : '#6b7280' }}
              >
                {question.scaleStart?.[language]}
              </Text>
              <Text 
                size="sm" 
                fw={500}
                style={{ color: highContrast ? '#e5e7eb' : '#6b7280' }}
              >
                {question.scaleEnd?.[language]}
              </Text>
            </Group>
            <div className="scale-button-grid">
              {[0, 1, 2, 3, 4].map((value) => (
                <Button
                  key={value}
                  onClick={() => handleInputChange(question.id, value.toString())}
                  variant={formData[question.id] === value.toString() ? "filled" : "outline"}
                  color="blue"
                  size="xl"
                  style={{
                    backgroundColor: formData[question.id] === value.toString() 
                      ? (highContrast ? '#f9fafb' : '#2563eb')
                      : (highContrast ? 'transparent' : 'transparent'),
                    color: formData[question.id] === value.toString() 
                      ? (highContrast ? '#1f2937' : '#ffffff')
                      : (highContrast ? '#f9fafb' : '#2563eb'),
                    borderColor: highContrast ? '#f9fafb' : '#2563eb',
                    borderWidth: '2px',
                    fontSize: 'inherit',
                    fontWeight: 700,
                  }}
                >
                  {value}
                </Button>
              ))}
            </div>
            <div className="scale-labels">
              <Text 
                size="sm" 
                fw={500}
                style={{ color: highContrast ? '#e5e7eb' : '#6b7280' }}
              >
                {question.scaleLabels?.[language][0] || ''}
              </Text>
              <Text 
                size="sm" 
                fw={500}
                style={{ color: highContrast ? '#e5e7eb' : '#6b7280' }}
              >
                {question.scaleLabels?.[language][2] || ''}
              </Text>
              <Text 
                size="sm" 
                fw={500}
                style={{ color: highContrast ? '#e5e7eb' : '#6b7280' }}
              >
                {question.scaleLabels?.[language][4] || ''}
              </Text>
            </div>
          </Box>
        );
        
      case 'text':
        return (
          <Textarea
            value={formData[question.id] as string || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            rows={6}
            placeholder={question.placeholder || ''}
            size="lg"
            styles={{
              input: {
                fontSize: 'inherit',
                lineHeight: 1.6,
                backgroundColor: highContrast ? '#374151' : '#ffffff',
                color: highContrast ? '#f9fafb' : '#1f2937',
                borderColor: highContrast ? '#d1d5db' : '#d1d5db',
                borderWidth: '2px',
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
            placeholder={question.placeholder || ''}
            size="lg"
            styles={{
              input: {
                fontSize: 'inherit',
                lineHeight: 1.6,
                backgroundColor: highContrast ? '#374151' : '#ffffff',
                color: highContrast ? '#f9fafb' : '#1f2937',
                borderColor: highContrast ? '#d1d5db' : '#d1d5db',
                borderWidth: '2px',
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

  return (
    <div className={`questionnaire-container ${fontSize} ${highContrast ? 'dark-mode' : ''}`}>
      <Container size="lg" py="xl">
        <AccessibilityControls />
        
        <Modal
          opened={showHomeConfirm}
          onClose={cancelGoHome}
          title={
            <Text fw={700} size="xl">
              {language === 'de' 
                ? 'Zur Startseite zurückkehren?' 
                : 'Return to home page?'}
            </Text>
          }
          centered
          radius="lg"
        >
          <Stack gap="lg">
            <Text size="lg" style={{ lineHeight: 1.6 }}>
              {language === 'de'
                ? 'Ihre bisherigen Antworten gehen verloren. Sind Sie sicher?'
                : 'Your current answers will be lost. Are you sure?'}
            </Text>
            <Group justify="flex-end" gap="md">
              <Button 
                variant="outline" 
                onClick={cancelGoHome}
                size="lg"
                color="gray"
              >
                {language === 'de' ? 'Abbrechen' : 'Cancel'}
              </Button>
              <Button 
                color="red" 
                onClick={confirmGoHome}
                size="lg"
              >
                {language === 'de' ? 'Ja, zurück' : 'Yes, go back'}
              </Button>
            </Group>
          </Stack>
        </Modal>
        
        <Box mt="xl">
          <div className="question-progress">
            <Group justify="space-between" mb="md">
              <Group gap="lg">
                <Text 
                  fw={600} 
                  size="lg"
                  style={{ color: highContrast ? '#f9fafb' : '#1f2937' }}
                >
                  {language === 'de' 
                    ? `Frage ${currentVisibleIndex + 1} von ${visibleQuestions.length}`
                    : `Question ${currentVisibleIndex + 1} of ${visibleQuestions.length}`}
                </Text>
                <ActionIcon
                  onClick={handleHomeClick}
                  variant="light"
                  color="gray"
                  size="lg"
                  className="home-button"
                  style={{
                    backgroundColor: highContrast ? '#4b5563' : '#f3f4f6',
                    color: highContrast ? '#f9fafb' : '#374151',
                  }}
                >
                  <Home size={20} />
                </ActionIcon>
              </Group>
              <Text 
                fw={600} 
                size="lg"
                style={{ color: highContrast ? '#f9fafb' : '#1f2937' }}
              >
                {progress}%
              </Text>
            </Group>
            <Progress 
              value={progress} 
              size="xl" 
              radius="xl"
              color="blue"
              styles={{
                root: {
                  backgroundColor: highContrast ? '#4b5563' : '#e5e7eb',
                },
                bar: {
                  backgroundColor: highContrast ? '#f9fafb' : '#2563eb',
                }
              }}
            />
          </div>
          
          <Paper 
            radius="xl" 
            className="section-header"
            style={{
              backgroundColor: highContrast ? '#4b5563' : '#1d4ed8',
              color: '#ffffff',
              border: highContrast ? '2px solid #d1d5db' : 'none',
            }}
            p="xl"
          >
            <Title 
              order={2}
              style={{ 
                fontWeight: 700,
                letterSpacing: '-0.025em'
              }}
            >
              {part === 'pre' 
                ? language === 'de' ? 'Teil 1: Vorerhebung' : 'Part 1: Pre-assessment'
                : language === 'de' ? 'Teil 2: Erfolgskontrolle' : 'Part 2: Success evaluation'}
            </Title>
            <Text size="xl" style={{ lineHeight: 1.6, opacity: 0.9 }}>
              {currentQuestion.section[language]}
            </Text>
          </Paper>
          
          <Paper 
            shadow="xl" 
            radius="xl" 
            p="xl" 
            mt={0}
            style={{
              backgroundColor: highContrast ? '#374151' : '#ffffff',
              border: highContrast ? '2px solid #d1d5db' : '1px solid #e5e7eb',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <Stack gap="xl">
              <Flex justify="space-between" align="flex-start" gap="lg">
                <Title 
                  order={3}
                  style={{ 
                    flex: 1,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: highContrast ? '#f9fafb' : '#1f2937'
                  }}
                >
                  {currentQuestion.question[language]}
                </Title>
                <ActionIcon
                  onClick={isReading ? stopReading : readQuestion}
                  variant="light"
                  color="blue"
                  size="xl"
                  className="speech-button"
                  style={{
                    backgroundColor: highContrast ? '#4b5563' : '#dbeafe',
                    color: highContrast ? '#f9fafb' : '#1d4ed8',
                  }}
                >
                  <Volume2 size={28} className={isReading ? 'animate-pulse' : ''} />
                </ActionIcon>
              </Flex>
              
              {currentQuestion.description && (
                <Text 
                  c={highContrast ? "gray.3" : "gray.6"}
                  size="lg"
                  style={{ lineHeight: 1.6 }}
                >
                  {currentQuestion.description[language]}
                </Text>
              )}

              {speechError && (
                <Alert 
                  icon={<XCircle size={20} />} 
                  color="red"
                  variant="light"
                  radius="lg"
                  styles={{
                    root: {
                      backgroundColor: highContrast ? '#7f1d1d' : '#fef2f2',
                      color: highContrast ? '#f9fafb' : '#991b1b',
                      borderColor: highContrast ? '#d1d5db' : '#fecaca',
                    }
                  }}
                >
                  <Text size="lg">{speechError}</Text>
                </Alert>
              )}

              {showError && (
                <Alert 
                  icon={<XCircle size={20} />} 
                  color="red"
                  variant="light"
                  radius="lg"
                  styles={{
                    root: {
                      backgroundColor: highContrast ? '#7f1d1d' : '#fef2f2',
                      color: highContrast ? '#f9fafb' : '#991b1b',
                      borderColor: highContrast ? '#d1d5db' : '#fecaca',
                    }
                  }}
                >
                  <Text size="lg">
                    {language === 'de'
                      ? 'Bitte wählen Sie eine Antwort aus, bevor Sie fortfahren.'
                      : 'Please select an answer before continuing.'}
                  </Text>
                </Alert>
              )}
              
              {renderQuestionContent()}
            </Stack>
            
            <Group justify="space-between" mt="xl" pt="xl">
              <Button
                onClick={handlePrevious}
                variant="light"
                color="gray"
                size="xl"
                leftSection={<ChevronLeft size={24} />}
                style={{
                  backgroundColor: highContrast ? '#4b5563' : '#f3f4f6',
                  color: highContrast ? '#f9fafb' : '#374151',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  padding: '1rem 2rem',
                }}
              >
                {language === 'de' ? 'Zurück' : 'Back'}
              </Button>
              
              <Button
                onClick={handleNext}
                size="xl"
                variant="filled"
                color="blue"
                disabled={
                  currentQuestion.required && 
                  (formData[currentQuestion.id] === undefined || 
                   formData[currentQuestion.id] === null || 
                   (Array.isArray(formData[currentQuestion.id]) && (formData[currentQuestion.id] as string[]).length === 0) ||
                   formData[currentQuestion.id] === '')
                }
                rightSection={
                  currentVisibleIndex === visibleQuestions.length - 1 ? 
                    <Save size={24} /> : 
                    <ChevronRight size={24} />
                }
                style={{
                  backgroundColor: highContrast ? '#f9fafb' : '#2563eb',
                  color: highContrast ? '#1f2937' : '#ffffff',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  padding: '1rem 2rem',
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