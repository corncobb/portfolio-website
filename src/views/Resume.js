import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Table } from "@material-ui/core";

// This is part of the layout and should have its own layout implementation
import { NavBar } from "../components"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: '""',
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: '""',
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    }
}))

const Resume = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <NavBar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center">
                    Working Exp...
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2">
                        2013
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Resume;