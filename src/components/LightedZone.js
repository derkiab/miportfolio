
import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const LightedZone = () => {
  const isDesktop = useMediaQuery('(min-width:600px)'); 
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isDesktop) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isDesktop]); 

  if (!isDesktop) {
    return null; 
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1000,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: '200px', 
          height: '200px', 
          borderRadius: '100%',
          backgroundColor: 'rgba(17,29,63, 0.9)', 
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          boxShadow: '0 0 200px 200px rgba(17,29,65, 0.9)', 
        }}
      ></div>
    </div>
  );
};

export default LightedZone;
