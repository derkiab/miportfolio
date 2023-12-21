import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import spaceTheme from '../themes/spaceTheme';
import { ThemeProvider } from '@emotion/react';

function Background() {
    return (
        <ThemeProvider theme={spaceTheme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh', // Set minimum height to fill the viewport
                    background: `linear-gradient(180deg, ${spaceTheme.palette.primary.main}, ${spaceTheme.palette.secondary.main})`,
                    color: spaceTheme.palette.text.primary,
                    padding: '20px', // Adjust padding based on your design
                    zIndex: -1, // Set z-index to hide the box behind the navbar
                }}
            >
                <Navbar />
            </Box>
        </ThemeProvider>
    );
}

export default Background;
