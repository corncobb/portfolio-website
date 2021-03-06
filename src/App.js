import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import smoothscroll from 'smoothscroll-polyfill';

import { StartConsoleLog, ScrollTop, Popup } from './components';

const browserHistory = createBrowserHistory();
smoothscroll.polyfill();

const App = () => {
  StartConsoleLog();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={browserHistory}>
          <Routes />
        </Router>
        <ScrollTop>
          <Fab color="primary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Popup title="Heads up!!!">
          This site is under construction. Some content may change in the future
        </Popup>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
