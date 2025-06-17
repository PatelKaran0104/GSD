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
      shadow="lg" 
      p="lg"
      radius="xl"
      style={{
        backgroundColor: highContrast ? '#4b5563' : '#ffffff',
        border: highContrast ? '2px solid #d1d5db' : '1px solid #e5e7eb',
      }}
    >
      <Group gap="md">
        <Tooltip 
          label={language === 'de' ? "Schriftgröße verkleinern" : "Decrease font size"}
          position="bottom"
        >
          <ActionIcon
            onClick={decreaseFontSize}
            disabled={fontSize === 'text-xl'}
            variant="light"
            color="blue"
            size="xl"
            radius="lg"
            style={{
              backgroundColor: highContrast ? '#374151' : '#dbeafe',
              color: highContrast ? '#f9fafb' : '#1d4ed8',
            }}
          >
            <ZoomOut size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip 
          label={language === 'de' ? "Schriftgröße vergrößern" : "Increase font size"}
          position="bottom"
        >
          <ActionIcon
            onClick={increaseFontSize}
            disabled={fontSize === 'text-4xl'}
            variant="light"
            color="blue"
            size="xl"
            radius="lg"
            style={{
              backgroundColor: highContrast ? '#374151' : '#dbeafe',
              color: highContrast ? '#f9fafb' : '#1d4ed8',
            }}
          >
            <ZoomIn size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip 
          label={language === 'de' ? "Kontrast umschalten" : "Toggle contrast"}
          position="bottom"
        >
          <ActionIcon
            onClick={toggleHighContrast}
            variant="light"
            color="blue"
            size="xl"
            radius="lg"
            style={{
              backgroundColor: highContrast ? '#374151' : '#dbeafe',
              color: highContrast ? '#f9fafb' : '#1d4ed8',
            }}
          >
            <Sun size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip 
          label={language === 'de' ? "Sprache ändern zu Englisch" : "Change language to German"}
          position="bottom"
        >
          <ActionIcon
            onClick={toggleLanguage}
            variant="light"
            color="blue"
            size="xl"
            radius="lg"
            style={{
              backgroundColor: highContrast ? '#374151' : '#dbeafe',
              color: highContrast ? '#f9fafb' : '#1d4ed8',
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