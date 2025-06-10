import { Question } from '../types/questions';

export const postQuestions: Question[] = [
  {
    id: 'post_walking_distance',
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
      }
    ]
  },
  {
    id: 'post_walking_improvement',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Im Vergleich zur Zeit vor Erhalt Ihrer orthopädischen Schuhe, hat sich Ihre Gehfähigkeit…',
      en: 'Compared to before receiving your orthopedic shoes, has your walking ability...'
    },
    description: {
      de: '(ICF: d450)',
      en: '(ICF: d450)'
    },
    type: 'radio',
    required: true,
    options: [
      {
        label: {
          de: '… durch die Schuhe verbessert',
          en: '... improved because of the shoes'
        },
        value: 'improved_by_shoes'
      },
      {
        label: {
          de: '… verbessert, aber nicht wegen der Schuhe',
          en: '... improved, but not because of the shoes'
        },
        value: 'improved_other'
      },
      {
        label: {
          de: '… nicht verändert',
          en: '... not changed'
        },
        value: 'unchanged'
      },
      {
        label: {
          de: '… verschlechtert, aber nicht wegen der Schuhe',
          en: '... worsened, but not because of the shoes'
        },
        value: 'worsened_other'
      },
      {
        label: {
          de: '… durch die Schuhe verschlechtert',
          en: '... worsened because of the shoes'
        },
        value: 'worsened_by_shoes'
      }
    ]
  },
  {
    id: 'post_conditions',
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
      }
    ]
  },
  {
    id: 'post_other_condition',
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
      questionId: 'post_conditions',
      value: 'other'
    }
  },
  {
    id: 'post_wounds',
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
      }
    ],
    conditionalNext: {
      'no': 6
    }
  },
  {
    id: 'post_wound_location',
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
    }
  },
  {
    id: 'post_shoe_fit',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Wie gut passen Ihre orthopädischen Schuhe?',
      en: 'How well do your orthopedic shoes fit?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Sehr gut',
      en: 'Very well'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Schlecht', 'Mittelmäßig', 'Gut', 'Sehr gut'],
      en: ['Not at all', 'Poor', 'Fair', 'Good', 'Very well']
    }
  },
  {
    id: 'post_shoe_comfort',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Wie bequem sind Ihre orthopädischen Schuhe?',
      en: 'How comfortable are your orthopedic shoes?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Sehr bequem',
      en: 'Very comfortable'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Unbequem', 'Mittelmäßig', 'Bequem', 'Sehr bequem'],
      en: ['Not at all', 'Uncomfortable', 'Fair', 'Comfortable', 'Very comfortable']
    }
  },
  {
    id: 'post_shoe_usage',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Wie oft tragen Sie Ihre orthopädischen Schuhe?',
      en: 'How often do you wear your orthopedic shoes?'
    },
    type: 'radio',
    required: true,
    options: [
      {
        label: {
          de: 'Täglich',
          en: 'Daily'
        },
        value: 'daily'
      },
      {
        label: {
          de: 'Mehrmals pro Woche',
          en: 'Several times a week'
        },
        value: 'several_times_week'
      },
      {
        label: {
          de: 'Einmal pro Woche',
          en: 'Once a week'
        },
        value: 'once_week'
      },
      {
        label: {
          de: 'Seltener',
          en: 'Less often'
        },
        value: 'less_often'
      },
      {
        label: {
          de: 'Gar nicht',
          en: 'Not at all'
        },
        value: 'not_at_all'
      }
    ]
  },
  {
    id: 'post_shoe_problems',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Haben Sie Probleme mit Ihren orthopädischen Schuhen?',
      en: 'Do you have any problems with your orthopedic shoes?'
    },
    type: 'text',
    required: false,
    description: {
      de: 'Bitte beschreiben Sie alle Probleme, die Sie mit den Schuhen haben.',
      en: 'Please describe any problems you have with the shoes.'
    }
  },
  {
    id: 'post_completion_time',
    section: {
      de: 'G. Abschluss',
      en: 'G. Completion'
    },
    question: {
      de: 'Wie lange haben Sie für das Ausfüllen des Fragebogens benötigt?',
      en: 'How long did it take you to complete the questionnaire?'
    },
    description: {
      de: 'Wird automatisch berechnet',
      en: 'Will be calculated automatically'
    },
    type: 'number',
    required: false,
    placeholder: 'Minuten'
  }
];