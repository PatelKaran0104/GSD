import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessibilityControls from './AccessibilityControls';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  const { fontSize, highContrast, language } = useAppContext();

  const translations = {
    title: {
      de: 'Vielen Dank!',
      en: 'Thank You!'
    },
    submitted: {
      de: 'Ihre Antworten wurden erfolgreich übermittelt.',
      en: 'Your answers have been successfully submitted.'
    },
    thanks: {
      de: 'Wir danken Ihnen für Ihre Teilnahme an dieser Umfrage.',
      en: 'We thank you for your participation in this survey.'
    },
    backToHome: {
      de: 'Zurück zur Startseite',
      en: 'Back to Home'
    }
  };

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black text-white' : 'bg-blue-50 text-blue-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <AccessibilityControls />
        
        <div className={`mt-12 max-w-3xl mx-auto ${highContrast ? 'bg-black border-2 border-white' : 'bg-white shadow-xl'} rounded-2xl p-8 md:p-12`}>
          <div className="flex justify-center mb-6">
            <CheckCircle className={`w-24 h-24 ${highContrast ? 'text-white' : 'text-green-600'}`} />
          </div>
          
          <h1 className={`${fontSize === 'text-xl' ? 'text-4xl' : fontSize === 'text-2xl' ? 'text-5xl' : fontSize === 'text-3xl' ? 'text-6xl' : 'text-7xl'} font-bold text-center mb-8 ${highContrast ? 'text-white' : 'text-blue-900'}`}>
            {translations.title[language]}
          </h1>
          
          <div className={`${fontSize} text-center space-y-6 mb-12`}>
            <p>{translations.submitted[language]}</p>
            <p>{translations.thanks[language]}</p>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className={`py-4 px-8 rounded-lg ${highContrast ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-700 text-white hover:bg-blue-800'} transition-colors font-bold ${fontSize}`}
            >
              {translations.backToHome[language]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;