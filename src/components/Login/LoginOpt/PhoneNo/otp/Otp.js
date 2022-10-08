import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../../../../Images/logo.png'
import './Otp.css'


const Otp = () => {
    const [code1, setCode1] = useState();
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');
    const navigate = useNavigate();
    const handleVeriy = () => {
        const code = code1 + code2  +code3 + code4 + code5 + code6;
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            navigate('/')
            
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            console.log(error);
            alert('error')
        });
    }
    return (
        <div className="otpWrap">
            <div className="otpLogo">
                <img src={logo} alt="logo" />
            </div>
            <h3>Enter verification code</h3>
            <div className="code">
                <div className="otpInput">
                    <input type="text" name="code1" id="code1"
                        maxLength={1}
                        value={code1}
                        onChange={(e) => setCode1(e.target.value)}
                    />
                </div>
                <div className="otpInput">
                    <input type="text" name="code2" id="code2"
                        maxLength={1}
                        value={code2}
                        onChange={(e) => setCode2(e.target.value)}
                    />
                </div>
                <div className="otpInput">
                    <input type="text" name="code3" id="code3"
                        maxLength={1}
                        value={code3}
                        onChange={(e) => setCode3(e.target.value)}
                    />
                </div>
                <div className="otpInput">
                    <input type="text" name="code4" id="code4"
                        maxLength={1}
                        value={code4}
                        onChange={(e) => setCode4(e.target.value)}
                    />
                </div>
                <div className="otpInput">
                    <input type="text" name="code5" id="code5"
                        maxLength={1}
                        value={code5}
                        onChange={(e) => setCode5(e.target.value)}
                    />
                </div>
                <div className="otpInput">
                    <input type="text" name="code6" id="code6"
                        maxLength={1}
                        value={code6}
                        onChange={(e) => setCode6(e.target.value)}
                    />
                </div>

            </div>
            <div className="varify">
                <button onClick={handleVeriy} >VERIFY</button>
            </div>
        </div>
    )
}

export default Otp