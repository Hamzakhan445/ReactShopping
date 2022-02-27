import React from 'react'
import ShopBox from './ShopBox';

const ShoppingBox = () => {
  return(  
  <>
    <div className="container-md mt-5  pt-5 ">
    <div className="shop_wrapper2 ">
    
    <div className="shopbox">
    <ShopBox
    shopicon="shopicon fa fa-truck"
     shoptitle="Free Shipping"
     shopsubtitle=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Eaque, necessitatibus! Accusamus "
    />
    </div>

    <div className="shopbox">
        <ShopBox
        shopicon="shopicon fa fa-shield"
     shoptitle="Secure Payment"
     shopsubtitle=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Eaque, necessitatibus! Accusamus "
    />
    </div>

    <div className="shopbox">
        <ShopBox
        shopicon="shopicon fa fa-undo"
     shoptitle="Simple Return"
     shopsubtitle=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Eaque, necessitatibus! Accusamus "
    />
    </div>

    </div>
    </div>
  </>
)
};

export default ShoppingBox;
