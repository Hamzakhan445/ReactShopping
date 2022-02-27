import React from 'react'
import Mainheading from './Mainheading'
import Mainbtn from '../components/Mainbtn'
const Subscribebox = () => {
    return (
        <>
        <div className="container-fluid subscibe_wrapper">
      <div className="newsbox   mx-auto text-center ">    
        <Mainheading headingtext="Subscribe"/>
      <p>Subscribe to our newsletter to receive news on update</p>
      <input type="text" className='newsinput' placeholder='Your email' />
      <div className="mt-4">
      <Mainbtn btntext="Subscribe Now"/>
      </div>
      </div>
      </div>

        </>
    )
}

export default Subscribebox
