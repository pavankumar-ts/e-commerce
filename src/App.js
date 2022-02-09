import React, { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import { Category } from './components/Categories/Category';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Product from './components/products/product';
import { loginContext, userContext } from './Context'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [loginPage, setLoginPage] = useState(false);
  const [user, setUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user)
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <userContext.Provider value={{ user }} >
      <loginContext.Provider value={{ loginPage, setLoginPage }} >
        <Header />
        <Category />
        <Banner />
        {loginPage ? <Login /> : ''}
        <Product />
        {
          console.log(user)
        }
      </loginContext.Provider>
    </userContext.Provider>
  )
}

export default App;
