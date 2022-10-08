import React, { useState } from 'react';
import './PhoneNo.css'
import logo from '../../../../Images/logo.png'
import Otp from './otp/Otp';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import db from '../../../../firebase/config'

const PhoneNo = () => {
  const [userName, setUserName] = useState('')
  const [number, setNumber] = useState('')
  const [otpCall, setOtpCall] = useState(false)
  const handleSendOtp = () => {
    if (number.length === 10) {
      //reCaptch
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      }, auth);
      //send otp
      const phoneNumber = '+91' + number;
      const appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          setOtpCall(true)
          // ...
        }).catch((error) => {
          console.log('Error SMS not sent');
          // ...
        });

      
    }
    else {
      alert('Enter the correct Number')
    }

  }
  const Number = () => {
    return (
      <div className='wrapp' >
        <div className="olxLogo">
          <img src={logo} alt="logo" />
        </div>

        <div className="input" id='number'>
          <h3>Enter the Phone Number</h3>
          <div className="inputphoneNo">
            <div className="cCode">+91</div>
            <div className="inputField">
              <input type="tel" placeholder='Phone Number' name="code1" id="code1"
                autoFocus
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="nextBtn">
          <button  type='submit' onClick={handleSendOtp}  >Next</button>
        </div>
        <div className='discription' >
          <div>Your contact number is never shared with external parties nor do we use it to </div>
          <div>spam you in any way.</div>
        </div>
        <div id='recaptcha-container'></div>
      </div>
    )
  }
  return (
    <>
      {otpCall ? <Otp /> : <Number />}
    </>
  )
}

export default PhoneNo;