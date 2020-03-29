import React, { useState, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, List, ListItem, Button, colors } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import NavigationItems from '../NavigationItems';


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: 'white',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  NavigationItem: {
    overflow: 'hidden',
    float: 'left',
    listStyle: 'none',
    '& a': {
      float: 'left',
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontSize: '17px',
    },
    '& a:hover': {
      color: 'red',
    },
    '& a:active': {
      color: 'red',
    },
    '& a.active': {
      color: 'red',
    },
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);


  // const CustomRouterLink = forwardRef((props, ref) => (
  //   <div
  //     ref={ref}
  //     style={{ flexGrow: 1 }}
  //   >
  //     <RouterLink {...props} />
  //   </div>
  // ));


  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>

        <Hidden mdDown>


          {NavigationItems.map(page => (

            <li key={page.title} className={classes.NavigationItem}>
              <NavLink
                exact={page.exact}
                to={page.href}
              >{page.title}</ NavLink>
            </li>

            // <ListItem
            //   className={classes.item}
            //   disableGutters
            //   key={page.title}
            // >



            //   <Button
            //     activeClassName={classes.active}
            //     className={classes.button}
            //     component={CustomRouterLink}
            //     to={page.href}
            //   >
            //     {page.title}
            //   </Button>
            // </ListItem>
          ))}


        </Hidden>
        <div className={classes.flexGrow}></div>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar >
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
