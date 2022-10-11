import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineHeart, BiRupee, BsFillSuitHeartFill } from 'react-icons/all'
import './product.css'
import { collection, query, onSnapshot, addDoc, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import ProductFS from '../productFullScreen/ProductFS';
import { UserContext } from '../../Context';
import { async } from '@firebase/util';

const Product = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([])
    const [fullScreen, setFullScreen] = useState('')
    useEffect(() => {
        const q = query(collection(db, "olxSell"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const productlist = [];
            querySnapshot.forEach((doc) => {
                productlist.push(doc.data());
            });
            setData(productlist);
        });

    }, []);


    return (
        <div>
            <div className="prodDisp"  >
                {data.map((item, index) => {
                    return (
                        <div className='wrapper' key={index}  >
                            <div className="top" >
                                <img className='productIng' src={item.img} alt="img" onClick={() => setFullScreen(item.img)} />
                            </div>
                            <div className="bottom" onClick={() => setFullScreen(item.img)} >
                                <div className="price"><BiRupee /><h1>{item.price}</h1></div>
                                <div className="discr"> {item.des} </div>
                                <div className="placeAndDate">
                                    <h4 className='place' > {item.location} </h4>
                                    <h4 className='date'> {new Date(item.date.seconds * 1000).toLocaleDateString("en-US")} </h4>
                                </div>
                            </div>
                            {fullScreen == item.img ? <ProductFS setFullScreen={setFullScreen} img={item.img} des={item.des} loc={item.location} price={item.price} date={item.date} /> : ''}
                        </div>
                    )
                })
                }

            </div>

        </div>
    )
}

export default Product;
