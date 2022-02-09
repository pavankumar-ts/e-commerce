import React, { useContext, useState } from 'react'
import './Login.css'
import { AiOutlineClose } from 'react-icons/ai'
import { loginContext } from '../../Context'
import PhoneNo from './phoneNo'
import MainLogin from './MainLogin'
import {phoneNoLogin} from '../../Context'

const Login = () => {
    const [openPhoneNo, setOpenPhoneNo] = useState(false);
    const { loginPage, setLoginPage } = useContext(loginContext);


    return (
        <phoneNoLogin.Provider value={setOpenPhoneNo}>
        <div className={loginPage ? 'wrap' : "wrapClose"}>
            <div className="content">
                {/* Close */}
                <div className="close" onClick={() => setLoginPage(!loginPage)}>
                    <AiOutlineClose />
                </div>
                {openPhoneNo ? <PhoneNo /> : <MainLogin /> }
                
            </div>
        </div>
        </phoneNoLogin.Provider>
    )
}

export default Login
