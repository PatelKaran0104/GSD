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
  };

  return (
    <div style={containerStyle} className={`${fontSize} ${highContrast ? 'high-contrast' : ''}`}>
      <Container size="lg" py="xl">
        <AccessibilityControls />
        
        <Paper 
          shadow="xl" 
          radius="xl" 
          p="xl"
          mt="xl"
          style={{
            backgroundColor: highContrast ? '#000000' : undefined,
            border: highContrast ? '2px solid #ffffff' : undefined,
            color: highContrast ? '#ffffff' : undefined,
          }}
        >
          <Center mb="xl">
            <CheckCircle size={96} color={highContrast ? '#ffffff' : '#16a34a'} />
          </Center>
          
          <Title 
            order={1} 
            ta="center" 
            mb="xl"
            style={{ 
              color: highContrast ? '#ffffff' : '#1e3a8a',
              fontSize: fontSize === 'text-xl' ? '2.5rem' : 
                       fontSize === 'text-2xl' ? '3rem' :
                       fontSize === 'text-3xl' ? '3.5rem' : '4rem'
            }}
          >
            {translations.title[language]}
          </Title>
          
          <Stack gap="lg" mb="xl" ta="center">
            <Text size="lg" fw={600}>{translations.submitted[language]}</Text>
            <Text size="lg">{translations.thanks[language]}</Text>
            <Text 
              size="lg" 
              c={highContrast ? "gray.3" : "gray.6"}
            >
              {translations.dataInfo[language]}
            </Text>
          </Stack>

          <Paper 
            p="lg" 
            radius="lg" 
            mb="xl"
            style={{
              backgroundColor: highContrast ? '#1e3a8a' : '#eff6ff',
              border: highContrast ? '2px solid #ffffff' : undefined,
            }}
          >
            <Title 
              order={2} 
              mb="md"
              style={{ 
                color: highContrast ? '#ffffff' : '#1e40af',
                fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                         fontSize === 'text-2xl' ? '1.5rem' :
                         fontSize === 'text-3xl' ? '1.875rem' : '2.25rem'
              }}
            >
              {translations.nextSteps[language]}
            </Title>
            <List 
              spacing="sm"
              style={{ color: highContrast ? '#cccccc' : '#374151' }}
            >
              <List.Item 
                icon={<BarChart3 size={20} />}
              >
                {translations.doctorInfo[language]}
              </List.Item>
              <List.Item 
                icon={<FileText size={20} />}
              >
                {translations.followUp[language]}
              </List.Item>
            </List>
          </Paper>
          
          <Group justify="center" gap="md">
            <Button 
              component={Link} 
              to="/" 
              size="lg"
              variant={highContrast ? "filled" : "filled"}
              color={highContrast ? "gray" : "blue"}
              style={{
                backgroundColor: highContrast ? '#ffffff' : undefined,
                color: highContrast ? '#000000' : undefined,
              }}
            >
              {translations.backToHome[language]}
            </Button>
            
            <Button 
              component={Link} 
              to="/" 
              size="lg"
              variant={highContrast ? "outline" : "outline"}
              color={highContrast ? "gray" : "blue"}
              style={{
                borderColor: highContrast ? '#ffffff' : undefined,
                color: highContrast ? '#ffffff' : undefined,
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