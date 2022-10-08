import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import './ProductFS.css'

function ProductFS(props) {
    const navigate = useNavigate();
    return (
        <div className='FsWrap' >ProductFS {console.log("img", props)}
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
                        <button className='btnBuy' >BUY</button>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default ProductFS