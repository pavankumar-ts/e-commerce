import React, { useState, useContext } from 'react'
import './Login.css'
import img01 from '../../Images/LoginBanner01.webp'
import img02 from '../../Images/LoginBanner02.webp'
import img03 from '../../Images/LoginBanner03.webp'
import { BsDot, BsPhone, BsGoogle, BsFacebook } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { loginContext } from '../../Context'

const Login = () => {
    const [toggle, setToggle] = useState(1);
    const { loginPage, setLoginPage } = useContext(loginContext);
    const One = () => (
        <div id="one" className="banner" >
            <img className='img' src={img01} alt='img' />
            <h2>Help us become one of the safest places to buy and sell.</h2>
        </div>
    )
    const Two = () => (
        <div id="two" className="banner" >
            <img className='img' src={img02} alt='img' />
            <h2> Close deals from the comfort of your home. </h2>
        </div>
    )
    const Three = () => (
        <div id="three" className="banner" >
            <img className='img' src={img03} alt='img' />
            <h2>Keep all your favourites in one place.</h2>
        </div>
    )
    return (
        <div className={loginPage ? 'wrap' : "wrapClose"}>
            <div className='loginWrap'>
                {/* Close */}
                <div className="close" onClick={() => setLoginPage(!loginPage)}>
                    <AiOutlineClose />
                </div>
                <div className="banners">
                    {toggle == 1 ? <One /> : toggle == 2 ? <Two /> : <Three />}
                    <div className="toggle">
                        <h1 onClick={() => setToggle(1)} className={toggle == 1 ? 'active' : ''} ><BsDot /></h1>
                        <h1 onClick={() => setToggle(2)} className={toggle == 2 ? 'active' : ''} ><BsDot /></h1>
                        <h1 onClick={() => setToggle(3)} className={toggle == 3 ? 'active' : ''} ><BsDot /></h1>
                    </div>
                </div>

                <div className="loginOp">
                    <div className="login" id="phone">
                        <div className="icon">
                            <BsPhone />
                        </div>
                        Continue with Phone
                    </div>
                    <div className="login" id="faceBook">
                        <div className="icon">
                            <BsFacebook />
                        </div>
                        Continue with Facebook
                    </div>
                    <div className="login" id="google">
                        <div className="icon">
                            <BsGoogle />
                        </div>
                        Continue with Google
                    </div>
                    <div className="footer">
                        <div className="or">
                            OR
                        </div>
                        <div className="email">
                            Login with Email
                        </div>
                    </div>
                    <div className="footer">
                        <h4>All your personal details are safe with us</h4>
                        <div className="policy">
                            <h3>if you continue, you are accepting <span >OLX terms and Conditions and Privacy Policy</span></h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
