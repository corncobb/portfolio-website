import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90vw",
        textAlign: "center",
        zIndex: 1,
        userSelect: "none"
    }
}))

const Header = () => {

    const classes = useStyles()

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                {/* Add this later, from 42:55 */}
                <Avatar className={classes.avatar} alt="Cameron Cobb" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Cameron Cobb"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={["Web Developer", "Mobile App Developer", "Programmer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />

            </Typography>
        </Box>
    )

}

export default Header;