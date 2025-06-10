import { Question } from '../types/questions';

export const preQuestions: Question[] = [
  {
    id: 'pre_walking_distance',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Wie weit können Sie aktuell gehen?',
      en: 'How far can you currently walk?'
    },
    description: {
      de: '(ICF: d450 Gehen)',
      en: '(ICF: d450 Walking)'
    },
    type: 'radio',
    required: true,
    options: [
      { 
        label: {
          de: 'Ich kann mich nur in meiner Wohnung bewegen (0–10 Meter)',
          en: 'I can only move around in my apartment (0-10 meters)'
        },
        value: '0-10'
      },
      {
        label: {
          de: 'Ich kann zum Nachbarn gehen (10–50 Meter)',
          en: 'I can walk to my neighbors (10-50 meters)'
        },
        value: '10-50'
      },
      {
        label: {
          de: 'Ich kann bis zur Straßenecke gehen (50–200 Meter)',
          en: 'I can walk to the street corner (50-200 meters)'
        },
        value: '50-200'
      },
      {
        label: {
          de: 'Ich kann zu Geschäften in der Nachbarschaft gehen (200 Meter – 1 Kilometer)',
          en: 'I can walk to stores in the neighborhood (200 meters - 1 kilometer)'
        },
        value: '200-1000'
      },
      {
        label: {
          de: 'Ich kann längere Strecken ohne Pause gehen (mehr als 1 Kilometer)',
          en: 'I can walk longer distances without a break (more than 1 kilometer)'
        },
        value: '1000+'
      },
    ],
  },
  {
    id: 'pre_conditions',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Welche der folgenden Erkrankungen haben Sie?',
      en: 'Which of the following conditions do you have?'
    },
    description: {
      de: '(Mehrfachantwort möglich)',
      en: '(Multiple answers possible)'
    },
    type: 'checkbox',
    required: true,
    options: [
      {
        label: {
          de: 'Diabetes',
          en: 'Diabetes'
        },
        value: 'diabetes'
      },
      {
        label: {
          de: 'Rheumatoide Arthritis',
          en: 'Rheumatoid Arthritis'
        },
        value: 'arthritis'
      },
      {
        label: {
          de: 'Fußfehlstellung (z. B. Plattfuß, Krallenzehen, Hallux valgus)',
          en: 'Foot deformity (e.g., flat foot, claw toes, hallux valgus)'
        },
        value: 'foot_deformity'
      },
      {
        label: {
          de: 'Muskelerkrankung',
          en: 'Muscle disease'
        },
        value: 'muscle_disease'
      },
      {
        label: {
          de: 'Sonstiges',
          en: 'Other'
        },
        value: 'other'
      },
    ],
  },
  {
    id: 'pre_other_condition',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Bitte geben Sie Ihre sonstige Erkrankung an:',
      en: 'Please specify your other condition:'
    },
    type: 'text',
    required: false,
    conditionalDisplay: {
      questionId: 'pre_conditions',
      value: 'other',
    },
  },
  {
    id: 'pre_wounds',
    section: {
      de: 'B. Aktuelle Situation',
      en: 'B. Current Situation'
    },
    question: {
      de: 'Haben Sie Wunden oder Geschwüre an Füßen oder Knöcheln?',
      en: 'Do you have wounds or ulcers on your feet or ankles?'
    },
    description: {
      de: '(ICF: b810 Schutzfunktion der Haut)',
      en: '(ICF: b810 Protective functions of the skin)'
    },
    type: 'radio',
    required: true,
    options: [
      {
        label: {
          de: 'Ja',
          en: 'Yes'
        },
        value: 'yes'
      },
      {
        label: {
          de: 'Nein',
          en: 'No'
        },
        value: 'no'
      },
    ],
    conditionalNext: {
      'no': 5,
    },
  },
  {
    id: 'pre_wound_location',
    section: {
      de: 'B. Aktuelle Situation',
      en: 'B. Current Situation'
    },
    question: {
      de: 'Bitte beschreiben Sie, wo sich die Wunden/Geschwüre befinden:',
      en: 'Please describe where the wounds/ulcers are located:'
    },
    type: 'text',
    required: false,
    description: {
      de: 'In einer vollständigen Anwendung würde hier eine interaktive Fußabbildung angezeigt.',
      en: 'In a complete application, an interactive foot illustration would be shown here.'
    },
  },
  
];