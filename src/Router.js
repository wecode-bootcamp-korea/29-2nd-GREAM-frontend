import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ScrollToTop from './components/ScrollToTop./ScrollToTop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/ProductsList/ProductsList';
import OAuthHandler from './components/Nav/Login/OauthHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/list" element={<ProductsList />} />
        <Route path="/oauth" element={<OAuthHandler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
