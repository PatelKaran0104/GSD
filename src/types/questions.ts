export interface QuestionOption {
  label: {
    de: string;
    en: string;
  };
  value: string;
}

export interface Question {
  id: string;
  section: {
    de: string;
    en: string;
  };
  question: {
    de: string;
    en: string;
  };
  description?: {
    de: string;
    en: string;
  };
  type: 'radio' | 'checkbox' | 'text' | 'number' | 'scale';
  required: boolean;
  options?: QuestionOption[];
  placeholder?: string;
  conditionalDisplay?: {
    questionId: string;
    value: string;
  };
  conditionalNext?: {
    [key: string]: number;
  };
  scaleStart?: {
    de: string;
    en: string;
  };
  scaleEnd?: {
    de: string;
    en: string;
  };
  scaleLabels?: {
    de: string[];
    en: string[];
  };
}