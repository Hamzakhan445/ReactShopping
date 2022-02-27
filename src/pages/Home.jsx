import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Featureproduct from '../components/Featureproduct'
import Header from '../components/Header'
import Brands from '../components/Brands'
import NProduct from '../components/NProduct'
import Subscribebox from '../components/Subscribebox'
import ShoppingBox from '../components/ShoppingBox'
 

const Home = () => {


    return (
        <>
         <Header />
        <Category />
        <NProduct />
        <Banner />
        <Featureproduct />
        <Brands />
        <Subscribebox />
        <ShoppingBox />
     
        </>
    )
}

export default Home
