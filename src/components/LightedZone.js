
import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const LightedZone = () => {
  const isDesktop = useMediaQuery('(min-width:600px)'); // Adjust the breakpoint as needed
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
  }, [isDesktop]); // Add and remove event listener based on isDesktop

  if (!isDesktop) {
    return null; // Return null if not on desktop
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
          width: '200px', // Adjust size as needed
          height: '200px', // Adjust size as needed
          borderRadius: '100%',
          backgroundColor: 'rgba(17,29,63, 0.8)', // Adjust intensity (lower alpha for lower intensity)
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          boxShadow: '0 0 200px 200px rgba(17,29,65, 0.8)', // Adjust shadow as needed
        }}
      ></div>
    </div>
  );
};

export default LightedZone;
