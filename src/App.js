
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import LightedZone from './components/LightedZone';


function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <div className="App">
      
      <Navbar setNavbarHeight={setNavbarHeight} />
      <Description navbarHeight={navbarHeight} />
      <LightedZone />
    </div>
  );
}

export default App;