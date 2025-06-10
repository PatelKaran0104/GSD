import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type FormData = {
  [key: string]: string | string[] | null;
};

interface AppContextType {
  formData: FormData;
  updateFormData: (key: string, value: string | string[] | null) => void;
  fontSize: string;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  resetForm: () => void;
  language: 'de' | 'en';
  toggleLanguage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});
  // Changed default font size from 'text-lg' to 'text-xl' for better readability
  const [fontSize, setFontSize] = useState<string>('text-xl');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [language, setLanguage] = useState<'de' | 'en'>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage === 'de' || savedLanguage === 'en') ? savedLanguage : 'de';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const updateFormData = (key: string, value: string | string[] | null) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setFormData({});
  };

  // Updated font sizes array to start from text-xl instead of text-lg
  const fontSizes = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl'];
  
  const increaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex < fontSizes.length - 1) {
      setFontSize(fontSizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(fontSizes[currentIndex - 1]);
    }
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => prev === 'de' ? 'en' : 'de');
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        updateFormData,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        highContrast,
        toggleHighContrast,
        resetForm,
        language,
        toggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};