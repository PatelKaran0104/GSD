import React from 'react';
import { useAppContext } from '../context/AppContext';
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
    <div className={`fixed top-0 right-0 p-4 z-10 rounded-bl-lg ${highContrast ? 'bg-blue-900 text-white' : 'bg-white shadow-md'}`}>
      <div className="flex items-center space-x-4">
        <button
          onClick={decreaseFontSize}
          className={`p-2 rounded-full ${fontSize === 'text-lg' ? 'opacity-50 cursor-not-allowed' : ''} ${
            highContrast 
              ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
              : 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-300'
          } focus:outline-none focus:ring-2`}
          disabled={fontSize === 'text-lg'}
          aria-label={language === 'de' ? "Schriftgröße verkleinern" : "Decrease font size"}
        >
          <ZoomOut className="w-6 h-6" />
        </button>
        <button
          onClick={increaseFontSize}
          className={`p-2 rounded-full ${fontSize === 'text-3xl' ? 'opacity-50 cursor-not-allowed' : ''} ${
            highContrast 
              ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
              : 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-300'
          } focus:outline-none focus:ring-2`}
          disabled={fontSize === 'text-3xl'}
          aria-label={language === 'de' ? "Schriftgröße vergrößern" : "Increase font size"}
        >
          <ZoomIn className="w-6 h-6" />
        </button>
        <button
          onClick={toggleHighContrast}
          className={`p-2 rounded-full ${
            highContrast 
              ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
              : 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-300'
          } focus:outline-none focus:ring-2`}
          aria-label={language === 'de' ? "Kontrast umschalten" : "Toggle contrast"}
        >
          <Sun className="w-6 h-6" />
        </button>
        <div className="relative group">
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full ${
              highContrast 
                ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-300'
            } focus:outline-none focus:ring-2 transition-colors duration-200`}
            aria-label={language === 'de' ? "Sprache ändern zu Englisch" : "Change language to German"}
          >
            <Languages className="w-6 h-6" />
            <span className="sr-only">{language === 'de' ? 'Deutsch' : 'English'}</span>
          </button>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
            <span className={`text-sm font-medium px-2 py-1 rounded ${
              highContrast 
                ? 'bg-white text-black' 
                : 'bg-gray-900 text-white'
            }`}>
              {language === 'de' ? 'EN' : 'DE'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityControls;