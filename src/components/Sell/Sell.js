import React, { useState, useContext } from 'react'
import './sell.css'
import { collection, addDoc, setDoc  } from "firebase/firestore";
import { db } from '../../firebase/config'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserContext } from '../../Context'
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { v4 as id } from 'uuid';


const Sell = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const [des, setDes] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [file, setFile] = useState('')
    const [imgUrl, setimgUrl] = useState('')
    let [loading, setLoading] = useState(false);
    //generate unique id
    const productId = id();

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const handleSell = async () => {
        if (file != "") {

            setLoading(true)
            const storage = getStorage();
            const storageRef = ref(storage, file.name);
            // 'file' comes from the Blob or File API
            await uploadBytes(storageRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    setimgUrl(downloadURL);
                    console.log(imgUrl);
                });
            });
            if (imgUrl != '') {
                const current = new Date();
                const docRef = await addDoc(collection(db, "olxSell"), {
                    des: des,
                    location: location,
                    price: price,
                    img: imgUrl,
                    userid: user.uid,
                    date: current,
                    productId: productId
                });
                navigate('/')
                console.log("Document written with ID: ", docRef.id);
            } else {
                alert('Uploading error, please try again')
                setLoading(false)
            }

        }
    }
    return (
        <div className="wrap">
            <form action="" className='form'>
                <label htmlFor="">Description: </label>
                <input type="text" required
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                />

                <label htmlFor="">Price: </label>
                <input type="number" required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="">Location: </label>
                <input type="text" required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <img src={file ? URL.createObjectURL(file) : ''} alt="" width="150px" />
                <label >Image:</label>
                <input id='imgInput' type="file" required accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFile(e.target.files[0])}

                />
            </form>
            <div className="post">
                <button className='sellbtn' onClick={handleSell} type='submit'>POST</button>
                <ClipLoader color='red' loading={loading} css={override} size={50} />
                {/* <h1> {current} </h1> */}
            </div>
        </div>
    )
}

export default Sell