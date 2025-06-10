import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessibilityControls from './AccessibilityControls';
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

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black text-white' : 'bg-blue-50 text-blue-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <AccessibilityControls />
        
        <div className={`mt-12 max-w-3xl mx-auto ${highContrast ? 'bg-black border-2 border-white' : 'bg-white shadow-xl'} rounded-2xl p-8 md:p-12`}>
          <div className="flex justify-center mb-6">
            <Stethoscope className={`w-16 h-16 ${highContrast ? 'text-white' : 'text-blue-700'}`} />
          </div>
          
          <h1 className={`${fontSize === 'text-xl' ? 'text-3xl' : fontSize === 'text-2xl' ? 'text-4xl' : fontSize === 'text-3xl' ? 'text-5xl' : 'text-6xl'} font-bold text-center mb-8 ${highContrast ? 'text-white' : 'text-blue-900'}`}>
            {translations.title[language]}
          </h1>
          
          <div className={`${fontSize} space-y-6 mb-12`}>
            <p className="mb-6">{translations.welcome[language]}</p>
            <p className="mb-6">{translations.parts[language]}</p>
            
            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${highContrast ? 'bg-blue-900 border-2 border-white' : 'bg-blue-50'}`}>
                <h2 className={`${fontSize === 'text-xl' ? 'text-2xl' : fontSize === 'text-2xl' ? 'text-3xl' : fontSize === 'text-3xl' ? 'text-4xl' : 'text-5xl'} font-bold mb-4 ${highContrast ? 'text-white' : 'text-blue-800'}`}>
                  {translations.part1.title[language]}
                </h2>
                <p>{translations.part1.description[language]}</p>
                <Link 
                  to="/questionnaire/pre" 
                  className={`mt-6 block w-full text-center py-4 px-6 rounded-lg ${highContrast ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-700 text-white hover:bg-blue-800'} transition-colors font-bold`}
                >
                  {translations.part1.button[language]}
                </Link>
              </div>
              
              <div className={`p-6 rounded-xl ${highContrast ? 'bg-blue-900 border-2 border-white' : 'bg-blue-50'}`}>
                <h2 className={`${fontSize === 'text-xl' ? 'text-2xl' : fontSize === 'text-2xl' ? 'text-3xl' : fontSize === 'text-3xl' ? 'text-4xl' : 'text-5xl'} font-bold mb-4 ${highContrast ? 'text-white' : 'text-blue-800'}`}>
                  {translations.part2.title[language]}
                </h2>
                <p>{translations.part2.description[language]}</p>
                <Link 
                  to="/questionnaire/post" 
                  className={`mt-6 block w-full text-center py-4 px-6 rounded-lg ${highContrast ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-700 text-white hover:bg-blue-800'} transition-colors font-bold`}
                >
                  {translations.part2.button[language]}
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className={`${fontSize} ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations.selectPart[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;