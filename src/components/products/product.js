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
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
            });
            setData(cities);
        });



    }, []);

    const FavHandler = (productId) => {
        console.log(user.uid, "prod", productId);
        const [liked, setLiked] = useState(false)
        const async = async () => {
            console.log("as");
            const fav = query(collection(db, "fav"), where("userId", "==", user.uid), where("productId", "==", productId));
            const querySnapshot = await getDocs(fav);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setLiked(true)
            });
        }
        async()
        return (
            liked ? <AiOutlineHeart /> : <BsFillSuitHeartFill />
        )
    }

    const favBtnHandler = async (productId) => {
        await addDoc(collection(db, "fav"), {
            userId: user.uid,
            productId: productId
        });
    }


    return (
        <div>
            <div className="prodDisp"  >
                {data.map((item, index) => {
                    return (
                        <div className='wrapper' key={index}  >
                            <div className="top" >
                                <img className='productIng' src={item.img} alt="img" onClick={() => setFullScreen(item.img)} />
                                <div className="like" onClick={() => favBtnHandler(item.productId)} > <FavHandler productId = {item.productId} />  </div>
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
