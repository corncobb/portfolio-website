import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Button, Link, Chip } from '@material-ui/core';
import {
    Code, PlayArrow
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
    imageContainer: {
        width: '100%',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '4px'
    },
    textContainer: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',

    },
    heading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontSize: '36px'
    },
    subHeading: {
        color: 'tomato',
        padding: '0',
        textTransform: 'uppercase',
        fontStretch: 'normal',
        fontSize: '20px'
    },
    description: {
        marginBottom: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    chip: {
        marginRight: theme.spacing(1),
    },
    stackContainer: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    }
}));


const PortfolioProject = (props) => {
    const classes = useStyles();
    const project = props.location.state.project;

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
                        <img
                            className={classes.imageContainer}
                            src={project.imageUrl}
                            alt={project.urlTitle.split('-').join(' ')}
                        />

                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Box className={classes.textContainer}>
                            <Typography
                                variant="h1"
                                align="left"
                                className={classes.heading}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                variant="h3"
                                align="left"
                                className={classes.subHeading}
                            >
                                {project.type}
                            </Typography>
                            <div className={classes.stackContainer}>
                                {project.stack.map((tag, index) => (
                                    <Chip
                                        className={classes.chip}
                                        key={index}
                                        label={tag}
                                        size="small"
                                        color="primary"
                                    />
                                ))}
                            </div>
                            <Typography
                                className={classes.description}
                                variant="subtitle1"
                                align="left"
                                style={{ color: 'tan' }}
                            >
                                {project.description}
                            </Typography>
                            {project.sourceUrl ? <Grid
                                item
                                md={4}
                                xs={12}
                            >
                                <Button
                                    fullWidth
                                    component={Link}
                                    href={project.sourceUrl}
                                    underline="none"
                                    variant="contained"
                                    color="primary"
                                    target="_blank"
                                    className={classes.button}
                                    startIcon={<Code />}
                                >
                                    Code
                                </Button>
                            </Grid> : null}
                            {project.liveUrl ? <Grid
                                item
                                md={4}
                                xs={12}
                            >
                                <Button
                                    fullWidth
                                    component={Link}
                                    href={project.liveUrl}
                                    underline="none"
                                    variant="outlined"
                                    color="primary"
                                    target="_blank"
                                    className={classes.button}
                                    startIcon={<PlayArrow />}
                                >
                                    Demo
                                </Button>
                            </Grid> : null}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PortfolioProject;