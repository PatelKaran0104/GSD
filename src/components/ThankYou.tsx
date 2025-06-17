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

  return (
    <div className={`thankyou-container ${fontSize} ${highContrast ? 'dark-mode' : ''}`}>
      <Container size="lg" py="xl">
        <AccessibilityControls />
        
        <Paper 
          shadow="xl" 
          radius="xl" 
          p="xl"
          mt="xl"
          style={{
            backgroundColor: highContrast ? '#374151' : '#ffffff',
            border: highContrast ? '2px solid #d1d5db' : '1px solid #e5e7eb',
          }}
        >
          <Center mb="xl">
            <CheckCircle 
              size={120} 
              color={highContrast ? '#f9fafb' : '#16a34a'} 
              strokeWidth={1.5}
            />
          </Center>
          
          <Title 
            order={1} 
            ta="center" 
            mb="xl"
            style={{ 
              color: highContrast ? '#f9fafb' : '#1e3a8a',
              fontWeight: 700,
              letterSpacing: '-0.025em'
            }}
          >
            {translations.title[language]}
          </Title>
          
          <Stack gap="xl" mb="xl" ta="center">
            <Text 
              size="xl" 
              fw={600}
              style={{ 
                lineHeight: 1.6,
                color: highContrast ? '#f9fafb' : '#1f2937'
              }}
            >
              {translations.submitted[language]}
            </Text>
            <Text 
              size="lg"
              style={{ 
                lineHeight: 1.7,
                color: highContrast ? '#e5e7eb' : '#374151'
              }}
            >
              {translations.thanks[language]}
            </Text>
            <Text 
              size="lg" 
              style={{ 
                lineHeight: 1.7,
                color: highContrast ? '#d1d5db' : '#6b7280',
                fontStyle: 'italic'
              }}
            >
              {translations.dataInfo[language]}
            </Text>
          </Stack>

          <Paper 
            p="xl" 
            radius="xl" 
            mb="xl"
            className="info-section"
            style={{
              backgroundColor: highContrast ? '#4b5563' : '#eff6ff',
              border: highContrast ? '2px solid #d1d5db' : '2px solid #dbeafe',
            }}
          >
            <Title 
              order={2} 
              mb="lg"
              style={{ 
                color: highContrast ? '#f9fafb' : '#1e40af',
                fontWeight: 600
              }}
            >
              {translations.nextSteps[language]}
            </Title>
            <List 
              spacing="lg"
              styles={{
                itemWrapper: {
                  alignItems: 'flex-start'
                },
                itemIcon: {
                  marginTop: '0.25rem'
                }
              }}
            >
              <List.Item 
                icon={<BarChart3 size={24} color={highContrast ? '#f9fafb' : '#1e40af'} />}
              >
                <Text 
                  size="lg"
                  style={{ 
                    lineHeight: 1.6,
                    color: highContrast ? '#e5e7eb' : '#374151'
                  }}
                >
                  {translations.doctorInfo[language]}
                </Text>
              </List.Item>
              <List.Item 
                icon={<FileText size={24} color={highContrast ? '#f9fafb' : '#1e40af'} />}
              >
                <Text 
                  size="lg"
                  style={{ 
                    lineHeight: 1.6,
                    color: highContrast ? '#e5e7eb' : '#374151'
                  }}
                >
                  {translations.followUp[language]}
                </Text>
              </List.Item>
            </List>
          </Paper>
          
          <Group justify="center" gap="lg">
            <Button 
              component={Link} 
              to="/" 
              size="xl"
              variant="filled"
              color="blue"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                padding: '1rem 2rem',
                backgroundColor: highContrast ? '#f9fafb' : '#2563eb',
                color: highContrast ? '#1f2937' : '#ffffff',
              }}
            >
              {translations.backToHome[language]}
            </Button>
            
            <Button 
              component={Link} 
              to="/" 
              size="xl"
              variant="outline"
              color="blue"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                padding: '1rem 2rem',
                borderColor: highContrast ? '#f9fafb' : '#2563eb',
                color: highContrast ? '#f9fafb' : '#2563eb',
                borderWidth: '2px',
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