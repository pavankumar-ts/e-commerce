import React, { useState } from 'react'
import { BsDot } from 'react-icons/bs'
import img1 from '../../../Images/LoginBanner01.webp'
import img2 from '../../../Images/LoginBanner02.webp'
import img3 from '../../../Images/LoginBanner03.webp'
import './SlideData.css'

export default function SlideData() {
    const Ban1 = () => {
        return (
            <div className="banner"  >
                <img src={img1} alt="img"  />
                <h5>Help us become one of the safest places to buy and sell</h5>
            </div>
        )
    }
    const Ban2 = () => {
        return (
            <div className="banner"  >
                <img src={img2} alt="img"  />
                <h5>Close deals from the comfort of your home.</h5>
            </div>
        )
    }
    const Ban3 = () => {
        return (
            <div className="banner"  >
                <img src={img3} alt="img"  />
                <h5>Keep all your favourites in one place.</h5>
            </div>
        )
    }
    const [index, setIndex] = useState(1)
    return (
        <div className="slideWrap" >
            {index === 1 ? <Ban1 /> : index === 2 ? <Ban2 /> : index === 3 ?  <Ban3 /> : "" }
            <div className="slide"  >
                <div className={index === 1 ? "active" : "notActive"} onClick={()=> setIndex(1)} > <BsDot /> </div>
                <div className={index === 2 ? "active" : "notActive"} onClick={()=> setIndex(2)} > <BsDot /> </div>
                <div className={index === 3 ? "active" : "notActive"} onClick={()=> setIndex(3)} > <BsDot /> </div>
            </div>
        </div>
    )
}
