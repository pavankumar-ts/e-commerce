import React, { useState } from 'react'
import './Category.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { DropDown } from './DropDown';


export const Category = () => {
    const [categoryClick, setCategoryClick] = useState(false)
    const list = ["Cars", "Motorcycle", "For Sale: House & Apartments",
        "Scooters", "Commercial & Other Vehicles",
        "For Rent: House & Apartments"]
    return (
        <>
            <div className='categoryWrap'>
                <div className="allCategory">
                    <h1>ALL CATEGORIES</h1>
                    <div className="arrow" onClick={() => setCategoryClick(!categoryClick)} >
                        {categoryClick ? <AiOutlineUp /> : <AiOutlineDown />}
                    </div>
                </div>
                <div className="list">
                    {list.map((item, key) => (
                        <h2 key={key}>{item}</h2>
                    ))}
                </div>
            </div>
            {categoryClick ? <DropDown /> : ''}
            {/* <DropDown /> */}
        </>
    )
}
