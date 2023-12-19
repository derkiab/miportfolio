import React from 'react';
import { Container, useTheme, Grid, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';

function Description({ navbarHeight }) {
    const theme = useTheme();
    const [refNombre, inView1] = useInView({
        triggerOnce: false,
    });
    const [refAcerca, inView2] = useInView({
        triggerOnce: false,
    });
    const [refAvatar, inView3] = useInView({
        triggerOnce: false,
    });


    return (
        <Container maxWidth="xl" sx={{ mb: '70vh' }}>
            <Box
                sx={{
                    position: 'relative',
                    top: `calc(-${navbarHeight}px + 10vh)`,

                    bgcolor: 'rgba(15,23,42,0.0)',
                    height: '100vh',
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
                    </Grid>

                    <Grid item xs={12} sm={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
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
                                mt: '1vh',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)',
                                opacity: inView1 ? 1 : 0,
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
                        },
                    }}
                >
                    Acerca de mí
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'normal',
                        transition: 'opacity 0.8s ease-out, transform 1.8s ease-out',
                        color: '#eee1c8',
                        opacity: inView2 ? 1 : 0,
                        fontFamily: 'Roboto, sans-serif',
                        mt: '5vh',
                        textShadow: inView2 ? '0px 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
                        transform: inView2 ? 'translateX(0)' : 'translateX(-300px)',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '1.3rem',
                        },
                    }}
                >
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis ultricies nisl
                </Typography>
            </Box>
        </Container>
    );
}

export default Description;

