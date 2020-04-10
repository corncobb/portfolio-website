import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button, Link } from "@material-ui/core";
import Pdf from '../assets/resume/Resume-Cameron-Cobb.pdf';


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
            content: "''",
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
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            },
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    button: {
        margin: "3rem",
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box component="header" className={classes.mainContainer}>
                <div style={{ textAlign: "center" }}>
                    <Button component={Link} underline='none' size="large" variant="outlined" target="_blank" className={classes.button} href={Pdf} color="primary">
                        Downloadable Resume
                </Button>
                </div>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    {/* Good idea to add data to an array and dynamically add this in */}

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017 - 2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            CONTRACT SOFTWARE DEVELOPER
                        </Typography>
                        <Typography variant="body1" align="left" style={{ color: "tomato" }}>
                            Reno/Sparks, NV & Remote
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            My contract work mostly involved working with industrial manufacturers in the Reno/Sparks area and SaaS businesses. Tasks included programming embedded systems like microcontrollers to collect sensor information from machines, compute data, and have the data stored into a local database for analysis. Other contract work included debugging large codebases and applying SOLID principles to enable better scalability and readability. Later, I got involved with more web-based contract work building full-stack web apps.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019 - Present
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                        CONTRACT IOS & ANDROID DEVELOPER
                        </Typography>
                        <Typography variant="body1" align="left" style={{ color: "tomato" }}>
                        Reno, NV & Remote
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                        I have expanded my skill set to develop IOS and Android apps. I have been contracted out to help build, redesign, and improve 2 complex apps with large codebases (+20,000 lines of code). MyBarView which was on the Google Play and Apple App Store is one of them. My job is to redesign the apps to make them feel more native, introduce more efficient algorithms, minimize calls to the database, and improve user experience and load times.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Resume;