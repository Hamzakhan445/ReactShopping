import React from 'react'

const Checkout_bill = () => {
    return (
        <>
            <h5 className='mt-5'>Your order</h5>
            <div className="col-lg-12 bg-light p-5">
                 <p className='mt-5'> Total Products <span style={{float:"right"}}>  $566 </span> </p> 
                 <p className='mt-5'> Shipping   <span style={{fontWeight:"lighter",float:"right"}}> Free Shipping  </span> </p>
                 <p className='mt-5'> Female Qty   <span style={{fontWeight:"lighter",float:"right"}}>  x12    </span> </p>
                <h4 className='mt-5'> Grand Total <span style={{fontWeight:"lighter",float:"right"}}> $660  </span> </h4>

                <button className='mainbtn mt-3'>  Proceed To Checkout </button>
            </div>
        </>
    )
}

export default Checkout_bill
