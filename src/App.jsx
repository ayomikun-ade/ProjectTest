import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import WelcomePage from './components/WelcomePage';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import SuccessPage from './components/SuccessPage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your Routes inside Routes or Switch */}
        <Route path="/" element={<WelcomePage />} /> {/* Use element prop */}
        <Route path='/signup/step1' element={<Step1 />} />
        <Route path='/signup/step2' element={<Step2 />} />
        <Route path='/signup/success' element={<SuccessPage />} />
        <Route path='*' element={<PageNotFound />} /> {/* Catch-all route */}
        {/* Define other routes similarly */}
      </Routes>
    </Router>
  );
}

export default App;
