import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import LightedZone from './components/LightedZone';
import ApiUsage from './components/ApiUsage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/api-usage" element={<ApiUsage />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Description />
              <LightedZone />
            </>
          } />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
