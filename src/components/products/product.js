import React from 'react'
import {AiOutlineHeart, BiRupee} from 'react-icons/all'
import car2 from '../../Images/car2.webp'
import './product.css'

const Product = () => {
    return (
        <div className='wrapper'>
            <div className="top">
                <img src={car2} alt="img" />
                <div className="like"><AiOutlineHeart/></div>
            </div>
            <div className="bottom">
                <div className="price"><BiRupee/><h1>19,000,000</h1></div>
                <div className="discr">roll royece car </div>
                <div className="placeAndDate">
                    <h4 className='place' >pune</h4>
                    <h4 className='date'>jan 14</h4>
                </div>
            </div>
        </div>
    )
}

export default Product;
