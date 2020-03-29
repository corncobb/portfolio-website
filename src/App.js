import React from 'react';

import Routes from './Routes';
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const browserHistory = createBrowserHistory();


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter  history={browserHistory}>
        <Routes />
      </HashRouter >
    </ThemeProvider>
  );
}

export default App;
