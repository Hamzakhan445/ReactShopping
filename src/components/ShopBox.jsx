import React from 'react';

const ShopBox = (shop) => {
  return(  
  <>
    <div className="shopp">
      <i className={shop.shopicon}> </i>
      <h5> {shop.shoptitle} </h5>
    <p> {shop.shopsubtitle} </p> 
    </div>
  </>
)
};

export default ShopBox;
