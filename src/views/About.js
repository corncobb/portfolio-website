import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from '../assets/data/SocialLinks';
import { Typography, Box, Grid, Button, Link, Chip, Avatar, IconButton } from '@material-ui/core';
import {
    Code, PlayArrow, LinkedIn, GitHub
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#233',
        minHeight: '100vh',
        height: '100%',
    },
    itemsContainer: {
        margin: 'auto',
        width: '95%',
    },
    heading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontSize: '36px',
        marginTop: theme.spacing(1),
    },
    subHeading: {
        color: 'tomato',
        padding: '0',
        textTransform: 'uppercase',
        fontStretch: 'normal',
        fontSize: '20px',
        marginTop: theme.spacing(1),
    },
    subtitle: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontSize: '26px',
        marginTop: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: 'auto'
    },
    stackContainer: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    chip: {
        margin: theme.spacing(1),
        color: 'white',
        background: '#616161'
    },
}));

const languages = ['JavaScript', 'Python', 'C', 'C++', 'SQL', 'HTML', 'CSS'];
const frameworks = ['Django', 'Flask', 'Pandas', 'jQuery', 'Quasar', 'Vue.js', 'React.js', 'Redux', 'Material-UI', 'Bootstrap', 'Anaconda', 'Cordova', 'Express.js', 'Dash by Plotly', 'WordPress'];
const tools = ['MySQL', 'SQLite3', 'MS SQL', 'Google Firebase', 'Google Firestore', 'MongoDB'];
const cloudServices = ['Amazon Web Services', 'EC2', 'S3'];
const devTools = ['Visual Studio', 'Visual Studio Code', 'GitHub', 'GitLab', 'Jupyter Notebook', 'Selenium',];
const other = ['SSH', 'BASH', 'Mosquitto (MQTT)', 'Embedded Systems', 'SPI', 'UART', 'I2C'];

const About = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.itemsContainer}>
                <Grid
                    alignContent="center"
                    spacing={5}
                    container
                    className={classes.itemsContainer}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Avatar
                            className={classes.avatar}
                            alt="Cameron Cobb"
                        />
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Typography
                            variant="h1"
                            align="left"
                            className={classes.heading}
                        >
              Cameron Cobb
                        </Typography>
                        <Typography
                            variant="h2"
                            align="left"
                            className={classes.subHeading}
                        >
              Software Developer
                        </Typography>
                        <IconButton
                            component={Link}
                            href={SocialLinks.GitHub}
                            underline="none"
                            target="_blank"
                            aria-label="GitHub"
                            color="primary"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href={SocialLinks.LinkedIn}
                            underline="none"
                            target="_blank"
                            aria-label="LinkedIn"
                            color="primary"
                        >
                            <LinkedIn />
                        </IconButton>
                        <Typography
                            variant="subtitle1"
                            align="left"
                            className={classes.subtitle}
                        >
              About
                        </Typography>
                        <Typography
                            className={classes.description}
                            variant="body1"
                            align="left"
                            style={{ color: 'tan' }}
                        >
            I am currently a contract software developer for SaaS companies and industrial manufacturers in the Reno/Sparks, NV area. Progress driven with the ability to learn quickly in a rapidly changing environment who loves writing scalable and quality code, contributing to open source projects, and collaborating with other developers and software engineers.
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="left"
                            className={classes.subtitle}
                        >
              Skills
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            align="left"
                            className={classes.subHeading}
                        >
              Languages
                        </Typography>
                        <div className={classes.stackContainer}>
                            {languages.map((tag, index) => (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    label={tag}
                                    size="small"
                                />
                            ))}
                        </div>
                        <Typography
                            variant="subtitle2"
                            align="left"
                            className={classes.subHeading}
                        >
              Frameworks / Libraries
                        </Typography>
                        <div className={classes.stackContainer}>
                            {frameworks.map((tag, index) => (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    label={tag}
                                    size="small"
                                />
                            ))}
                        </div>
                        <Typography
                            variant="subtitle2"
                            align="left"
                            className={classes.subHeading}
                        >
              Tools / Services / Databases
                        </Typography>
                        <div className={classes.stackContainer}>
                            {tools.map((tag, index) => (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    label={tag}
                                    size="small"
                                />
                            ))}
                        </div>
                        <Typography
                            variant="subtitle2"
                            align="left"
                            className={classes.subHeading}
                        >
              Cloud Services
                        </Typography>
                        <div className={classes.stackContainer}>
                            {cloudServices.map((tag, index) => (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    label={tag}
                                    size="small"
                                />
                            ))}
                        </div>
                        <Typography
                            variant="subtitle2"
                            align="left"
                            className={classes.subHeading}
                        >
              Dev Tools
                        </Typography>
                        <div className={classes.stackContainer}>
                            {devTools.map((tag, index) => (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    label={tag}
                                    size="small"
                                />
                            ))}
                        </div>
                        <Typography
                            variant="subtitle2"
                            align="left"
                            className={classes.subHeading}
                        >
              Other
                        </Typography>
                        <div className={classes.stackContainer}>
                            {other.map((tag, index) => (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    label={tag}
                                    size="small"
                                />
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;