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
      p="md"
      radius="lg"
      style={{
        backgroundColor: highContrast ? '#1e3a8a' : undefined,
        color: highContrast ? 'white' : undefined,
        border: highContrast ? '2px solid #ffffff' : undefined,
      }}
    >
      <Group gap="sm">
        <Tooltip label={language === 'de' ? "Schriftgröße verkleinern" : "Decrease font size"}>
          <ActionIcon
            onClick={decreaseFontSize}
            disabled={fontSize === 'text-xl'}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="lg"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
            }}
          >
            <ZoomOut size={20} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={language === 'de' ? "Schriftgröße vergrößern" : "Increase font size"}>
          <ActionIcon
            onClick={increaseFontSize}
            disabled={fontSize === 'text-4xl'}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="lg"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
            }}
          >
            <ZoomIn size={20} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={language === 'de' ? "Kontrast umschalten" : "Toggle contrast"}>
          <ActionIcon
            onClick={toggleHighContrast}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="lg"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
            }}
          >
            <Sun size={20} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={language === 'de' ? "Sprache ändern zu Englisch" : "Change language to German"}>
          <ActionIcon
            onClick={toggleLanguage}
            variant={highContrast ? "filled" : "light"}
            color={highContrast ? "gray" : "blue"}
            size="lg"
            style={{
              borderRadius: '50%',
              backgroundColor: highContrast ? '#ffffff' : undefined,
              color: highContrast ? '#000000' : undefined,
            }}
          >
            <Languages size={20} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Paper>
  );
};

export default AccessibilityControls;