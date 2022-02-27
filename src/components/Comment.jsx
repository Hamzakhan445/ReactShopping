import React from 'react'

const Comment = () => {
    return (
        <>
          <div className="comment mt-3 w-100 ">
            <div className="com_img">
                <img src="https://flone.reactdemo.hasthemes.com/assets/img/testimonial/1.jpg" alt="" />
            </div>

            <div className="com_info mx-3">
                <h5> White Lewis <span> 
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                     </span> </h5>

                     <p>  cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>

                    <div className="com_btn d-flex justify-content-end ">
                    <button className='mainbtn'>  REPLAY  </button></div>
          
            </div>

            </div>  
        </>
    )
}

export default Comment
