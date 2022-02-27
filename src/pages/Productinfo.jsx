import React from 'react'
import Productdesc from '../components/Productdesc'
import Productimg from '../components/Productimg'
import Product_desc from '../components/Product_desc'

const Productinfo = () => {
    return (
        <>
        
            <div className="container-md mt-5 pt-5">
                <div className="row justify-content-between">
                <Productimg />
                <Productdesc />
                </div>

                <Product_desc />


            </div>
        </>
    )
}

export default Productinfo
