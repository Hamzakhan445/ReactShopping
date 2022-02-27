import React from 'react'
import { NavLink } from 'react-router-dom'
const Couponbox = () => {
    return (
        <>
           <div className="row mt-5 justify-content-between align-items-center ">

            <div className="col-lg-5 p-5 bg-light">
                <h5> Use Coupon Code </h5>
                <p> Enter your coupon code if you have one.</p>
                <input type="text" className='form-control' />
                <button className='mainbtn mt-3'>  Apply Coupon </button>
            </div>

            <div className="col-lg-6 bg-light p-5">
                <h5> Cart Total </h5>

                <p> Total Products <span style={{float:"right"}}>  $566 </span> </p> 
                <h4> Grand Total <span style={{fontWeight:"lighter",float:"right"}}> $660  </span> </h4>
            <NavLink to="/checkout">    <button className='mainbtn mt-3'>  Proceed To Checkout </button></NavLink>
            </div>



            </div> 
        </>
    )
}

export default Couponbox
