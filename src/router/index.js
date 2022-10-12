import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../constants/routes';
import Main from '../pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Main />} />
      <Route path={routes.TOP_ARTISTS} element={<div>artists</div>} />
      <Route path={routes.TOP_CHARTS} element={<div>top</div>} />
    </Routes>
  );
};

export default Router;
