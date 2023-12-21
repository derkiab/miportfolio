import React, { useRef, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import spaceTheme from '../themes/spaceTheme';
import { Link } from 'react-scroll';
import { ThemeProvider } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

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
  //const gradient = `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navbarRef = useRef(null);
  const [, setLocalNavbarHeight] = useState(0);

  useEffect(() => {
    const height = navbarRef.current.offsetHeight;
    setLocalNavbarHeight(height);
    setNavbarHeight(height);
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
            opacity: 1,
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
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Link
                to="top"
                spy={true}
                offset={-200}
                smooth={true}
                duration={1000}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                  alt="Logo"
                  style={{
                    height: '40px',
                    width: 'auto',
                    mt: '10px',
                    cursor: 'pointer',
                  }}
                />
              </Link>
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
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                >
                  <List>
                    <ListItem>
                      <Link
                        activeClass="active"
                        to="acerca"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                        className="nav-link"
                      >
                        <Button
                          sx={{
                            color: '#ced4f0',
                            '&:hover': {
                              background: 'rgba(206,212,240,0.2)',
                              fontFamily: 'Roboto, sans-serif',
                            },
                          }}
                          color="inherit"
                        >
                          Acerca de mí
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        activeClass="active"
                        to="tecnologia"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                        className="nav-link"
                      >
                        <Button
                          sx={{
                            color: '#ced4f0',
                            '&:hover': {
                              background: 'rgba(206,212,240,0.2)',
                              fontFamily: 'Roboto, sans-serif',
                            },
                          }}
                          color="inherit"
                        >
                          Tecnologías
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        activeClass="active"
                        to="experiencia"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        style={{ cursor: 'pointer' }}
                        className="nav-link"
                      >
                        <Button
                          sx={{
                            color: '#ced4f0',
                            '&:hover': {
                              background: 'rgba(206,212,240,0.2)',
                              fontFamily: 'Roboto, sans-serif',
                            },
                          }}
                          color="inherit"
                        >
                          Experiencia
                        </Button>
                      </Link>
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
                <Link
                  activeClass="active"
                  to="acerca"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  style={{ cursor: 'pointer' }}
                  className="nav-link"
                >
                  <Button
                    sx={{
                      color: '#ced4f0',
                      '&:hover': {
                        background: 'rgba(206,212,240,0.2)',
                        fontFamily: 'Roboto, sans-serif',
                      },
                    }}
                    color="inherit"
                  >
                    Acerca de mí
                  </Button>
                </Link>
                <Link
                  activeClass="active"
                  to="tecnologia"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  style={{ cursor: 'pointer' }}
                  className="nav-link"
                >
                  <Button
                    sx={{
                      color: '#ced4f0',
                      '&:hover': {
                        background: 'rgba(206,212,240,0.2)',
                        fontFamily: 'Roboto, sans-serif',
                      },
                    }}
                    color="inherit"
                  >
                    Tecnologías
                  </Button>
                </Link>
                <Link
                  activeClass="active"
                  to="experiencia"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  style={{ cursor: 'pointer' }}
                  className="nav-link"
                >
                  <Button
                    sx={{
                      color: '#ced4f0',
                      '&:hover': {
                        background: 'rgba(206,212,240,0.2)',
                        fontFamily: 'Roboto, sans-serif',
                      },
                    }}
                    color="inherit"
                  >
                    Experiencia
                  </Button>
                </Link>
              </div>
            )}
            <div style={{ flexGrow: 1 }}></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </ThemeProvider >
  );
}

export default Navbar;
