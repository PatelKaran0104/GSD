import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessibilityControls from './AccessibilityControls';
import { Container, Paper, Title, Text, Button, Stack, Group, Center, List } from '@mantine/core';
import { CheckCircle, BarChart3, FileText } from 'lucide-react';

const ThankYou: React.FC = () => {
  const { fontSize, highContrast, language } = useAppContext();

  const translations = {
    title: {
      de: 'Vielen Dank!',
      en: 'Thank You!'
    },
    submitted: {
      de: 'Ihre Antworten wurden erfolgreich übermittelt.',
      en: 'Your answers have been successfully submitted.'
    },
    thanks: {
      de: 'Wir danken Ihnen für Ihre Teilnahme an dieser Umfrage.',
      en: 'We thank you for your participation in this survey.'
    },
    dataInfo: {
      de: 'Ihre Daten helfen uns, die Versorgung mit orthopädischen Schuhen zu verbessern.',
      en: 'Your data helps us improve orthopedic shoe care.'
    },
    nextSteps: {
      de: 'Nächste Schritte:',
      en: 'Next steps:'
    },
    doctorInfo: {
      de: 'Ihr Arzt wird die Ergebnisse in Ihre Behandlung einbeziehen.',
      en: 'Your doctor will incorporate the results into your treatment.'
    },
    followUp: {
      de: 'Bei Nachfragen können Sie sich jederzeit an Ihr medizinisches Team wenden.',
      en: 'For follow-up questions, you can contact your medical team at any time.'
    },
    backToHome: {
      de: 'Zurück zur Startseite',
      en: 'Back to Home'
    },
    newQuestionnaire: {
      de: 'Neuen Fragebogen starten',
      en: 'Start New Questionnaire'
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: highContrast ? '#000000' : '#eff6ff',
    color: highContrast ? '#ffffff' : '#1e3a8a',
    padding: '2rem 0',
  };

  return (
    <div style={containerStyle} className={`${fontSize} ${highContrast ? 'high-contrast' : ''}`}>
      <Container size="lg" py="xl">
        <AccessibilityControls />
        
        <Paper 
          shadow="xl" 
          radius="xl" 
          p="2xl"
          mt="xl"
          className="main-container"
          style={{
            backgroundColor: highContrast ? '#000000' : undefined,
            border: highContrast ? '3px solid #ffffff' : '2px solid #e5e7eb',
            color: highContrast ? '#ffffff' : undefined,
          }}
        >
          <Center mb="2xl">
            <CheckCircle size={120} color={highContrast ? '#ffffff' : '#16a34a'} />
          </Center>
          
          <Title 
            order={1} 
            ta="center" 
            mb="2xl"
            style={{ 
              color: highContrast ? '#ffffff' : '#1e3a8a',
              fontSize: fontSize === 'text-xl' ? '2.75rem' : 
                       fontSize === 'text-2xl' ? '3.25rem' :
                       fontSize === 'text-3xl' ? '3.75rem' : '4.25rem',
              lineHeight: 1.2,
            }}
          >
            {translations.title[language]}
          </Title>
          
          <Stack gap="2xl" mb="2xl" ta="center">
            <Text 
              size="xl" 
              fw={600}
              style={{
                fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                         fontSize === 'text-2xl' ? '1.875rem' :
                         fontSize === 'text-3xl' ? '2.25rem' : '2.75rem',
                lineHeight: 1.4,
              }}
            >
              {translations.submitted[language]}
            </Text>
            <Text 
              size="xl"
              style={{
                fontSize: fontSize === 'text-xl' ? '1.375rem' : 
                         fontSize === 'text-2xl' ? '1.625rem' :
                         fontSize === 'text-3xl' ? '2rem' : '2.5rem',
                lineHeight: 1.4,
              }}
            >
              {translations.thanks[language]}
            </Text>
            <Text 
              size="xl" 
              c={highContrast ? "gray.3" : "gray.6"}
              style={{
                fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                         fontSize === 'text-2xl' ? '1.5rem' :
                         fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                lineHeight: 1.4,
              }}
            >
              {translations.dataInfo[language]}
            </Text>
          </Stack>

          <Paper 
            p="2xl" 
            radius="xl" 
            mb="2xl"
            style={{
              backgroundColor: highContrast ? '#1e3a8a' : '#eff6ff',
              border: highContrast ? '3px solid #ffffff' : '2px solid #dbeafe',
            }}
          >
            <Title 
              order={2} 
              mb="xl"
              style={{ 
                color: highContrast ? '#ffffff' : '#1e40af',
                fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                         fontSize === 'text-2xl' ? '1.875rem' :
                         fontSize === 'text-3xl' ? '2.25rem' : '2.75rem',
                lineHeight: 1.2,
              }}
            >
              {translations.nextSteps[language]}
            </Title>
            <List 
              spacing="lg"
              style={{ 
                color: highContrast ? '#cccccc' : '#374151',
              }}
            >
              <List.Item 
                icon={<BarChart3 size={28} />}
                style={{
                  fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                           fontSize === 'text-2xl' ? '1.5rem' :
                           fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                  lineHeight: 1.4,
                  marginBottom: '1rem',
                }}
              >
                {translations.doctorInfo[language]}
              </List.Item>
              <List.Item 
                icon={<FileText size={28} />}
                style={{
                  fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                           fontSize === 'text-2xl' ? '1.5rem' :
                           fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                  lineHeight: 1.4,
                }}
              >
                {translations.followUp[language]}
              </List.Item>
            </List>
          </Paper>
          
          <Group justify="center" gap="xl">
            <Button 
              component={Link} 
              to="/" 
              size="xl"
              radius="lg"
              variant={highContrast ? "filled" : "filled"}
              color={highContrast ? "gray" : "blue"}
              style={{
                backgroundColor: highContrast ? '#ffffff' : undefined,
                color: highContrast ? '#000000' : undefined,
                fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                         fontSize === 'text-2xl' ? '1.5rem' :
                         fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                padding: '1rem 2rem',
                height: '64px',
                fontWeight: 600,
              }}
            >
              {translations.backToHome[language]}
            </Button>
            
            <Button 
              component={Link} 
              to="/" 
              size="xl"
              radius="lg"
              variant={highContrast ? "outline" : "outline"}
              color={highContrast ? "gray" : "blue"}
              style={{
                borderColor: highContrast ? '#ffffff' : undefined,
                color: highContrast ? '#ffffff' : undefined,
                borderWidth: '2px',
                fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                         fontSize === 'text-2xl' ? '1.5rem' :
                         fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                padding: '1rem 2rem',
                height: '64px',
                fontWeight: 600,
              }}
            >
              {translations.newQuestionnaire[language]}
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
};

export default ThankYou;