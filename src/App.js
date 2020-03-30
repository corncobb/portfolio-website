import React from 'react';

//import Routes from './Routes';
//import { HashRouter } from 'react-router-dom';
//import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Home } from './views'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Home/>
    </React.Fragment>
  );
}

export default App;
