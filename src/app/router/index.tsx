import React from 'react';
import { Redirect } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Search from '../pages/Search';
import PrivateRouter from './PrivateRouter';

const router: React.FC = () => {
  return (
    <>
      <Redirect from="/" to="/home" />
      <PrivateRouter path="/home">
        <Home />
      </PrivateRouter>
      <PrivateRouter path="/search">
        <Search />
      </PrivateRouter>
      <PrivateRouter path="/favorites">
        <Favorites />
      </PrivateRouter>
    </>
  );
};

export default router;
