import React, { useContext } from 'react';
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
import FormGroup from '@mui/material/FormGroup';
import { LanguageContext } from './LanguageContext';
import AntSwitch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} >
      {children}
    </Slide>
  );
}

function Navbar() {

  const { i18n } = useContext(LanguageContext);
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.checked ? 'en' : 'es');

  };
  const { t } = useTranslation();
  const theme = spaceTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  //const gradient = `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={spaceTheme}>
      <HideOnScroll>
        <AppBar

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
                offset={-330}
                smooth={true}
                duration={500}
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
                      <FormGroup>
                        <Stack sx={{ pl: '1vw' }} direction="row" spacing={2} alignItems="center">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/es.svg`}
                            alt="Logo"
                            style={{
                              height: '15px',
                              width: 'auto',
                              mt: '10px',

                            }}
                          />
                          <AntSwitch
                            style={{

                              color: i18n.language === 'en' ? '#53cdc2' : '#53cdc2',
                              backgroundColor: i18n.language === 'en' ? 'rgba(18,45,65,0.9)' : 'rgba(18,45,65,0.9)'
                            }} checked={i18n.language === 'en'}
                            onChange={handleLanguageChange}
                            name="languageSwitch"
                            inputProps={{ 'aria-label': 'ant design' }} />

                          <img
                            src={`${process.env.PUBLIC_URL}/assets/gb.svg`}
                            alt="Logo"
                            style={{
                              height: '15px',
                              width: 'auto',
                              mt: '10px',
                            }}
                          />
                        </Stack>
                      </FormGroup>
                    </ListItem>
                    <ListItem>
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
                          {t('navAboutMe')}
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
                          {t('navTechnologies')}
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        activeClass="active"
                        to="experiencia"
                        spy={true}
                        smooth={true}
                        offset={-30}
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
                          {t('navExperience')}
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        activeClass="active"
                        to="proyectos"
                        spy={true}
                        smooth={true}
                        offset={-120}
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
                          {t('navProjects')}
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
                  flexGrow: 0.8,
                  paddingLeft: '6vw',
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
                    {t('navAboutMe')}
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
                    {t('navTechnologies')}
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
                    {t('navExperience')}
                  </Button>
                </Link>
                <Link
                  activeClass="active"
                  to="proyectos"
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
                    {t('navProjects')}
                  </Button>
                </Link>
                <FormGroup>
                  <Stack sx={{ pl: '7vw' }} direction="row" spacing={2} alignItems="center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/es.svg`}
                      alt="Logo"
                      style={{
                        height: '15px',
                        width: 'auto',
                        mt: '10px',

                      }}
                    />
                    <AntSwitch
                      style={{

                        color: i18n.language === 'en' ? '#53cdc2' : '#53cdc2',
                        backgroundColor: i18n.language === 'en' ? 'rgba(18,45,65,0.9)' : 'rgba(18,45,65,0.9)'
                      }} checked={i18n.language === 'en'}
                      onChange={handleLanguageChange}
                      name="languageSwitch"
                      inputProps={{ 'aria-label': 'ant design' }} />

                    <img
                      src={`${process.env.PUBLIC_URL}/assets/gb.svg`}
                      alt="Logo"
                      style={{
                        height: '15px',
                        width: 'auto',
                        mt: '10px',

                      }}
                    />
                  </Stack>
                </FormGroup>
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
