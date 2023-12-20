import React, { useRef, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import spaceTheme from '../themes/spaceTheme';
import { ThemeProvider } from '@emotion/react';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
      <HideOnScroll>
        <AppBar
          ref={navbarRef}
          position="sticky"
          sx={{
            background: '#0f172a',
            opacity: 0.9,
            zIndex: 1,
            [theme.breakpoints.down('sm')]: {
              position: 'fixed',
          },
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ flexGrow: 1 }}></div>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                
              }}
              sx={{ color: 'inherit', textDecoration: 'none'}}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 'normal',
                  color: '#ced4f0',
                  transition: 'opacity 2.8s ease-in',
                  opacity: 1,
                }}
              >
                Navbar
              </Typography>
            </Link>
            {isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    flexGrow: 15,
                  }}
                >
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexGrow: 2,
                }}
              >
                <Button
                  sx={{
                    color: 'inherit',
                    '&:hover': {
                      background: gradient,
                    },
                  }}
                  color="inherit"
                >
                  Option 1
                </Button>
                <Button color="inherit">Option 2</Button>
                <Button color="inherit">Option 3</Button>
              </div>
            )}
            <div style={{ flexGrow: 1 }}></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </ThemeProvider>
  );
}

export default Navbar;
