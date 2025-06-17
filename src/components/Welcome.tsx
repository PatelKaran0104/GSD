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
  };

  return (
    <div style={containerStyle} className={`${fontSize} ${highContrast ? 'high-contrast' : ''}`}>
      <Container size="md" py="xl">
        <AccessibilityControls />
        
        <Paper 
          shadow="xl" 
          radius="xl" 
          p="xl"
          mt="xl"
          className="main-container"
          style={{
            backgroundColor: highContrast ? '#000000' : undefined,
            border: highContrast ? '2px solid #ffffff' : undefined,
            color: highContrast ? '#ffffff' : undefined,
          }}
        >
          <Center mb="xl">
            <Stethoscope size={64} color={highContrast ? '#ffffff' : '#1d4ed8'} />
          </Center>
          
          <Title 
            order={1} 
            ta="center" 
            mb="xl"
            style={{ 
              color: highContrast ? '#ffffff' : '#1e3a8a',
              fontSize: fontSize === 'text-xl' ? '2rem' : 
                       fontSize === 'text-2xl' ? '2.5rem' :
                       fontSize === 'text-3xl' ? '3rem' : '3.5rem'
            }}
          >
            {translations.title[language]}
          </Title>
          
          <Stack gap="lg" mb="xl">
            <Text size="lg">{translations.welcome[language]}</Text>
            <Text size="lg">{translations.parts[language]}</Text>
            
            <Stack gap="lg">
              <Paper 
                p="lg" 
                radius="xl"
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
                    fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                             fontSize === 'text-2xl' ? '1.875rem' :
                             fontSize === 'text-3xl' ? '2.25rem' : '2.75rem'
                  }}
                >
                  {translations.part1.title[language]}
                </Title>
                <Text mb="lg">{translations.part1.description[language]}</Text>
                <Button 
                  component={Link} 
                  to="/questionnaire/pre" 
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant={highContrast ? "filled" : "filled"}
                  color={highContrast ? "gray" : "blue"}
                  style={{
                    backgroundColor: highContrast ? '#ffffff' : undefined,
                    color: highContrast ? '#000000' : undefined,
                  }}
                >
                  {translations.part1.button[language]}
                </Button>
              </Paper>
              
              <Paper 
                p="lg" 
                radius="xl"
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
                    fontSize: fontSize === 'text-xl' ? '1.5rem' : 
                             fontSize === 'text-2xl' ? '1.875rem' :
                             fontSize === 'text-3xl' ? '2.25rem' : '2.75rem'
                  }}
                >
                  {translations.part2.title[language]}
                </Title>
                <Text mb="lg">{translations.part2.description[language]}</Text>
                <Button 
                  component={Link} 
                  to="/questionnaire/post" 
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant={highContrast ? "filled" : "filled"}
                  color={highContrast ? "gray" : "blue"}
                  style={{
                    backgroundColor: highContrast ? '#ffffff' : undefined,
                    color: highContrast ? '#000000' : undefined,
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