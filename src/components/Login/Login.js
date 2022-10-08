import React, { useState } from 'react'
import './Login.css'
import { AiOutlineClose, BiArrowBack, BsPhone, FaFacebook, AiOutlineGoogle } from 'react-icons/all'
import SlideData from './slideData/SlideData'
import { useNavigate } from 'react-router-dom';
import PhoneNo from './LoginOpt/PhoneNo/PhoneNo';
import Email from './LoginOpt/Email/Email';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Login() {
    const navigate = useNavigate();
    const [loginopt, setLoginopt] = useState('')
    // google Sign-in
    const Google = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }


    const Login = () => {
        return (
            <div className='loginWrap'>
                <div className="slideContent">
                    <SlideData />
                </div>
                <div className="loginOptions">
                    <div className="login" id="phone" onClick={() => setLoginopt('phone')} >
                        <BsPhone className='icon' /> Continue with Phone
                    </div>
                    <div className="login" id="facebook"  >
                        <FaFacebook className='icon' />Continue with Facebook
                    </div>
                    <div className="login" id="google" onClick={Google} >
                        <AiOutlineGoogle className='icon' />Continue with Google <div style={{ textDecoration: "underline", marginLeft: "10px" ,fontSize: "10px" ,color: "red"}} >recommended</div>
                    </div>
                    <h5>Or</h5>
                    <div className="email" onClick={() => setLoginopt('email')} >
                        Login with Email
                    </div>
                    <h5>All your personal details are safe with us.</h5>
                    <h6>If you continue, you are accepting OLX Terms and Conditions and Privacy Policy</h6>
                </div>
            </div>
        )
    }
    return (
        <div className="page">
            <div className="contentWrap">
                <div className="closeIcon" onClick={() => navigate('/')} >
                    <AiOutlineClose />
                </div>
                <div className={loginopt === '' ? 'hideBackIcon' : "backIcon"} onClick={() => setLoginopt('')} >
                    <BiArrowBack />
                </div>
                {loginopt === 'phone' ? <PhoneNo /> : loginopt === 'email' ? <Email /> : <Login />}
            </div>
        </div>
    )
}
