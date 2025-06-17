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

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: highContrast ? '#000000' : '#eff6ff',
    color: highContrast ? '#ffffff' : '#1e3a8a',
    padding: '2rem 0',
  };

  return (
    <div style={containerStyle} className={`${fontSize} ${highContrast ? 'high-contrast' : ''}`}>
      <Container size="md" py="xl">
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
            <Stethoscope size={80} color={highContrast ? '#ffffff' : '#1d4ed8'} />
          </Center>
          
          <Title 
            order={1} 
            ta="center" 
            mb="2xl"
            style={{ 
              color: highContrast ? '#ffffff' : '#1e3a8a',
              fontSize: fontSize === 'text-xl' ? '2.25rem' : 
                       fontSize === 'text-2xl' ? '2.75rem' :
                       fontSize === 'text-3xl' ? '3.25rem' : '3.75rem',
              lineHeight: 1.2,
            }}
          >
            {translations.title[language]}
          </Title>
          
          <Stack gap="2xl" mb="2xl">
            <Text 
              size="xl"
              style={{
                fontSize: fontSize === 'text-xl' ? '1.375rem' : 
                         fontSize === 'text-2xl' ? '1.625rem' :
                         fontSize === 'text-3xl' ? '2rem' : '2.5rem',
                lineHeight: 1.4,
              }}
            >
              {translations.welcome[language]}
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
              {translations.parts[language]}
            </Text>
            
            <Stack gap="2xl">
              <Paper 
                p="2xl" 
                radius="xl"
                style={{
                  backgroundColor: highContrast ? '#1e3a8a' : '#eff6ff',
                  border: highContrast ? '3px solid #ffffff' : '2px solid #dbeafe',
                }}
              >
                <Title 
                  order={2} 
                  mb="lg"
                  style={{ 
                    color: highContrast ? '#ffffff' : '#1e40af',
                    fontSize: fontSize === 'text-xl' ? '1.75rem' : 
                             fontSize === 'text-2xl' ? '2.125rem' :
                             fontSize === 'text-3xl' ? '2.5rem' : '3rem',
                    lineHeight: 1.2,
                  }}
                >
                  {translations.part1.title[language]}
                </Title>
                <Text 
                  mb="xl"
                  size="lg"
                  style={{
                    fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                             fontSize === 'text-2xl' ? '1.5rem' :
                             fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                    lineHeight: 1.4,
                    color: highContrast ? '#cccccc' : undefined,
                  }}
                >
                  {translations.part1.description[language]}
                </Text>
                <Button 
                  component={Link} 
                  to="/questionnaire/pre" 
                  fullWidth
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
                    height: '64px',
                    fontWeight: 600,
                  }}
                >
                  {translations.part1.button[language]}
                </Button>
              </Paper>
              
              <Paper 
                p="2xl" 
                radius="xl"
                style={{
                  backgroundColor: highContrast ? '#1e3a8a' : '#eff6ff',
                  border: highContrast ? '3px solid #ffffff' : '2px solid #dbeafe',
                }}
              >
                <Title 
                  order={2} 
                  mb="lg"
                  style={{ 
                    color: highContrast ? '#ffffff' : '#1e40af',
                    fontSize: fontSize === 'text-xl' ? '1.75rem' : 
                             fontSize === 'text-2xl' ? '2.125rem' :
                             fontSize === 'text-3xl' ? '2.5rem' : '3rem',
                    lineHeight: 1.2,
                  }}
                >
                  {translations.part2.title[language]}
                </Title>
                <Text 
                  mb="xl"
                  size="lg"
                  style={{
                    fontSize: fontSize === 'text-xl' ? '1.25rem' : 
                             fontSize === 'text-2xl' ? '1.5rem' :
                             fontSize === 'text-3xl' ? '1.875rem' : '2.25rem',
                    lineHeight: 1.4,
                    color: highContrast ? '#cccccc' : undefined,
                  }}
                >
                  {translations.part2.description[language]}
                </Text>
                <Button 
                  component={Link} 
                  to="/questionnaire/post" 
                  fullWidth
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
                    height: '64px',
                    fontWeight: 600,
                  }}
                >
                  {translations.part2.button[language]}
                </Button>
              </Paper>
            </Stack>
          </Stack>
          
          <Center mt="2xl">
            <Text 
              c={highContrast ? "gray.3" : "gray.6"}
              ta="center"
              size="lg"
              style={{
                fontSize: fontSize === 'text-xl' ? '1.125rem' : 
                         fontSize === 'text-2xl' ? '1.375rem' :
                         fontSize === 'text-3xl' ? '1.625rem' : '2rem',
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