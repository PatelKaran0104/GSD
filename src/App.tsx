import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Welcome from './components/Welcome';
import Questionnaire from './components/Questionnaire';
import ThankYou from './components/ThankYou';
import { AppProvider } from './context/AppContext';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/questionnaire/:part" element={<Questionnaire />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Router>
      </AppProvider>
    </MantineProvider>
  );
}

export default App;