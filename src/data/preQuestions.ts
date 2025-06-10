import { Question } from '../types/questions';

export const preQuestions: Question[] = [
  // A. Personal Information
  {
    id: 'pre_age',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Wie alt sind Sie?',
      en: 'How old are you?'
    },
    type: 'number',
    required: true,
    placeholder: 'Jahre / Years'
  },
  {
    id: 'pre_gender',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Welches Geschlecht haben Sie?',
      en: 'What is your gender?'
    },
    type: 'radio',
    required: true,
    options: [
      {
        label: {
          de: 'Weiblich',
          en: 'Female'
        },
        value: 'female'
      },
      {
        label: {
          de: 'Männlich',
          en: 'Male'
        },
        value: 'male'
      },
      {
        label: {
          de: 'Divers',
          en: 'Other'
        },
        value: 'other'
      }
    ]
  },
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
    id: 'pre_walking_aids',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Welche Gehhilfen verwenden Sie?',
      en: 'Which walking aids do you use?'
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
          de: 'Keine',
          en: 'None'
        },
        value: 'none'
      },
      {
        label: {
          de: 'Stock',
          en: 'Walking stick'
        },
        value: 'stick'
      },
      {
        label: {
          de: 'Krücken',
          en: 'Crutches'
        },
        value: 'crutches'
      },
      {
        label: {
          de: 'Rollator',
          en: 'Walker'
        },
        value: 'walker'
      },
      {
        label: {
          de: 'Rollstuhl',
          en: 'Wheelchair'
        },
        value: 'wheelchair'
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
    id: 'pre_walking_aids_other',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Bitte geben Sie Ihre sonstige Gehhilfe an:',
      en: 'Please specify your other walking aid:'
    },
    type: 'text',
    required: false,
    conditionalDisplay: {
      questionId: 'pre_walking_aids',
      value: 'other'
    }
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
          de: 'Neurologische Erkrankung',
          en: 'Neurological disease'
        },
        value: 'neurological'
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

  // B. Current Situation
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
      'no': 9,
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
  {
    id: 'pre_pain_level',
    section: {
      de: 'B. Aktuelle Situation',
      en: 'B. Current Situation'
    },
    question: {
      de: 'Wie stark sind Ihre Schmerzen beim Gehen?',
      en: 'How severe is your pain when walking?'
    },
    description: {
      de: '(ICF: b280 Schmerz)',
      en: '(ICF: b280 Pain)'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Keine Schmerzen',
      en: 'No pain'
    },
    scaleEnd: {
      de: 'Sehr starke Schmerzen',
      en: 'Very severe pain'
    },
    scaleLabels: {
      de: ['Keine', 'Leicht', 'Mäßig', 'Stark', 'Sehr stark'],
      en: ['None', 'Mild', 'Moderate', 'Severe', 'Very severe']
    }
  },

  // C. Current Shoes
  {
    id: 'pre_current_shoes',
    section: {
      de: 'C. Aktuelle Schuhe',
      en: 'C. Current Shoes'
    },
    question: {
      de: 'Welche Art von Schuhen tragen Sie normalerweise?',
      en: 'What type of shoes do you normally wear?'
    },
    type: 'checkbox',
    required: true,
    options: [
      {
        label: {
          de: 'Normale Straßenschuhe',
          en: 'Regular street shoes'
        },
        value: 'regular'
      },
      {
        label: {
          de: 'Sportschuhe',
          en: 'Sports shoes'
        },
        value: 'sports'
      },
      {
        label: {
          de: 'Hausschuhe',
          en: 'Slippers'
        },
        value: 'slippers'
      },
      {
        label: {
          de: 'Orthopädische Schuhe',
          en: 'Orthopedic shoes'
        },
        value: 'orthopedic'
      },
      {
        label: {
          de: 'Einlagen in normalen Schuhen',
          en: 'Insoles in regular shoes'
        },
        value: 'insoles'
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
    id: 'pre_shoe_problems',
    section: {
      de: 'C. Aktuelle Schuhe',
      en: 'C. Current Shoes'
    },
    question: {
      de: 'Haben Sie Probleme mit Ihren aktuellen Schuhen?',
      en: 'Do you have problems with your current shoes?'
    },
    type: 'checkbox',
    required: true,
    options: [
      {
        label: {
          de: 'Keine Probleme',
          en: 'No problems'
        },
        value: 'none'
      },
      {
        label: {
          de: 'Druckstellen',
          en: 'Pressure points'
        },
        value: 'pressure'
      },
      {
        label: {
          de: 'Schmerzen',
          en: 'Pain'
        },
        value: 'pain'
      },
      {
        label: {
          de: 'Schlechte Passform',
          en: 'Poor fit'
        },
        value: 'poor_fit'
      },
      {
        label: {
          de: 'Instabilität',
          en: 'Instability'
        },
        value: 'instability'
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

  // D. Expectations
  {
    id: 'pre_expectations_walking',
    section: {
      de: 'D. Erwartungen',
      en: 'D. Expectations'
    },
    question: {
      de: 'Wie sehr erwarten Sie, dass orthopädische Schuhe Ihre Gehfähigkeit verbessern?',
      en: 'How much do you expect orthopedic shoes to improve your walking ability?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Sehr stark',
      en: 'Very much'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Wenig', 'Mäßig', 'Stark', 'Sehr stark'],
      en: ['Not at all', 'A little', 'Moderately', 'Much', 'Very much']
    }
  },
  {
    id: 'pre_expectations_pain',
    section: {
      de: 'D. Erwartungen',
      en: 'D. Expectations'
    },
    question: {
      de: 'Wie sehr erwarten Sie, dass orthopädische Schuhe Ihre Schmerzen reduzieren?',
      en: 'How much do you expect orthopedic shoes to reduce your pain?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Sehr stark',
      en: 'Very much'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Wenig', 'Mäßig', 'Stark', 'Sehr stark'],
      en: ['Not at all', 'A little', 'Moderately', 'Much', 'Very much']
    }
  },
  {
    id: 'pre_expectations_stability',
    section: {
      de: 'D. Erwartungen',
      en: 'D. Expectations'
    },
    question: {
      de: 'Wie sehr erwarten Sie, dass orthopädische Schuhe Ihre Stabilität beim Gehen verbessern?',
      en: 'How much do you expect orthopedic shoes to improve your stability when walking?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Sehr stark',
      en: 'Very much'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Wenig', 'Mäßig', 'Stark', 'Sehr stark'],
      en: ['Not at all', 'A little', 'Moderately', 'Much', 'Very much']
    }
  },

  // E. Quality of Life
  {
    id: 'pre_qol_mobility',
    section: {
      de: 'E. Lebensqualität',
      en: 'E. Quality of Life'
    },
    question: {
      de: 'Wie zufrieden sind Sie mit Ihrer aktuellen Mobilität?',
      en: 'How satisfied are you with your current mobility?'
    },
    description: {
      de: '(ICF: d4 Mobilität)',
      en: '(ICF: d4 Mobility)'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Sehr unzufrieden',
      en: 'Very dissatisfied'
    },
    scaleEnd: {
      de: 'Sehr zufrieden',
      en: 'Very satisfied'
    },
    scaleLabels: {
      de: ['Sehr unzufrieden', 'Unzufrieden', 'Neutral', 'Zufrieden', 'Sehr zufrieden'],
      en: ['Very dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very satisfied']
    }
  },
  {
    id: 'pre_qol_participation',
    section: {
      de: 'E. Lebensqualität',
      en: 'E. Quality of Life'
    },
    question: {
      de: 'Wie sehr schränken Ihre Fußprobleme Ihre Teilnahme am gesellschaftlichen Leben ein?',
      en: 'How much do your foot problems limit your participation in social life?'
    },
    description: {
      de: '(ICF: d9 Gemeinschafts-, soziales und staatsbürgerliches Leben)',
      en: '(ICF: d9 Community, social and civic life)'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Sehr stark',
      en: 'Very much'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Wenig', 'Mäßig', 'Stark', 'Sehr stark'],
      en: ['Not at all', 'A little', 'Moderately', 'Much', 'Very much']
    }
  },

  // F. Additional Information
  {
    id: 'pre_additional_info',
    section: {
      de: 'F. Zusätzliche Informationen',
      en: 'F. Additional Information'
    },
    question: {
      de: 'Gibt es weitere Informationen zu Ihren Fußproblemen oder Erwartungen, die Sie mitteilen möchten?',
      en: 'Is there any additional information about your foot problems or expectations that you would like to share?'
    },
    type: 'text',
    required: false,
    description: {
      de: 'Bitte beschreiben Sie alle weiteren relevanten Aspekte.',
      en: 'Please describe any other relevant aspects.'
    }
  },

  // G. Completion
  {
    id: 'pre_completion_time',
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
    placeholder: 'Minuten / Minutes'
  }
];