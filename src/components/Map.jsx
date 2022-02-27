import React from 'react'

const Map = () => {
    return (
        <>
           <div className="container-md map ">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4469426034566!2d71.55378121497985!3d34.00673682757469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917d6dceab823%3A0x106172e9a5b802f1!2sSaddar%20Rd%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1639834416560!5m2!1sen!2s"  height="500" style={{border : "none", width:"100%"}} allowfullscreen="" loading="lazy"></iframe>
            </div> 
        </>
    )
}

export default Map
