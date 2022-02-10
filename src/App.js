import React, { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import { Category } from './components/Categories/Category';
import Header from './components/Header/Header'
import Product from './components/products/product';

function App() {
  return (
    <>
      <Header />
      <Category />
      <Banner />
      <Product />
    </>
  )
}

export default App;
