import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
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
