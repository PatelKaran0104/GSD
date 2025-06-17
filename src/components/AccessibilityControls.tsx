import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Paper, ActionIcon, Group, Tooltip } from '@mantine/core';
import { ZoomIn, ZoomOut, Sun, Languages } from 'lucide-react';

const AccessibilityControls: React.FC = () => {
  const { 
    fontSize, 
    increaseFontSize, 
    decreaseFontSize, 
    highContrast, 
    toggleHighContrast,
    language,
    toggleLanguage 
  } = useAppContext();

  return (
    <Paper 
      className="accessibility-controls" 
      shadow="md" 
      p="lg"
      radius="lg"
      style={{
        backgroundColor: highContrast ? '#1e3a8a' : undefined,
        color: highContrast ? 'white' : undefined,
        border: highContrast ? '3px solid #ffffff' : '2px solid #e5e7eb',
      }}
    >
      <Group gap="lg">
        <Tooltip label={language === 'de' ? "Schriftgröße verkleinern" : "Decrease font size"}>
          <ActionIcon
            onClick={decreaseFontSize}
            disabled={fontSize === 'text-xl'}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="xl"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
              width: '48px',
              height: '48px',
            }}
          >
            <ZoomOut size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={language === 'de' ? "Schriftgröße vergrößern" : "Increase font size"}>
          <ActionIcon
            onClick={increaseFontSize}
            disabled={fontSize === 'text-4xl'}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="xl"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
              width: '48px',
              height: '48px',
            }}
          >
            <ZoomIn size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={language === 'de' ? "Kontrast umschalten" : "Toggle contrast"}>
          <ActionIcon
            onClick={toggleHighContrast}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="xl"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
              width: '48px',
              height: '48px',
            }}
          >
            <Sun size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={language === 'de' ? "Sprache ändern zu Englisch" : "Change language to German"}>
          <ActionIcon
            onClick={toggleLanguage}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="xl"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
              width: '48px',
              height: '48px',
            }}
          >
            <Languages size={24} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Paper>
  );
};

export default AccessibilityControls;