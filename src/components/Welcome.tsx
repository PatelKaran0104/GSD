import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessibilityControls from './AccessibilityControls';
import { Container, Paper, Title, Text, Button, Stack, Group, Center } from '@mantine/core';
import { Stethoscope } from 'lucide-react';

const Welcome: React.FC = () => {
  const { fontSize, highContrast, resetForm, language } = useAppContext();
  
  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const translations = {
    title: {
      de: 'MOS-Fragebogen zur Versorgung mit orthopädischen Schuhen',
      en: 'MOS Questionnaire for Orthopedic Shoe Care'
    },
    welcome: {
      de: 'Willkommen zu unserem Fragebogen über orthopädische Schuhe. Dieser Fragebogen hilft uns, Ihre Erfahrungen und Bedürfnisse besser zu verstehen.',
      en: 'Welcome to our questionnaire about orthopedic shoes. This questionnaire helps us better understand your experiences and needs.'
    },
    parts: {
      de: 'Der Fragebogen besteht aus zwei Teilen:',
      en: 'The questionnaire consists of two parts:'
    },
    part1: {
      title: {
        de: 'Teil 1: Vorerhebung',
        en: 'Part 1: Pre-assessment'
      },
      description: {
        de: 'Für Patienten vor dem Erhalt orthopädischer Schuhe.',
        en: 'For patients before receiving orthopedic shoes.'
      },
      button: {
        de: 'Teil 1 starten',
        en: 'Start Part 1'
      }
    },
    part2: {
      title: {
        de: 'Teil 2: Erfolgskontrolle',
        en: 'Part 2: Success evaluation'
      },
      description: {
        de: 'Für Patienten nach dem Erhalt orthopädischer Schuhe.',
        en: 'For patients after receiving orthopedic shoes.'
      },
      button: {
        de: 'Teil 2 starten',
        en: 'Start Part 2'
      }
    },
    selectPart: {
      de: 'Bitte wählen Sie den Teil, der für Sie relevant ist.',
      en: 'Please select the part that is relevant for you.'
    }
  };

  return (
    <div className={`welcome-container ${fontSize} ${highContrast ? 'dark-mode' : ''}`}>
      <Container size="md" py="xl">
        <AccessibilityControls />
        
        <Paper 
          shadow="xl" 
          radius="xl" 
          p="xl"
          mt="xl"
          style={{
            backgroundColor: highContrast ? undefined : '#ffffff',
            border: highContrast ? undefined : '1px solid #e5e7eb',
          }}
        >
          <Center mb="xl">
            <Stethoscope 
              size={72} 
              color={highContrast ? '#f9fafb' : '#1d4ed8'} 
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
          
          <Stack gap="xl" mb="xl">
            <Text 
              size="lg" 
              ta="center"
              style={{ 
                lineHeight: 1.7,
                color: highContrast ? '#e5e7eb' : '#374151'
              }}
            >
              {translations.welcome[language]}
            </Text>
            <Text 
              size="lg" 
              fw={500}
              ta="center"
              style={{ 
                color: highContrast ? '#f9fafb' : '#1f2937'
              }}
            >
              {translations.parts[language]}
            </Text>
            
            <Stack gap="xl">
              <Paper 
                p="xl" 
                radius="xl"
                className={`info-section ${highContrast ? '' : ''}`}
                style={{
                  backgroundColor: highContrast ? undefined : '#eff6ff',
                  border: highContrast ? undefined : '2px solid #dbeafe',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Title 
                  order={2} 
                  mb="md"
                  style={{ 
                    color: highContrast ? '#f9fafb' : '#1e40af',
                    fontWeight: 600
                  }}
                >
                  {translations.part1.title[language]}
                </Title>
                <Text 
                  mb="xl" 
                  size="lg"
                  style={{ 
                    lineHeight: 1.6,
                    color: highContrast ? '#e5e7eb' : '#374151'
                  }}
                >
                  {translations.part1.description[language]}
                </Text>
                <Button 
                  component={Link} 
                  to="/questionnaire/pre" 
                  fullWidth
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
                  {translations.part1.button[language]}
                </Button>
              </Paper>
              
              <Paper 
                p="xl" 
                radius="xl"
                className={`info-section ${highContrast ? '' : ''}`}
                style={{
                  backgroundColor: highContrast ? undefined : '#eff6ff',
                  border: highContrast ? undefined : '2px solid #dbeafe',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Title 
                  order={2} 
                  mb="md"
                  style={{ 
                    color: highContrast ? '#f9fafb' : '#1e40af',
                    fontWeight: 600
                  }}
                >
                  {translations.part2.title[language]}
                </Title>
                <Text 
                  mb="xl" 
                  size="lg"
                  style={{ 
                    lineHeight: 1.6,
                    color: highContrast ? '#e5e7eb' : '#374151'
                  }}
                >
                  {translations.part2.description[language]}
                </Text>
                <Button 
                  component={Link} 
                  to="/questionnaire/post" 
                  fullWidth
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
                  {translations.part2.button[language]}
                </Button>
              </Paper>
            </Stack>
          </Stack>
          
          <Center mt="xl">
            <Text 
              c={highContrast ? "gray.3" : "gray.6"}
              ta="center"
              size="lg"
              style={{ 
                fontStyle: 'italic',
                lineHeight: 1.6
              }}
            >
              {translations.selectPart[language]}
            </Text>
          </Center>
        </Paper>
      </Container>
    </div>
  );
};

export default Welcome;