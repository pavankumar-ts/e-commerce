import React, { useState, useRef, useContext } from 'react';
import { AiOutlineClose, BiArrowBack } from 'react-icons/all'
import './PhoneNo.css'
import logo from '../../Images/logo.png'
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { db } from '../../firebase/config';
import { loginContext } from '../../Context';

function PhoneNo() {
    const [digit, setDigit] = useState(false);
    const [otpToggle, setOtpToggle] = useState(false);
    const [number, setNumber] = useState('');
    const [userName, setUserName] = useState('');
    const { setLoginPage } = useContext(loginContext);
    //otpCOode
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');
    //digit check
    const handleNumberInput = (e) => {
        setNumber(e.target.value)
        var len = number.length;
        if (len == 9) {
            setDigit(true)
        }
        if (len !== 9) {
            setDigit(false)
        }
    }
    //firebase phonenumber varification code send
    const SendCode = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('reCapture-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.

            }
        }, auth);
        const phoneNumber = "+91" + number;
        const displayName = 'pavan'
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setOtpToggle(true)
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                console.log("error", error);
            });

    }
    //code varification
    const handleCodeVarification = () => {
        const code = code1 + code2 + code3 + code4 + code5 + code6;
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("login successful", user);
            setLoginPage(false);
            // var users = db.auth().currentUser;
            // users.updateProfile({
            //     displayName: "Jane Q. User"
            // }).then(function () {
            //     // Update successful.

            // }).catch(function (error) {
            //     // An error happened.
            //     console.log(error);
            // });
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            alert(error)
        });
    }
    //input phone number
    const EnterPhoneNo = () => {
        return (
            <div className='phoneNoLogin'>
                <div className="logoWrap">
                    <img src={logo} alt="olx" />
                </div>

                <div className="text">Enter the UserName</div>
                <div className="input">
                    <input type="text" placeholder='pavan kumar'  required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className="text">Enter your phone number</div>
                <div className="input">
                    <div className="code">+91</div>
                    <div className="noInput">
                        <input
                            value={number}
                            onChange={handleNumberInput}
                            type="text"  autocomplete="mobile"
                            placeholder='Phone Number' />
                    </div>
                </div>
                <div className="discription">Your contact number is never shared with
                    external parties nor do we use it to spam you in any way.</div>
                <div className={digit ? "nextBtn" : "nextBtnDisable"}>
                    <button onClick={SendCode} type='submit'>Next</button>
                </div>

            </div>
        )
    }
    const OTP = () => {
        return (
            <div className="otpWrap">
                <div className="back" onClick={() => setOtpToggle(false)} > <BiArrowBack /> </div>
                <div className="logoWrap">
                    <img src={logo} alt="olx" />
                </div>
                <div className="text">Enter verification code</div>
                <div className="inputOTP">
                    <input className='otp' type="text" autoFocus name="0" maxLength={1} placeholder='-'
                        value={code1}
                        onChange={(e) => {
                            setCode1(e.target.value)
                        }}
                    />
                    <input className='otp' type="text" autoFocus={code1 ? true : false} name="1" placeholder='-'
                        value={code2}
                        onChange={(e) => {
                            setCode2(e.target.value)
                        }}
                    />
                    <input className='otp' type="text" autoFocus={code2 ? true : false} name="2" maxLength={1} placeholder='-'
                        value={code3}
                        onChange={(e) => {
                            setCode3(e.target.value)
                        }}
                    />
                    <input className='otp' type="text" autoFocus={code3 ? true : false} name="3" maxLength={1} placeholder='-'
                        value={code4}
                        onChange={(e) => {
                            setCode4(e.target.value)
                        }}
                    />
                    <input className='otp' type="text" autoFocus={code4 ? true : false} name="4" maxLength={1} placeholder='-'
                        value={code5}
                        onChange={(e) => {
                            setCode5(e.target.value)
                        }}
                    />
                    <input className='otp' type="text" autoFocus={code5 ? true : false} name="5" maxLength={1} placeholder='-'
                        value={code6}
                        onChange={(e) => {
                            setCode6(e.target.value)
                        }}
                    />
                </div>
                <div className="submit">
                    <button type='submit'
                        onClick={handleCodeVarification}
                    >Submit</button>
                </div>

            </div>
        )
    }

    return (
        <div >
            {otpToggle ? <OTP /> : <EnterPhoneNo />}
            <div id="reCapture-container" ></div>
        </div>
    )
}

export default PhoneNo;
