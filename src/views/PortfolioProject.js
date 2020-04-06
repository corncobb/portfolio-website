import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Button, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
        height: "100vh",
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
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))


const PortfolioProject = (props) => {
    const classes = useStyles()
    const project = props.location.state.project
    console.log(project)
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
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            {project.title}
                        </Typography>
                        <Typography variant="body1" align="left" style={{ color: "tomato" }}>
                            Company where worked
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            {project.description}
                        </Typography>
                    </Grid>

                </Grid>

            </Box>
        </Box>
    );
}

export default PortfolioProject;