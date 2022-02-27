import React from 'react'
import Checkout_bill from '../cartelement/Checkout_bill'
import Checkout_form from '../cartelement/Checkout_form'
import Smheader from '../components/Smheader'

const Checkout = () => {
    return (
        <>
        <Smheader smtitle="Checkout" smdesc="lorem ipsum dolar simit to lorim npoe isum trsi" />
          
          <div className="container-md" style={{marginTop:"100px"}}>
            <div className="row justify-content-between  ">
                <h5> Billing Details </h5>

            <div className="col-lg-6 ">
                <Checkout_form />
                </div>
  
                <div className="col-lg-5">
                 <Checkout_bill />
                 </div>
 
            </div>
            </div>
        </>
    )
}

export default Checkout
