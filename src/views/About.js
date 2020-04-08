import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Button, Link, Chip, Avatar } from "@material-ui/core";
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
  subHeading: {
    color: "tomato",
    padding: "0",
    textTransform: "uppercase",
    fontStretch: "normal",
    fontSize: "20px"
},
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto"
  },
}))

const About = () => {
  const classes = useStyles()
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
            <Avatar className={classes.avatar} alt="Cameron Cobb" />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h1" align="left" className={classes.heading}>
              Cameron Cobb
            </Typography>
            <Typography variant="h3" align="left" className={classes.subHeading}>
              Web Developer | Mobile App Developer | Contract Computer Programmer
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;