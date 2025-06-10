import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessibilityControls from './AccessibilityControls';
import { CheckCircle, Download, FileText, BarChart3 } from 'lucide-react';

const ThankYou: React.FC = () => {
  const { fontSize, highContrast, language, formData } = useAppContext();

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
    dataInfo: {
      de: 'Ihre Daten helfen uns, die Versorgung mit orthopädischen Schuhen zu verbessern.',
      en: 'Your data helps us improve orthopedic shoe care.'
    },
    nextSteps: {
      de: 'Nächste Schritte:',
      en: 'Next steps:'
    },
    doctorInfo: {
      de: 'Ihr Arzt wird die Ergebnisse in Ihre Behandlung einbeziehen.',
      en: 'Your doctor will incorporate the results into your treatment.'
    },
    followUp: {
      de: 'Bei Nachfragen können Sie sich jederzeit an Ihr medizinisches Team wenden.',
      en: 'For follow-up questions, you can contact your medical team at any time.'
    },
    downloadData: {
      de: 'Daten herunterladen',
      en: 'Download Data'
    },
    printSummary: {
      de: 'Zusammenfassung drucken',
      en: 'Print Summary'
    },
    backToHome: {
      de: 'Zurück zur Startseite',
      en: 'Back to Home'
    },
    newQuestionnaire: {
      de: 'Neuen Fragebogen starten',
      en: 'Start New Questionnaire'
    }
  };

  const downloadData = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `questionnaire-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const printSummary = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black text-white' : 'bg-blue-50 text-blue-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <AccessibilityControls />
        
        <div className={`mt-12 max-w-4xl mx-auto ${highContrast ? 'bg-black border-2 border-white' : 'bg-white shadow-xl'} rounded-2xl p-8 md:p-12`}>
          <div className="flex justify-center mb-6">
            <CheckCircle className={`w-24 h-24 ${highContrast ? 'text-white' : 'text-green-600'}`} />
          </div>
          
          <h1 className={`${fontSize === 'text-xl' ? 'text-4xl' : fontSize === 'text-2xl' ? 'text-5xl' : fontSize === 'text-3xl' ? 'text-6xl' : 'text-7xl'} font-bold text-center mb-8 ${highContrast ? 'text-white' : 'text-blue-900'}`}>
            {translations.title[language]}
          </h1>
          
          <div className={`${fontSize} text-center space-y-6 mb-12`}>
            <p className="font-semibold">{translations.submitted[language]}</p>
            <p>{translations.thanks[language]}</p>
            <p className={`${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations.dataInfo[language]}
            </p>
          </div>

          {/* Next Steps Section */}
          <div className={`${highContrast ? 'bg-blue-900 border-2 border-white' : 'bg-blue-50'} rounded-xl p-6 mb-8`}>
            <h2 className={`${fontSize} font-bold mb-4 ${highContrast ? 'text-white' : 'text-blue-800'}`}>
              {translations.nextSteps[language]}
            </h2>
            <ul className={`${fontSize} space-y-3 ${highContrast ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                {translations.doctorInfo[language]}
              </li>
              <li className="flex items-start">
                <FileText className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                {translations.followUp[language]}
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={downloadData}
              className={`flex items-center justify-center py-4 px-6 rounded-lg ${
                highContrast 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              } transition-colors ${fontSize} font-medium`}
            >
              <Download className="w-5 h-5 mr-2" />
              {translations.downloadData[language]}
            </button>
            
            <button
              onClick={printSummary}
              className={`flex items-center justify-center py-4 px-6 rounded-lg ${
                highContrast 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              } transition-colors ${fontSize} font-medium`}
            >
              <FileText className="w-5 h-5 mr-2" />
              {translations.printSummary[language]}
            </button>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className={`py-4 px-8 rounded-lg text-center ${
                highContrast 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-blue-700 text-white hover:bg-blue-800'
              } transition-colors font-bold ${fontSize}`}
            >
              {translations.backToHome[language]}
            </Link>
            
            <Link
              to="/"
              className={`py-4 px-8 rounded-lg text-center ${
                highContrast 
                  ? 'bg-gray-800 text-white hover:bg-gray-700 border-2 border-white' 
                  : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'
              } transition-colors font-bold ${fontSize}`}
            >
              {translations.newQuestionnaire[language]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;