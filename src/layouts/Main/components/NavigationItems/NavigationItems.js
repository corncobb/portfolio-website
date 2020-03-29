import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DescriptionIcon from '@material-ui/icons/Description';
import HelpIcon from '@material-ui/icons/Help';
import BuildIcon from '@material-ui/icons/Build';
import React from 'react';

const NavigationItems = [
    {
      title: 'Home',
      href: '/',
      icon: <DashboardIcon />,
      exact: true
    },
    {
      title: 'About',
      href: '/about',
      icon: <MapIcon />
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: <BuildIcon />
    },
    
  ];

export default NavigationItems;