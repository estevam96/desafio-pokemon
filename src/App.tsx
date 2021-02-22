import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './app/styles/GlobalStyle';
import theme from './app/styles/theme';
import Login from './app/pages/Login';
import Home from './app/pages/Home';
import PrivateRouter from './app/router/PrivateRouter';
import ProvideAuth from './app/context/auth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ProvideAuth>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRouter exact path="/">
              <Home />
            </PrivateRouter>
          </Switch>
        </ProvideAuth>
      </Router>
    </ThemeProvider>
  );
};

export default App;
