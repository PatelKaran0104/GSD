import { Question } from '../types/questions';

export const postQuestions: Question[] = [
  // A. Personal Information
  {
    id: 'post_age',
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
    id: 'post_gender',
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
    id: 'post_walking_aids',
    section: {
      de: 'A. Persönliche Angaben',
      en: 'A. Personal Information'
    },
    question: {
      de: 'Welche Gehhilfen verwenden Sie aktuell?',
      en: 'Which walking aids do you currently use?'
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

  // B. Current Situation
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
      'no': 10
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
    id: 'post_pain_level',
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
  {
    id: 'post_pain_improvement',
    section: {
      de: 'B. Aktuelle Situation',
      en: 'B. Current Situation'
    },
    question: {
      de: 'Im Vergleich zur Zeit vor Erhalt Ihrer orthopädischen Schuhe, haben sich Ihre Schmerzen…',
      en: 'Compared to before receiving your orthopedic shoes, has your pain...'
    },
    description: {
      de: '(ICF: b280)',
      en: '(ICF: b280)'
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

  // C. Orthopedic Shoes
  {
    id: 'post_shoe_duration',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Seit wann tragen Sie orthopädische Schuhe?',
      en: 'How long have you been wearing orthopedic shoes?'
    },
    type: 'radio',
    required: true,
    options: [
      {
        label: {
          de: 'Weniger als 1 Monat',
          en: 'Less than 1 month'
        },
        value: 'less_1_month'
      },
      {
        label: {
          de: '1-3 Monate',
          en: '1-3 months'
        },
        value: '1_3_months'
      },
      {
        label: {
          de: '3-6 Monate',
          en: '3-6 months'
        },
        value: '3_6_months'
      },
      {
        label: {
          de: '6-12 Monate',
          en: '6-12 months'
        },
        value: '6_12_months'
      },
      {
        label: {
          de: 'Mehr als 1 Jahr',
          en: 'More than 1 year'
        },
        value: 'more_1_year'
      }
    ]
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
    id: 'post_shoe_stability',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Wie stabil fühlen Sie sich in Ihren orthopädischen Schuhen?',
      en: 'How stable do you feel in your orthopedic shoes?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Sehr instabil',
      en: 'Very unstable'
    },
    scaleEnd: {
      de: 'Sehr stabil',
      en: 'Very stable'
    },
    scaleLabels: {
      de: ['Sehr instabil', 'Instabil', 'Neutral', 'Stabil', 'Sehr stabil'],
      en: ['Very unstable', 'Unstable', 'Neutral', 'Stable', 'Very stable']
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
          de: 'Schwer anzuziehen',
          en: 'Difficult to put on'
        },
        value: 'difficult_to_wear'
      },
      {
        label: {
          de: 'Unattraktives Aussehen',
          en: 'Unattractive appearance'
        },
        value: 'unattractive'
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
    id: 'post_shoe_problems_other',
    section: {
      de: 'C. Orthopädische Schuhe',
      en: 'C. Orthopedic Shoes'
    },
    question: {
      de: 'Bitte beschreiben Sie Ihre sonstigen Probleme mit den orthopädischen Schuhen:',
      en: 'Please describe your other problems with the orthopedic shoes:'
    },
    type: 'text',
    required: false,
    conditionalDisplay: {
      questionId: 'post_shoe_problems',
      value: 'other'
    }
  },

  // D. Satisfaction and Effectiveness
  {
    id: 'post_satisfaction_overall',
    section: {
      de: 'D. Zufriedenheit und Wirksamkeit',
      en: 'D. Satisfaction and Effectiveness'
    },
    question: {
      de: 'Wie zufrieden sind Sie insgesamt mit Ihren orthopädischen Schuhen?',
      en: 'How satisfied are you overall with your orthopedic shoes?'
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
    id: 'post_expectations_met',
    section: {
      de: 'D. Zufriedenheit und Wirksamkeit',
      en: 'D. Satisfaction and Effectiveness'
    },
    question: {
      de: 'Inwieweit haben die orthopädischen Schuhe Ihre Erwartungen erfüllt?',
      en: 'To what extent have the orthopedic shoes met your expectations?'
    },
    type: 'scale',
    required: true,
    scaleStart: {
      de: 'Überhaupt nicht',
      en: 'Not at all'
    },
    scaleEnd: {
      de: 'Vollständig',
      en: 'Completely'
    },
    scaleLabels: {
      de: ['Überhaupt nicht', 'Wenig', 'Teilweise', 'Größtenteils', 'Vollständig'],
      en: ['Not at all', 'A little', 'Partially', 'Mostly', 'Completely']
    }
  },
  {
    id: 'post_recommend',
    section: {
      de: 'D. Zufriedenheit und Wirksamkeit',
      en: 'D. Satisfaction and Effectiveness'
    },
    question: {
      de: 'Würden Sie orthopädische Schuhe anderen Personen mit ähnlichen Problemen empfehlen?',
      en: 'Would you recommend orthopedic shoes to other people with similar problems?'
    },
    type: 'radio',
    required: true,
    options: [
      {
        label: {
          de: 'Definitiv ja',
          en: 'Definitely yes'
        },
        value: 'definitely_yes'
      },
      {
        label: {
          de: 'Wahrscheinlich ja',
          en: 'Probably yes'
        },
        value: 'probably_yes'
      },
      {
        label: {
          de: 'Unentschieden',
          en: 'Undecided'
        },
        value: 'undecided'
      },
      {
        label: {
          de: 'Wahrscheinlich nein',
          en: 'Probably no'
        },
        value: 'probably_no'
      },
      {
        label: {
          de: 'Definitiv nein',
          en: 'Definitely no'
        },
        value: 'definitely_no'
      }
    ]
  },

  // E. Quality of Life
  {
    id: 'post_qol_mobility',
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
    id: 'post_qol_participation',
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
  {
    id: 'post_qol_improvement',
    section: {
      de: 'E. Lebensqualität',
      en: 'E. Quality of Life'
    },
    question: {
      de: 'Im Vergleich zur Zeit vor Erhalt Ihrer orthopädischen Schuhe, hat sich Ihre Lebensqualität…',
      en: 'Compared to before receiving your orthopedic shoes, has your quality of life...'
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

  // F. Additional Information
  {
    id: 'post_additional_info',
    section: {
      de: 'F. Zusätzliche Informationen',
      en: 'F. Additional Information'
    },
    question: {
      de: 'Gibt es weitere Informationen zu Ihren Erfahrungen mit den orthopädischen Schuhen, die Sie mitteilen möchten?',
      en: 'Is there any additional information about your experience with orthopedic shoes that you would like to share?'
    },
    type: 'text',
    required: false,
    description: {
      de: 'Bitte beschreiben Sie alle weiteren relevanten Aspekte.',
      en: 'Please describe any other relevant aspects.'
    }
  }
];