import React from 'react'
import Banner from '../components/banner/Banner';
import Header from '../components/Header/Header';
import { Category } from '../components/Categories/Category';
import Product from '../components/products/product';

function Home() {
    return (
        <>
            <Header />
            <Category />
            <Banner />
            <Product />
        </>
    )
}

export default Home