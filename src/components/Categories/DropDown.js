import React from 'react';
import { Prop, mobiles,jobs, bikes, electronices, commercial,furniture,
    fashion,books, services } from './CategoryData';
import './DropDown.css';

export const DropDown = () => {
    return (
        <div className='dataWrap' >
            <div className="col1">
                <div className="properties">
                    <h1>Properties</h1>
                    {Prop.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="mobiles">
                    <h1>Mobiles</h1>
                    {Prop.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div className="col2">
                <div className="jobs">
                    <h1>Jobs</h1>
                    {jobs.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="bikes">
                    <h1>Bikes</h1>
                    {bikes.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div className="col3">
                <div className="electronices">
                    <h1>Electronices</h1>
                    {electronices.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="commercial">
                    <h1>Commercial</h1>
                    {commercial.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="furniture">
                    <h1>Furniture</h1>
                    {furniture.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div className="col4">
                <div className="fashion">
                    <h1>Fashion</h1>
                    {fashion.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="books">
                    <h1>Books, Sports & Hobbies </h1>
                    {books.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="services">
                    <h1>Services</h1>
                    {services.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
