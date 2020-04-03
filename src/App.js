import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
//import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Route } from 'react-router-dom';
import { Home, Resume } from './views'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </React.Fragment>
  );
}

export default App;
