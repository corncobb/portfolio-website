import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton, Link} from "@material-ui/core";
import SocialLinks from '../assets/data/SocialLinks'
import {
  LinkedIn
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233",
    minHeight: "100vh",
    height: "100%",
  },
  contentContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    textAlign: "center",
    zIndex: 1,
    userSelect: "none"
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

const Contact = () => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.contentContainer}>
        <IconButton component={Link} href={SocialLinks.LinkedIn}
          underline='none' target="_blank" aria-label="LinkedIn" color="primary">
          <LinkedIn style={{ fontSize: "6rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Contact;