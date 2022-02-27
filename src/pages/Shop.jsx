import React from 'react'
import Shopmain from '../components/Shopmain'
import Shopsidebar from '../components/Shopsidebar'
import Smheader from '../components/Smheader'
const Shop = () => {
    return (
        <>
        <Smheader smtitle="Shop" smdesc="lorem ipsum dolar simit to lorim npoe isum trsi" />
           

                  <div className="container-fluid mt-5 ">
                      <div className="shop_wrapper">
                          <div className="shop_sidebar">
                          <Shopsidebar />
                          </div>

                        <div className="shop_main">
                            <Shopmain />
                        </div>
                      </div>

                <div className="btn-d w-100 mt-5 text-center p-2 mx-auto   ">
                    <button className='rounded-pill btn btn-outline-dark mx-2 '> 1 </button>
                    <button className='rounded-pill btn btn-outline-dark mx-2 '> 2 </button>
                    <button className='rounded-pill btn btn-outline-dark mx-2 '> 3 </button>
                    <button className='rounded-pill btn btn-outline-dark mx-2 '> 4 </button>
                    <button className='rounded-pill btn btn-outline-dark mx-2 '> 5 </button>

                </div>
                  

                  </div>
        </>
    )
}

export default Shop
