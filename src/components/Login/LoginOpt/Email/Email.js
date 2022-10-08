import React, { useState } from 'react'
import './Email.css'
import logo from '../../../../Images/logo.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Email = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  // email verification
  const handleEmail = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/')
        // ...
      }).catch((error) => {
        console.log(error.message);
        // ..
      });

  }
  return (
    <div className='emailWrap' >
      <div className="emailLogo">
        <img src={logo} alt="olx" />
      </div>
      <h2>Enter the email to login</h2>
      <div className="input">
        <input type="email" placeholder='Email' required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <input type="password" placeholder='Password' required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="nextBtn">
        <button onClick={handleEmail} >email</button>
      </div>
      <p>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
    </div>
  )
}

export default Email;