import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Questionnaire from './components/Questionnaire';
import ThankYou from './components/ThankYou';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/questionnaire/:part" element={<Questionnaire />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;