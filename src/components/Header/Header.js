import React, { useContext, useState } from 'react'
import './Header.css'
import Logo from '../../Images/logo.png'
import { BiSearchAlt2, BiSearchAlt } from 'react-icons/bi'
import { AiOutlineDown, AiOutlineUp, AiOutlinePlus } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { GrNotification } from 'react-icons/gr'
import { UserContext } from '../../Context'
import Profile from './profile/Profile'
import { useNavigate } from 'react-router-dom'



function Header() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [lang, setLang] = useState(false);

    return (
        <div className="header" >
            <div className='logo' >
                <img src={Logo} />
            </div>

            <div className='navWrapp'>
                <div className='country'>
                    <BiSearchAlt2 />
                    <input type="text" name="" id="" defaultValue='INDIA' />
                    <AiOutlineDown />
                </div>
                <div className='searchBar'>
                    <input type="text" name="" id="" placeholder='Find Car, MobilePhones and more' />
                    <div className="searchIcon">
                        <BiSearchAlt />
                    </div>
                </div>
                <div className="lang" onClick={() => setLang(!lang)} >
                    english
                    {lang ? <AiOutlineUp /> : <AiOutlineDown />}
                    <div className={lang ? "langOpt" : "langOptHide"}>
                        <h2>English</h2>
                        <h2 onClick={() => alert("हिन्दी is temporarily  available")} >हिन्दी</h2>
                    </div>
                </div>
                <div className="fav">
                    <BsFillHeartFill />
                </div>
                <div className="notification">
                    <GrNotification />
                </div>
                {/* calling login page onClick */}
                <div className="profile" >
                    <Profile />
                </div>
                <div className="sell" >
                    {console.log("Login",user)}
                    <button onClick={() => {
                        user.user!= false ? navigate('/sell') : alert("Please login")
                    }
                    }>
                        <AiOutlinePlus style={{ marginRight: "10%" }} />SELL
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
