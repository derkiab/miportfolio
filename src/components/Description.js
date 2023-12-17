import React from 'react';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';

function Description({ navbarHeight }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the transition only once
  });

  return (
    <Container maxWidth="xl">
      <Box
        ref={ref}
        sx={{
          bgcolor: 'rgba(15,23,42,0.0)',
          height: `calc(100vh - ${navbarHeight}px - 10vh)`,
          
          mx: '10vw',
          pt: '10vh',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            transition: 'opacity 0.8s ease-out, transform 1.8s ease-out', 
            opacity: inView ? 1 : 0, 
            transform: inView ? 'translateX(0)' : 'translateX(-100px)', 
          }}
        >
          Welcome to my website!
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', 
            opacity: inView ? 1 : 0, 
            transform: inView ? 'translateX(0)' : 'translateX(-100px)', 
          }}
        >
          This is a description of my website.
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud

        </Typography>
      </Box>
    </Container>
  );
}

export default Description;
