import React from 'react'
import { BiPhoneCall, BiEnvelope, BiMap } from "react-icons/bi";
import {FaFacebook, FaInstagramSquare,FaTwitterSquare,FaYoutube } from "react-icons/fa";

const Contactinfo = () => {
    return (
        <>
            <div className="container-md form ">
            <div className="row justify-content-between align-items-middle ">
                <div className="col-lg-4 col-11 col-sm-8 mx-auto  col-md-6 m-3 forminfo">
                    <div className="infobox">
                        <div className="infoicon">
                        <BiPhoneCall />
                        </div>
                        <div className="infotext">
                            +92 312 09901018
                        </div>
                    </div>

                    <div className="infobox">
                        <div className="infoicon">
                        <BiMap />
                        </div>
                        <div className="infotext">
                           Pakistan KPK
                        </div>
                    </div>

                    <div className="infobox">
                        <div className="infoicon">
                        <BiEnvelope />
                        </div>
                        <div className="infotext">
                            abc@gmail.com
                        </div>
                    </div>

                <div className="socialicon">
                    <h5>Follow Us</h5>
                    <div className="social">
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaTwitterSquare />
                    <FaYoutube />

                    </div>
                </div>

                </div>
                
                <div className="col-lg-6 col-11 col-sm-10 col-md-6 mx-auto m-3 formdata ">
                    <h5> Get In Touch </h5>

                <div className="row mt-5 ">
                    <div className="col-lg-6 mb-3 ">
                        <input type="text" className='form-control p-3 ' placeholder='Name *' />
                    </div>
                    
                    <div className="col-lg-6 mb-3 ">
                        <input type="email" className='form-control p-3 ' placeholder='Email *' />
                    </div>
                    
                    <div className="col-lg-12 mb-3 ">
                        <input type="text" className='form-control p-3 ' placeholder='Subject *' />
                    </div>
                    
                    <div className="col-lg-12 mb-3 ">
                    <textarea placeholder='Message *' className='form-control p-3 ' rows="7" ></textarea>
                    </div>
                </div>

                <input type="submit" className='mainbtn' value="Submit" />

                </div>

            </div>
            </div>
        </>
    )
}

export default Contactinfo
