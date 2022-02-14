import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ScrollToTop from './components/ScrollToTop./ScrollToTop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/ProductsList/ProductsList';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/list" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
