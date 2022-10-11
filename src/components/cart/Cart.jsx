import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import img from '../../Images/LoginBanner02.webp'
import { collection, query, where, getDocs } from "firebase/firestore";
import { UserContext } from '../../Context'
import { db } from '../../firebase/config'

function Cart() {
    const [cartData, setCartData] = useState([])
    const { user } = useContext(UserContext)
    const itemList = [];
    useEffect(async () => {
        const q = query(collection(db, "cart"), where("userId", "==", user.uid));
        if (q != '') {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                itemList.push(doc.data())
            });
            setCartData(itemList);
            console.log("cartData", cartData);
        }
    }, [])


    return (
        <div className="cartWrap">
            <div className="cartList">
                {
                    cartData.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="right">
                                    <img className='cartImg' src={item.img} alt="img" />
                                </div>
                                <div className="left">
                                    <h1>{item.des}</h1>
                                    <h2>{item.price}</h2>
                                    <h3>{item.loc}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="order">
                Place Order
            </div>
        </div>
    )
}

export default Cart