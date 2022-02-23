import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ScrollToTop from './components/ScrollToTop./ScrollToTop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/ProductsList/ProductsList';
import OAuthHandler from './components/Nav/Login/OauthHandler';
import ChartBox from './pages/ProductDetail/PriceChart/ChartBox';
import Logout from './components/Nav/Login/Logout';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/list" element={<ProductsList />} />
        <Route path="/oauth" element={<OAuthHandler />} />
        <Route path="/chart" element={<ChartBox />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
