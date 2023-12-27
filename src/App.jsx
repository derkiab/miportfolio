import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import LightedZone from './components/LightedZone';
import ApiUsage from './components/ApiUsage';
import LanguageProvider from './components/LanguageProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/astroAPI" element={
            <>
              <LanguageProvider>
                <ApiUsage />
                <LightedZone />
              </LanguageProvider>
            </>} />
          <Route path="/" element={
            <>
              <LanguageProvider>
                <Navbar />
                <Description />
                <LightedZone />
              </LanguageProvider>
            </>
          } />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
