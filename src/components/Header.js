import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import Typed from 'react-typed';
import Image from '../assets/images/coding-background-1-min.jpg';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: 'tomato'
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -500
    },
    backgroundPhoto: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        height: '100vh',
        position: 'relative',
        '&:before': {
            content: '\'\'',
            backgroundImage: `url(${Image})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
        }
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        textAlign: 'center',
        zIndex: 1,
        userSelect: 'none'
    },
    particlesCanvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: '0.6'
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.backgroundContainer}>
                <Box className={classes.backgroundPhoto}>
                    <Box className={classes.typedContainer}>
                        <Grid
                            container
                            justify="center"
                        >
                            {/* Add this later, from 42:55 */}
                            <Avatar
                                className={classes.avatar}
                                alt="Cameron Cobb"
                            />
                        </Grid>
                        <Typography
                            className={classes.title}
                            variant="h4"
                        >
                            <Typed
                                strings={['Cameron Cobb']}
                                typeSpeed={40}
                            />
                        </Typography>
                        <br />
                        <Typography
                            className={classes.subtitle}
                            variant="h5"
                        >
                            <Typed
                                strings={['Web Developer', 'Mobile App Developer', 'Contract Software Developer']}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                            />

                        </Typography>
                    </Box>
                    <Particles
                        canvasClassName={classes.particlesCanvas}
                        params={{
                            particles: {
                                number: {
                                    value: 45,
                                    density: {
                                        enable: true,
                                        value_area: 900
                                    }
                                },
                                shape: {
                                    type: 'circle',
                                    stroke: {
                                        width: 1,
                                        color: 'tomato'
                                    }
                                },
                                size: {
                                    value: 8,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 6,
                                        size_min: 0.1,
                                        sync: true
                                    }
                                },
                                opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 1,
                                        opacity_min: 0.1,
                                        sync: true
                                    }
                                }
                            }
                        }}
                    />
                </Box>
            </Box>
        </React.Fragment>
    );

};

export default Header;