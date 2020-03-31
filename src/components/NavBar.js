import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/"
    },
]

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleSlider = () => {
        setDrawerOpen(!drawerOpen)
    }

    const classes = useStyles();

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider}>
            {/* Add this later. 20:01 for reference*/}
            <Avatar className={classes.avatar} src="" alt="Cameron Cobb" />
            <Divider />
            <List>
                {menuItems.map((item, key) => (
                    <ListItem button key={key} component={Link} to={item.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={item.listText} />
                    </ListItem>

                ))}
            </List>
        </Box>
    )

    return (
        <React.Fragment>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>
                            Portfolio
                    </Typography>
                    <MobileRightMenuSlider anchor="right" open={drawerOpen} onClose={toggleSlider}>
                        {sideList()}
                    </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}

export default NavBar;