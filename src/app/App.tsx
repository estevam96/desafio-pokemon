import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Login from './pages/Login';
import Routes from './router';
import ProvideAuth from './context/auth';
import Navbar from './components/Navbar';

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
            <Route path="/">
              <Navbar />
              <Routes />
            </Route>
          </Switch>
        </ProvideAuth>
      </Router>
    </ThemeProvider>
  );
};

export default App;
