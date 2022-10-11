import React,{useContext} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import './ProductFS.css'
import { collection, query, onSnapshot, addDoc, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import { UserContext } from '../../Context';

function ProductFS(props) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const cartBtnHandler = async (img, des, price, loc) => {
        await addDoc(collection(db, "cart"), {
            userId: user.uid,
            img: img,
            des: des,
            price: price,
            loc: loc
        });
    }


    return (
        <div className='FsWrap' >
            <div className="contWrap">
                <div className="closeIcon" onClick={() => props.setFullScreen('')} >
                    <AiOutlineClose />
                </div>
                <div className="content">
                    <div className="contentLeft">
                        <img className='img' src={props.img} ></img>
                    </div>
                    <div className="contentRight">
                        <h1> Description: {props.des} </h1>
                        <h2> Price: {props.price} </h2>
                        <h3>Location: {props.loc}</h3>
                        <h3>Uploaded date: {new Date(props.date.seconds * 1000).toLocaleDateString("en-US")}</h3>
                        <div className="btns">
                        <button className='btnBuy' >BUY</button>
                        <button className="btnCart" onClick={ ()=> cartBtnHandler(props.img,props.des, props.price, props.loc)} >ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default ProductFS