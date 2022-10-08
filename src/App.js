import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';
import LoginPage from './pages/LoginPage';
import { UserContext } from './Context'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sell from './components/Sell/Sell';


function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    console.log("user", user);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        console.log("user", user);
        // ...
      } else {
        // User is signed out
        console.log('noUser Signed In');
      }
    });
  }, [])

  return (
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path='/sell' element={<Sell />} />
        </Routes>
      </UserContext.Provider>
  )
}

export default App;
