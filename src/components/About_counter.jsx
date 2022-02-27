import React from 'react'
 import $ from 'jquery'
import CountUp from 'react-countup'

const About_counter = () => {

    


    return (
        <>
            <br/> <br/>
            <div className="container-fluid bg-light p-3 mt-5">
                <div className="container-md">
                    <div className="row">

                    <div className="col-lg-3 col-12 col-sm-5 mx-auto col-md-3 text-center text-center p-5 counterbox ">
                        <h3 className='counter'> <CountUp end={100} duration={5} /> </h3>
                        <h5> Brands </h5>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-5 mx-auto col-md-3 text-center text-center p-5 counterbox ">
                        <h3 className='counter'> <CountUp end={5000} duration={5} /> </h3>
                        <h5> Happy Clients </h5>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-5 mx-auto col-md-3 text-center text-center p-5 counterbox ">
                        <h3 className='counter'> <CountUp end={40000} duration={5} /> </h3>
                        <h5> Visitors </h5>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-5 mx-auto col-md-3 text-center text-center p-5 counterbox ">
                        <h3 className='counter'> <CountUp end={500} duration={5} /> </h3>
                        <h5> Projects </h5>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About_counter
