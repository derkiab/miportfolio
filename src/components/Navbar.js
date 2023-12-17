import React, { useRef, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './Navbar.css';
import spaceTheme from '../themes/spaceTheme';
import { ThemeProvider } from '@emotion/react';
import { Link } from '@mui/material';

function Navbar({ setNavbarHeight }) {

  const theme = spaceTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const gradient = `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navbarRef = useRef(null);
  const [, setLocalNavbarHeight] = useState(0);

  useEffect(() => {
    const height = navbarRef.current.offsetHeight;
    setLocalNavbarHeight(height);
    setNavbarHeight(height); // pass the height to the parent component
  }, [setLocalNavbarHeight, setNavbarHeight]);
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={spaceTheme}>
      <AppBar ref={navbarRef} position="sticky"
        sx={{
          background: '#0f172a',
          opacity: 0.9,
          zIndex: 1,
        }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ flexGrow: 1 }}></div>
          <Link
            component="button"
            variant="body2"
            onClick={() => { /* handle click event here */ }}
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Typography variant="h6"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'bold',
              }}>
              Navbar
            </Typography>
          </Link>
          {isMobile ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'right', flexGrow: 15 }}>
                <Button color="inherit" onClick={handleDrawerToggle}>
                  Menu
                </Button>
              </div>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  <ListItem>
                    <Button color="secondary">Option 1</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="inherit">Option 2</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="inherit">Option 3</Button>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 2 }}>
              <Button sx={{
                color: 'inherit',
                '&:hover': {
                  background: gradient,
                  
                },
              
              }}color="inherit">Option 1</Button>
              <Button color="inherit">Option 2</Button>
              <Button color="inherit">Option 3</Button>
            </div>
          )}
          <div style={{ flexGrow: 1 }}></div>
        </Toolbar>

      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;

