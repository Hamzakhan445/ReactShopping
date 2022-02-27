import React from 'react'
import Mainheading from './Mainheading'

const Brands = () => {
    return (
        <>
            <div className="container-md mt-5 pt-5 ">
                <Mainheading headingtext="Popular Brands"/>
                <div className="row justify-content-between align-items-center mt-5 ">
                    <div className="col-lg-2 col-5   col-sm-3 col-md-2 text-center brandbox mt-5 ">
                        <img src="http://demo.designing-world.com/bigshop-2.3.0/img/partner-img/3.jpg" className='img-fluid ' alt="" />
                    </div>
                    <div className="col-lg-2 col-5   col-sm-3 col-md-2 text-center brandbox mt-5 ">
                        <img src="http://demo.designing-world.com/bigshop-2.3.0/img/partner-img/4.jpg" className='img-fluid ' alt="" />
                    </div>
                    <div className="col-lg-2 col-5   col-sm-3 col-md-2 text-center brandbox mt-5 ">
                        <img src="http://demo.designing-world.com/bigshop-2.3.0/img/partner-img/5.jpg" className='img-fluid ' alt="" />
                    </div>
                    <div className="col-lg-2 col-5   col-sm-3 col-md-2 text-center brandbox mt-5 ">
                        <img src="https://flone.reactdemo.hasthemes.com/assets/img/brand-logo/brand-logo-2.png" className='img-fluid ' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands
