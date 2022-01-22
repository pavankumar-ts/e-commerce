import React, { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import { Category } from './components/Categories/Category';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Product from './components/products/product';
import { loginContext } from './Context'


function App() {
  const [loginPage, setLoginPage] = useState(false)
  return (
    <loginContext.Provider value={{ loginPage, setLoginPage }} >
      <Header />
      <Category />
      <Banner />
      {loginPage ? <Login /> : ''}
      <Product />
    </loginContext.Provider>
  )
}

export default App;
