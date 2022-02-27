import React from 'react'
import Cartbox from '../cartelement/Cartbox';
import Couponbox from '../cartelement/Couponbox';
import Smheader from '../components/Smheader'
const Cart = () => {
    return (
        <>
        <Smheader smtitle="Cart" smdesc="lorem ipsum dolar simit to lorim npoe isum trsi" />
           <div className="cart_wrapper mt-5 w-75 mx-auto border-1 ">
               <h4>Your cart items</h4>

                <Cartbox />

                <div className="cartbtn d-flex justify-content-between ">
                    <button type='button' className='btn btn-outline-dark rounded-pill btn-lg'> Continue Shopping </button>
                    <button type='button' className='btn btn-outline-dark rounded-pill btn-lg'> Clear Cart   </button>
                </div>

                <Couponbox />

           </div>
        </>
    )
}

export default Cart
