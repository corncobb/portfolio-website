import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Button, Link } from "@material-ui/core";
import {
    Code, PlayArrow
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
        minHeight: "100vh",
        height: "100%",
    },
    itemsContainer: {
        margin: "auto",
        width: "95%",
    },
    imageContainer: {
        width: "100%",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        borderRadius: "4px"
    },
    textContainer: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    },
    button: {
        margin: theme.spacing(1),
    },
}))


const PortfolioProject = (props) => {
    const classes = useStyles()
    const project = props.location.state.project

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
                        <img className={classes.imageContainer} src={project.imageUrl} alt={project.title} />

                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Box className={classes.textContainer}>
                            <Typography variant="h5" align="left" className={classes.subHeading}>
                                {project.title}
                            </Typography>
                            <Typography variant="body1" align="left" style={{ color: "tomato" }}>
                                Company where worked
                        </Typography>
                            <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                                {project.description}
                            </Typography>
                            <Grid
                                item
                                md={4}
                                xs={12}
                            >
                                <Button
                                    fullWidth
                                    component={Link}
                                    href={project.sourceUrl}
                                    underline='none'
                                    variant="contained"
                                    color="primary"
                                    target="_blank"
                                    className={classes.button}
                                    startIcon={<Code />}
                                >
                                    Source Code
                                </Button>
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={12}
                            >
                                <Button
                                    fullWidth
                                    component={Link}
                                    href={project.liveUrl}
                                    underline='none'
                                    variant="outlined"
                                    color="primary"
                                    target="_blank"
                                    className={classes.button}
                                    startIcon={<PlayArrow />}
                                >
                                    Live Demo
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default PortfolioProject;