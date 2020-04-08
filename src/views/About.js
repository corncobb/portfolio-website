import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Button, Link, Chip } from "@material-ui/core";
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
  heading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontStretch: "normal",
    fontSize: "36px"
},
}))

const About = () => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h1" align="left" className={classes.heading}>
        About
      </Typography>
    </Box>
  );
}

export default About;