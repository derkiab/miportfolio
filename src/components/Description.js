import React from 'react';
import { Container, useTheme, Grid, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Timeline from './Timeline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import '../App.css';


const technologies = [
    { name: 'React', logo: './assets/reactjs-icon.svg' },
    { name: 'JavaScript', logo: './assets/logo-javascript.svg' },
    { name: 'CSS3', logo: './assets/css-3.svg' },
    { name: 'php', logo: './assets/php-1.svg' },
    { name: 'python', logo: './assets/python-5.svg' },
    { name: 'Laravel', logo: './assets/laravel-2.svg' },
    { name: 'Bootstrap', logo: './assets/bootstrap-5-1.svg' },
    { name: 'Material UI', logo: './assets/material-ui-1.svg' },
    { name: 'Mysql', logo: './assets/mysql-logo.svg' },
    { name: 'PostgreSQL', logo: './assets/postgresql.svg' },
    { name: 'SQL Server', logo: './assets/sql-server.svg' },
    { name: 'Git', logo: './assets/git-icon.svg' },
    { name: 'Github', logo: './assets/github.png' },
    { name: 'Microsoft Azure', logo: './assets/azure-2.svg' },
    { name: 'Microsoft 365', logo: './assets/Microsoft-365.svg' },
    { name: 'Microsoft Fabric', logo: './assets/Fabric_256.svg' },
    { name: 'Power Bi', logo: './assets/powerbi.svg' },
    { name: 'Power Platform', logo: './assets/power-platform.svg' },
    { name: 'Ubuntu', logo: './assets/ubuntu-4.svg' },
    { name: 'Postman', logo: './assets/postman-icon.svg' },
    { name: 'FastAPI', logo: './assets/fastapi.svg' },

];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Technology({ technology }) {
    return (
        <Paper elevation={0} sx={{ bgcolor: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={technology.logo}
                alt={technology.name}
                style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    justifyContent: 'center',

                }}
            />
        </Paper>
    );
}

function Description() {

    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [refNombre, inView1] = useInView({
        triggerOnce: false,
    });
    const [refAcerca, inView2] = useInView({
        triggerOnce: false,
    });
    const [refContentAcerca, inView3] = useInView({
        triggerOnce: false,
    });
    const [refTecnologias, inView4] = useInView({
        triggerOnce: false,
    });
    const [refContentTecnologias, inView5] = useInView({
        triggerOnce: false,
    });
    const [refCarousel, inView6] = useInView({
        triggerOnce: false,
    });
    const [refAvatar, inView7] = useInView({
        triggerOnce: false,
    });
    const [refExperiencia, inView8] = useInView({
        triggerOnce: false,
    });
    const [refTimeline, inView9] = useInView({
        triggerOnce: false,
    });
    const [refEnd, inView10] = useInView({
        triggerOnce: false,
    });
    const [refProyectos, inView11] = useInView({
        triggerOnce: false,
    });
    const [refContentProyectos, inView12] = useInView({
        triggerOnce: false,
    });

    //const [refContentProyectosChips, inView13] = useInView({
      //  triggerOnce: false,
    //});

    return (
        <Container maxWidth="xl" sx={{ minHeight: '100%', pb: '15vh' }}>
            <Box
                sx={{
                    position: 'relative',
                    

                    bgcolor: 'rgba(15,23,42,0.0)',
                    height: '100%',
                    mx: '10vw',
                    pt: '25vh',
                    [theme.breakpoints.down('sm')]: {
                        pt: '5vh',
                        pl: '4vw',
                        mx: '0vw'
                    },
                }}
            >
                <div id='top'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>

                            <Typography
                                ref={refNombre}
                                variant="h2"
                                sx={{
                                    fontWeight: 'normal',
                                    color: '#ced4f0',
                                    fontFamily: 'Roboto, sans-serif',
                                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                                    opacity: inView1 ? 1 : 0,
                                    transform: inView1 ? 'translateX(0)' : 'translateX(-200px)',
                                    textShadow: inView1 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                                    pt: '5vh',
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: '1.6rem',
                                    },
                                }}
                            >
                                Derqui Sanhueza Balboa
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'normal',
                                    transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                                    color: '#eee1c8',
                                    opacity: inView1 ? 1 : 0,
                                    fontFamily: 'Roboto, sans-serif',
                                    mt: '3vh',
                                    textShadow: inView1 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                                    transform: inView1 ? 'translateX(0)' : 'translateX(-300px)',
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: '1.3rem',
                                    },
                                }}
                            >
                                Licenciado en Ciencias de la Ingeniería
                                <br />
                                Ingeniero Civil Informático
                            </Typography>
                            <IconButton
                                sx={{
                                    mt: '14vh',
                                    position: 'relative',
                                    left: '0vw',
                                    transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                                    opacity: inView1 ? 1 : 0,
                                    transform: inView1 ? 'translateX(0)' : 'translateX(-300px)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                href="https://github.com/derkiab"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#ced4f0', width: '50px', height: '50px' }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"

                                    aria-hidden="true"
                                    style={{ width: '50px', height: '50px' }}
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </IconButton>
                            <IconButton
                                sx={{
                                    mt: '14vh',
                                    position: 'relative',
                                    left: '0vw',
                                    transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                                    opacity: inView1 ? 1 : 0,
                                    transform: inView1 ? 'translateX(0)' : 'translateX(-300px)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                href="https://www.linkedin.com/in/derquisanhueza/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#ced4f0', width: '50px', height: '50px', }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </IconButton>

                        </Grid>
                        <Grid item xs={12} sm={4}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                pt: '0vh',
                                [theme.breakpoints.down('sm')]: {
                                    pr: '10vw',
                                },
                            }}>
                            <Avatar
                                ref={refAvatar}
                                variant='round'
                                alt="Derqui Sanhueza"
                                src="./assets/logo.svg"
                                sx={{
                                    width: '300px',
                                    height: '300px',
                                    transition: 'opacity 1.5s ease-in',
                                    ml: '4vw',
                                    mt: '0vh',
                                    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.5)',
                                    opacity: inView7 ? 1 : 0,
                                    [theme.breakpoints.down('sm')]: {
                                        width: '70%',
                                        height: '70%',
                                        ml: '0vw',

                                    },
                                    [theme.breakpoints.down('lg')]: {
                                        width: '280px',
                                        height: '280px',
                                        ml: '7vw',
                                        mt: '4vh',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div id="acerca">
                    <Typography
                        ref={refAcerca}
                        variant="h2"
                        sx={{
                            fontWeight: 'normal',
                            color: '#ced4f0',
                            fontFamily: 'Roboto, sans-serif',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                            opacity: inView2 ? 1 : 0,
                            transform: inView2 ? 'translateX(0)' : 'translateX(-200px)',
                            textShadow: inView2 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                            pt: '5vh',
                            mt: '35vh',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1.6rem',
                                mt: '15vh'
                            },
                        }}
                    >
                        Acerca de mí
                    </Typography>
                    <Typography
                        variant="h5"
                        ref={refContentAcerca}
                        sx={{
                            fontWeight: 'normal',
                            transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                            color: '#eee1c8',
                            opacity: inView3 ? 1 : 0,
                            fontFamily: 'Roboto, sans-serif',
                            mt: '5vh',
                            textShadow: inView3 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                            transform: inView3 ? 'translateX(0)' : 'translateX(-300px)',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem',
                            },
                        }}
                    >
                        Nacido y criado en la hermosa comuna costera de Talcahuano, mi pasión por la tecnología se despertó desde una temprana edad. Este interés se consolidó durante mis años de estudio en el Colegio Salesiano de Concepción, donde me especialicé en electrónica.
                        <br />
                        <br />
                        Actualmente, me encuentro sumergido en el apasionante campo de la ingeniería informática. Me entusiasma la posibilidad de utilizar mis habilidades y conocimientos en tecnologías de la información para abordar y resolver desafíos del mundo real. Estoy convencido de que la tecnología tiene el potencial de mejorar significativamente nuestras vidas, y me llena de emoción ser parte activa de este emocionante viaje.
                        <br />
                        <br />
                        En mi tiempo libre, disfruto del Sim-racing, un hobby que combina mi amor por la tecnología y la emoción de la competición. También me encanta pasar tiempo jugando videojuegos con mis amigos, creando recuerdos y compartiendo risas.
                        <br />
                        <br />
                        A lo largo de mi vida, he aprendido que la pasión y el trabajo duro son fundamentales para superar los obstáculos. En el campo de la ingeniería informática, estoy consciente de que el futuro traerá tanto oportunidades como desafíos. Con una mezcla de anticipación y respeto por las dificultades que puedan surgir, estoy preparado para enfrentar lo que venga.
                    </Typography>
                </div>
                <div id="tecnologia">
                    <Typography
                        ref={refTecnologias}
                        variant="h2"
                        sx={{
                            fontWeight: 'normal',
                            color: '#ced4f0',
                            fontFamily: 'Roboto, sans-serif',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                            opacity: inView4 ? 1 : 0,
                            transform: inView4 ? 'translateX(0)' : 'translateX(-200px)',
                            textShadow: inView4 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                            pt: '5vh',
                            mt: '20vh',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1.6rem',
                                mt: '15vh'
                            },
                        }}
                    >
                        Tecnologías
                    </Typography>
                    <Typography
                        variant="h5"
                        ref={refContentTecnologias}
                        sx={{
                            fontWeight: 'normal',
                            transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                            color: '#eee1c8',
                            opacity: inView5 ? 1 : 0,
                            fontFamily: 'Roboto, sans-serif',
                            mt: '5vh',
                            pb: '10vh',
                            mb: '10vh',
                            textShadow: inView5 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                            transform: inView5 ? 'translateX(0)' : 'translateX(-300px)',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem',
                            },
                        }}
                    >
                        Mi experiencia en el campo de la ingeniería informática es amplia y diversa. He tenido la oportunidad de participar en todas las etapas de un proyecto informático, desde la concepción de la idea hasta su implementación y despliegue.
                        <br />
                        <br />
                        Gracias a esta experiencia, estoy familiarizado con una amplia gama de tecnologías, lo que me permite adaptarme a diferentes entornos y desafíos
                    </Typography>
                    <div ref={refCarousel} style={{
                        opacity: inView6 ? 1 : 0,
                        transition: 'opacity 2.5s ease-in, transform 1.8s ease-out',
                        transform: inView6 ? 'translateX(0)' : 'translateX(-300px)',
                        marginBottom: '10vh',
                    }}>
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            infinite={true}
                        >
                            {technologies.map((technology) => (
                                <Technology key={technology.name} technology={technology} />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div id="experiencia">
                    <Typography
                        ref={refExperiencia}
                        variant="h2"
                        sx={{
                            fontWeight: 'normal',
                            color: '#ced4f0',
                            fontFamily: 'Roboto, sans-serif',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                            opacity: inView8 ? 1 : 0,
                            transform: inView8 ? 'translateX(0)' : 'translateX(-200px)',
                            textShadow: inView8 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                            pt: '5vh',
                            mt: '10vh',
                            mb: '12vh',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1.6rem',
                                mt: '15vh'
                            },
                        }}
                    >
                        Experiencia
                    </Typography>
                    <div ref={refTimeline} style={{
                        opacity: inView9 ? 1 : 0,
                        transition: 'opacity 2.5s ease-in, transform 1.8s ease-out',
                        transform: inView9 ? 'translateX(0)' : 'translateX(-300px)',
                        marginBottom: '10vh',
                    }}>
                        <Timeline />
                    </div>
                </div>
                <Typography
                    ref={refProyectos}
                    variant="h2"
                    sx={{
                        fontWeight: 'normal',
                        color: '#ced4f0',
                        fontFamily: 'Roboto, sans-serif',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        opacity: inView11 ? 1 : 0,
                        transform: inView11 ? 'translateX(0)' : 'translateX(-200px)',
                        textShadow: inView11 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                        pt: '5vh',
                        mt: '20vh',
                        mb: '12vh',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '1.6rem',
                            mt: '15vh'
                        },
                    }}
                >
                    Proyectos
                </Typography>
                <div id="proyectos" >

                    <Grid ref={refContentProyectos} container spacing={4} sx={{ mb: '20vh' }}>
                        {/* First column - on extra small and small screens, take up 12 columns (full width) */}
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={6} sx={{

                                padding: '1px', textAlign: 'center',
                                backgroundColor: '#5e828b',
                                '&:hover': {
                                    transform: 'scale(1.06)', // Make it 10% bigger on hover
                                },
                                opacity: inView12 ? 1 : 0,
                                transition: 'opacity 2.5s ease-in, transform 1.8s ease-out',
                                transform: inView12 ? 'translateX(0)' : 'translateX(-300px)',
                                

                            }} >
                                <Card sx={{
                                    width: '100%',
                                    backgroundColor: '#0f172a',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <CardActionArea sx={{}}>
                                        <CardMedia
                                            component="div"
                                            className="myCardMedia"
                                            sx={{
                                                position: 'relative',
                                                height: '200px',
                                                background: 'radial-gradient( #53cdc2, rgb(18,45,65))',
                                                opacity: 0.8,
                                                backdropFilter: 'blur(8px)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    left: 0,
                                                    background: 'inherit',
                                                    zIndex: -1,
                                                },
                                            }}

                                        >
                                            <h1 style={{
                                                margin: '0',
                                                color: '#fff',
                                            }}>Portfolio</h1>
                                        </CardMedia>
                                        <CardContent sx={{

                                        }}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                sx={{
                                                    fontFamily: 'Roboto, sans-serif',
                                                    color: '#ced4f0',

                                                }}
                                            >
                                                Portfolio
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: 'Roboto, sans-serif',
                                                    color: '#ced4f0',
                                                }}
                                            >
                                                Portfolio es donde se encuentra ahora mismo, una página web creada con React y Material-UI, alojada en Azure Static Web Apps.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Paper>
                            <Stack ref={refContentProyectos} direction="row" spacing={2}
                                sx={{
                                    ml: '0vh',
                                    mt: '3vh',
                                   
                                    opacity: inView12 ? 1 : 0,
                                    transition: 'opacity 2.5s ease-in, transform 1.8s ease-out',
                                    transform: inView12 ? 'translateX(0)' : 'translateX(-500px)',
                                }}>
                                <Chip label="React" variant="filled" sx={{ color: '#53cdc2', backgroundColor: 'rgba(18,45,65,0.9)' }} />
                                <Chip label="Material-UI" variant="filled" sx={{ color: '#53cdc2', backgroundColor: 'rgba(18,45,65,0.9)' }} />
                                <Chip label="Azure" variant="filled" sx={{ color: '#53cdc2', backgroundColor: 'rgba(18,45,65,0.9)' }} />
                            </Stack>
                        </Grid>

                        {/* Second column - on extra small and small screens, take up 12 columns (full width) */}
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={6} sx={{
                                padding: '1px', textAlign: 'center',
                                backgroundColor: '#5e828b',
                                '&:hover': {
                                    transform: 'scale(1.06)', // Make it 10% bigger on hover
                                },
                                opacity: inView12 ? 1 : 0,
                                transition: 'opacity 2.5s ease-in, transform 1.8s ease-out',
                                transform: inView12 ? 'translateX(0)' : 'translateX(-300px)',
                            }} >
                                <Card sx={{
                                    width: '100%',
                                    backgroundColor: '#0f172a',
                                }}>
                                    <CardActionArea component={Link} to="/api-usage" sx={{}}>
                                        <CardMedia
                                            component="div"
                                            className="myCardMedia"
                                            sx={{
                                                position: 'relative',
                                                height: '200px',
                                                background: 'radial-gradient( #53cdc2, rgb(18,45,65))',
                                                opacity: 0.8,
                                                backdropFilter: 'blur(8px)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    left: 0,
                                                    background: 'inherit',
                                                    zIndex: -1,
                                                },
                                            }}
                                        >
                                            <h1 style={{
                                                margin: '0',
                                                color: '#fff',
                                            }}>astroAPI</h1>
                                        </CardMedia>
                                        <CardContent sx={{
                                        }}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                sx={{
                                                    fontFamily: 'Roboto, sans-serif',
                                                    color: '#ced4f0',
                                                }}
                                            >
                                                astroAPI
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: 'Roboto, sans-serif',
                                                    color: '#ced4f0',
                                                }}
                                            >
                                                astroAPI es una API REST creada con FastAPI, alojada en Azure Functions. Esta API entrega información astronómica en tiempo real.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Paper>
                            <Stack ref={refContentProyectos} direction="row" spacing={2}
                                sx={{
                                    ml: '0vh', mt: '3vh',
                                    opacity: inView12 ? 1 : 0,
                                    transition: 'opacity 2.5s ease-in, transform 1.8s ease-out',
                                    transform: inView12 ? 'translateX(0)' : 'translateX(-300px)',
                                }}>
                                <Chip label="Python" variant="filled" sx={{ color: '#53cdc2', backgroundColor: 'rgba(18,45,65,0.9)' }} />
                                <Chip label="FastAPI" variant="filled" sx={{ color: '#53cdc2', backgroundColor: 'rgba(18,45,65,0.9)' }} />
                                <Chip label="Azure" variant="filled" sx={{ color: '#53cdc2', backgroundColor: 'rgba(18,45,65,0.9)' }} />
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
                <Typography
                    variant="h10"
                    ref={refEnd}
                    sx={{
                        fontWeight: 'light',
                        fontStyle: 'italic',
                        fontSize: '0.8rem',
                        transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                        color: '#ced4f0',
                        opacity: inView10 ? 1 : 0,
                        fontFamily: 'Roboto, sans-serif',
                        mt: '10vh',
                        textShadow: inView10 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                        transform: inView10 ? 'translateX(0)' : 'translateX(-300px)',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '0.7rem',
                        },
                    }}
                >
                    Creado por Derqui Sanhueza Balboa, Todos los derechos reservados © 2023

                </Typography>
            </Box>
        </Container>
    );
}

export default Description;

