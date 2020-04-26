import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
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
    Box,
    SwipeableDrawer
} from '@material-ui/core';
import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    Info,
    LinkedIn,
    GitHub
} from '@material-ui/icons';

import SocialLinks from '../assets/data/SocialLinks';
import ProfilePic from '../assets/images/ProfilePic-min.jpg';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    },
    pageTitle: {
        color: 'tan',
        flexGrow: 1
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <Info />,
        listText: 'About',
        listPath: '/about'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/contact'
    },
];

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleSliderClose = () => {
        setDrawerOpen(false);
    };
    const toggleSliderOpen = () => {
        setDrawerOpen(true);
    };

    const classes = useStyles();

    const sideList = () => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSliderClose}
        >
            {/* Add this later. 20:01 for reference*/}
            <Avatar
                className={classes.avatar}
                src={ProfilePic}
                alt="Cameron Cobb"
            />
            <Divider />
            <List>
                {menuItems.map((item, key) => (
                    <ListItem
                        button
                        key={key}
                        component={RouterLink}
                        to={item.listPath}
                    >
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={item.listText}
                        />
                    </ListItem>

                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Box component="nav">
                <AppBar
                    position="static"
                    style={{ background: '#222' }}
                >
                    <Toolbar id="back-to-top-anchor">
                        <IconButton onClick={toggleSliderOpen}>
                            <Menu style={{ color: 'tomato' }} />
                        </IconButton>
                        <Typography
                            variant="h5"
                            className={classes.pageTitle}
                        >
                            {window.location.pathname === '/' ? '/home' : '/' + window.location.pathname.split('/')[1]}
                        </Typography>
                        <IconButton
                            component={Link}
                            href={SocialLinks.GitHub}
                            underline="none"
                            target="_blank"
                            aria-label="GitHub"
                            color="primary"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href={SocialLinks.LinkedIn}
                            underline="none"
                            target="_blank"
                            aria-label="LinkedIn"
                            color="primary"
                        >
                            <LinkedIn />
                        </IconButton>
                        <SwipeableDrawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleSliderClose}
                            onOpen={toggleSliderOpen}
                        >
                            {sideList()}
                        </SwipeableDrawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default NavBar;