import { createTheme } from '@mui/material/styles';


const spaceTheme = createTheme({
    palette: {
        primary: {
            main: '#0a192d', // Dark blue
        },
        secondary: {
            main: '#2d1d0a', // Light blue-grey
        },
        background: {
            default: '#000', // Black
            paper: '#111', // Darker background
        },
        text: {
            primary: '#fff', // White text
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    breakpoints: {
        values: {
            xs: 0, // Mobile devices
            sm: 600, // Tablets
            md: 960, // Desktops
            lg: 1280, // Large desktops
            xl: 1920, // Extra-large desktops
        },
    },
    // Add any additional customizations here
});

export default spaceTheme;