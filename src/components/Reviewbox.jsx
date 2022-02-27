import React from 'react'

const Reviewbox = () => {
    return (
        <>
        <div className="reviewbox">
            <h5>Add a Review</h5>
            <p>Your Rating  <span> <i className='fa fa-star'></i> </span> </p>
        </div>

        <div className="submit_review d-flex ">
            <input type="text" placeholder='Name' className='form-control   mb-3 ' />
            <input type="email" placeholder='Email' className='form-control mx-1   mb-3 ' />
        </div>

        <textarea placeholder='Message' className='form-control mb-3' rows="7"></textarea>
        <input type="submit" value="SUBMIT" className='mainbtn' />
        </>
    )
}

export default Reviewbox
