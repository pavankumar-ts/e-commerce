import React, { useContext, useState } from 'react'
import './profile.css'
import pic from '../../../Images/avatar.png';
import { AiOutlineDown, IoCaretUpSharp, BiLogOut } from 'react-icons/all'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context'
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [dropActive, setDropActive] = useState(false)

    const handleSignout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(false)

        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    const Login = () => {
        return (
            <div className="pLogin" onClick={() => navigate('/login')}  >
                Login
            </div>
        )
    }
    const Profile = () => {
        return (
            <div className="profileWrap" onClick={() => setDropActive(!dropActive)} >
                <div className="profilePic">
                    <img src={user.photoURL ? user.photoURL : pic} alt=" " />
                </div>
                <div className="downarrow">
                    <AiOutlineDown />
                </div>
                <div className={dropActive ? "BiUpArrow" : "diactivate"}> <IoCaretUpSharp /> </div>
                <div className={dropActive ? "profileDetials" : "diactivate"}>
                    <div className="pic">
                        <img src={user.photoURL ? user.photoURL : pic} alt="" />
                    </div>
                    <div className="details">
                        <div style={{ color: "#696363ae" }} >Hello,</div>
                        <div style={{ fontStyle: "italic", marginTop: '5px' }} >{user.displayName ? user.displayName : 'OLX user'} </div>
                        <div style={{ marginTop: '5px' }}> {user.phoneNumber} </div>
                        <div className="signOut" onClick={handleSignout} >
                            <div  ><BiLogOut /></div>
                            <div>LogOut</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (
        <>
            {user ? <Profile /> : <Login />}
        </>
    )
}

export default Profile