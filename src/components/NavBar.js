import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import SocialLinks from '../assets/data/SocialLinks'
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
    Link,
    Typography,
    Box
} from "@material-ui/core";

import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    Info,
    LinkedIn,
    GitHub
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
    },
    pageTitle: {
        color: "tan",
        flexGrow: 1
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
        listPath: "/portfolio"
    },
    {
        listIcon: <Info />,
        listText: "About",
        listPath: "/about"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
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
                    <ListItem button key={key} component={RouterLink} to={item.listPath}>
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
                    <Toolbar id="back-to-top-anchor">
                        <IconButton onClick={toggleSlider}>
                            <Menu style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" className={classes.pageTitle}>
                            {window.location.pathname === '/' ? '/home' : "/" + window.location.pathname.split("/")[1]}
                        </Typography>
                        <IconButton component={Link} href={SocialLinks.GitHub}
                            underline='none' target="_blank" aria-label="GitHub" color="primary">
                            <GitHub />
                        </IconButton>
                        <IconButton component={Link} href={SocialLinks.LinkedIn}
                            underline='none' target="_blank" aria-label="LinkedIn" color="primary">
                            <LinkedIn />
                        </IconButton>
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