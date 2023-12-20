import React from 'react';
import { Container, useTheme, Grid, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const technologies = [
    { name: 'React', logo: './reactjs-icon.svg' },
    { name: 'JavaScript', logo: './logo-javascript.svg' },
    { name: 'CSS3', logo: './css-3.svg' },
    { name: 'php', logo: './php-1.svg' },
    { name: 'python', logo: './python-5.svg' },
    { name: 'Laravel', logo: './laravel-2.svg' },
    { name: 'Bootstrap', logo: './bootstrap-5-1.svg' },
    { name: 'Material UI', logo: './material-ui-1.svg' },
    { name: 'Mysql', logo: './mysql-logo.svg' },
    { name: 'PostgreSQL', logo: './postgresql.svg' },
    { name: 'SQL Server', logo: './sql-server.svg' },
    { name: 'Git', logo: './git-icon.svg' },
    { name: 'Github', logo: './github.png' },
    { name: 'Microsoft Azure', logo: './azure-2.svg' },
    { name: 'Microsoft 365', logo: './Microsoft-365.svg' },
    { name: 'Microsoft Fabric', logo: './Fabric_256.svg' },
    { name: 'Power Bi', logo: './powerbi.svg' },
    { name: 'Power Platform', logo: './power-platform.svg' },
    { name: 'Ubuntu', logo: './ubuntu-4.svg' },

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
        <Paper sx={{ bgcolor: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

function Description({ navbarHeight }) {
    
    const theme = useTheme();
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


    return (
        <Container maxWidth="xl" sx={{ minHeight: '100%' }}>
            <Box
                sx={{
                    position: 'relative',
                    top: `calc(-${navbarHeight}px + 10vh)`,

                    bgcolor: 'rgba(15,23,42,0.0)',
                    height: '100%',
                    mx: '10vw',
                    pt: '25vh',
                    [theme.breakpoints.down('sm')]: {
                        pt: '5vh',
                        pl: '4vw',
                    },
                }}
            >
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
                                    backgroundColor: 'rgba(0,0,0,0.3)', // Change as needed
                                    transform: 'scale(1.1)', // Change as needed
                                },
                            }}
                            href="https://github.com/derkiab"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#ced4f0', width: '50px', height: '50px' }} // Adjust size and color as needed
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
                                    backgroundColor: 'rgba(0,0,0,0.3)', // Change as needed
                                    transform: 'scale(1.1)', // Change as needed
                                },
                            }}
                            href="https://www.linkedin.com/in/derquisanhueza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#ced4f0', width: '50px', height: '50px', }} // Adjust size and color as needed
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
                            src="./img1.jpeg"
                            sx={{
                                width: '300px',
                                height: '300px',
                                transition: 'opacity 1.5s ease-in',
                                ml: '4vw',
                                mt: '0vh',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)',
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
                <br />
                <br />
                <br />
            </Box>
        </Container>
    );
}

export default Description;

