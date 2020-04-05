import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
