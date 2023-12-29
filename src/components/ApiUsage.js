import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { Container, useTheme, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import Button from '@mui/material/Button';
//import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';
import AntSwitch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import Chip from '@mui/material/Chip';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


function ApiUsage() {

  /*const [apiResponse, setApiResponse] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://satellitewatch.azurewebsites.net/satlocation/PLANTSAT');
      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  */

  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();
  const codeString = 'GET https://satellitewatch.azurewebsites.net/satlocation/{name}?api_key=YOUR_API_KEY';
  const codeString2 = `{
    "satellite": "<nombre del satélite>",
    "location": {
        "latitude": "<latitud>",
        "longitude": "<longitud>",
        "elevation": "<elevación>",
        "timestamp": "<marca de tiempo>"
    }
}`;
  const codeString3 = `{
    "satellite": "ISS",
    "location": {
        "latitude": "-36:22:52.1",
        "longitude": "-18:03:15.5",
        "elevation": "426622.4375",
        "timestamp": "2023-12-27 22:20:15"
    }
}`;
  const [refTitle, inView1] = useInView({
    triggerOnce: true,
  });
  const { i18n } = useContext(LanguageContext);
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.checked ? 'en' : 'es');

  };
  //const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
      }}
    >
      <Loading visible={loading} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.8s ease-out',
          display: loading ? 'none' : 'block',
        }}
      >
        <Container maxWidth="xl" sx={{
          minHeight: '100%', pb: '15vh', transition: theme.breakpoints.up('md') ? 'opacity 0.8s ease-out, transform 0.8s ease-out' : 'none',
          opacity: inView1 ? 1 : 0,
          [theme.breakpoints.down('sm')]: {

            opacity: 1,
          },

        }}>
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'rgba(15,23,42,0.0)',
              height: '100%',
              mx: '10vw',
              pt: '5vh',
              [theme.breakpoints.down('sm')]: {
                pt: '5vh',
                pl: '0vw',
                mx: '0vw'
              },
            }}
          >

            <FormGroup sx={{ paddingLeft: '4vw' }}>
              <Stack sx={{ pl: '1vw', mb: '5vh' }} direction="row" spacing={2} alignItems="center">
                <Button onClick={() => navigate(-1)} variant='outlined' sx={{
                  color: '#53cdc2',
                  borderColor: '#53cdc2',
                  fontFamily: 'Roboto, sans-serif',
                  [theme.breakpoints.down('sm')]: {
                    size: 'small',
                    mb: '5vh',
                    fontSize: '0.8rem',
                  },
                }}>Volver Atrás
                </Button>
              </Stack>
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

            <Typography
              ref={refTitle}
              sx={{
                color: '#ced4f0',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '3rem',
                fontWeight: 'bold',
                mt: '5vh',
                textAlign: 'center',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                opacity: inView1 ? 1 : 0,

                [theme.breakpoints.down('sm')]: {
                  fontSize: '1.8rem',
                  opacity: 1,
                },
              }}
            >
              astroAPI
            </Typography>
            <Typography
              sx={{
                color: '#eee1c8',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.1rem',
                mt: '2vh',
                ml: '5vw',
                mr: '5vw',
                fontWeight: 'normal',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem',
                },
              }}
            >
              API RESTful desarrollada con Python y FastAPI para la obtención de datos astronómicos en tiempo real. La versión actual de la API es capaz de entregar la ubicación de los satelites Chilenos orbitando la Tierra, como también la ubicación de la Estación Espacial Internacional (ISS). En el futuro se incluiran mas caracteristicas.

            </Typography>
            <Box

              elevation={12}
              sx={{
                position: 'relative',
                bgcolor: 'rgba(255,255,255,0.8)',
                height: '100%',
                borderRadius: '5px',
                mx: '5vw',
                mt: '5vh',
                pb: '2vh',
                pl: '2vw',
                pt: '2vh',
                pr: '2vw',
                [theme.breakpoints.down('sm')]: {

                  pl: '2vw',
                  mx: '0vw'
                },
              }}
            >
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Autenticación
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.2rem',
                  mt: '2vh',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Para hacer uso de esta API, es necesario poseer una clave API. Cada solicitud debe incluir esta clave en la URL. Por el momento la clave API no es pública, pero siempre puedes contactarme si la necesitas.
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',
                  mt: '2vh',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Endpoint
              </Typography>
              <Grid container spacing={0} sx={{ mt: '2vh' }}>
                <Grid item xs={1.5} sm={0.8} sx={{
                  mt: '0.19vh', [theme.breakpoints.down('sm')]: {
                    mt: '0.1vh',

                  },
                }}>
                  <Chip label="GET" variant="filled" sx={{
                    color: '#fff', backgroundColor: '#006e00',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '0.7rem',

                    },
                  }} />
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Typography
                    sx={{
                      color: '#000000',
                      fontStyle: 'italic',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '1.4rem',
                      fontWeight: 'normal',
                      fontSmooth: 'always',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '1rem',
                        mt: '0.5vh',
                      },
                    }}
                  >
                    {'/satlocation/{name}'}
                  </Typography>


                </Grid>

              </Grid>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.2rem',
                  mt: '2vh',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Este endpoint devuelve la ubicación actual de un satélite específico.
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',
                  mt: '2vh',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Parámetro
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.2rem',
                  mt: '2vh',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.2rem',
                    mt: '2vh',
                    fontWeight: 'normal',
                    fontSmooth: 'always',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>name:</Box> El nombre del satélite que se quiere rastrear. Debe estar en mayúsculas.
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',
                  mt: '2vh',
                  mb: '2vh',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Ejemplo de solicitud
              </Typography>
              <SyntaxHighlighter language="javascript"
                style={solarizedlight}
                customStyle={{ fontSize: '1rem', backgroundColor: '#f5f5f5' }}>
                {codeString}
              </SyntaxHighlighter>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',
                  mt: '2vh',
                  mb: '2vh',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Ejemplo de respuesta de la API (JSON)
              </Typography>
              <SyntaxHighlighter language="json"
                style={solarizedlight}
                customStyle={{ fontSize: '1rem', backgroundColor: '#f5f5f5' }}>
                {codeString2}
              </SyntaxHighlighter>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',
                  mt: '2vh',
                  mb: '2vh',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Descripción de la respuesta
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.2rem',
                  mt: '2vh',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.2rem',
                    mt: '2vh',
                    fontWeight: 'normal',
                    fontSmooth: 'always',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>satellite:</Box> El nombre del satélite.
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 'normal',
                    fontSmooth: 'always',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>latitude:</Box> La latitud de la ubicación del satélite.
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 'normal',
                  fontSmooth: 'always',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 'normal',
                    fontSmooth: 'always',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>longitude:</Box> La longitud de la ubicación del satélite.
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.1rem',

                    fontWeight: 'normal',
                    fontSmooth: 'always',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>elevation:</Box> La elevación de la ubicación del satélite en metros.
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 'normal',
                  fontSmooth: 'always',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 'normal',
                    fontSmooth: 'always',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>timestamp:</Box> La marca de tiempo de la ubicación del satélite. (Formato: YYYY-MMMM-DDDD HH:MM:SS)
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontSmooth: 'always',
                  mt: '2vh',
                  mb: '2vh',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Respuesta real de la API al consultar la ISS (JSON)
              </Typography>
              <SyntaxHighlighter language="json"
                style={solarizedlight}
                customStyle={{ fontSize: '1rem', backgroundColor: '#f5f5f5' }}>
                {codeString3}
              </SyntaxHighlighter>

            
            </Box>
          </Box>
        </Container>



      </div>
    </div >
  );
}

export default ApiUsage;
