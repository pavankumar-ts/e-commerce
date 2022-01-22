import React from 'react'
import {AiOutlineHeart, BiRupee} from 'react-icons/all'
import car2 from '../../Images/car2.webp'

const Product = () => {
    return (
        <div className='wrapper'>
            <div className="top">
                <img src={car2} alt="img" />
                <div className="like"><AiOutlineHeart/></div>
            </div>
            <div className="bottom">
                <div className="price"><BiRupee/></div>
            </div>
        </div>
    )
}

export default Product;
