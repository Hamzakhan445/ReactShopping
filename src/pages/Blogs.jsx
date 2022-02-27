import React from 'react'
import Blogbox from '../components/Blogbox'
import Smheader from '../components/Smheader'

const Blogs = () => {
    return (
        <>
    <Smheader smtitle="Our Blog" smdesc="orem ipsum dolor sit amet,consectetur adipisicing elit. consectetur adipisicing elit. Magni corrupti vel dolorum cum ipsum animi " />

        <Blogbox />
        <div className="pagination w-50 mx-auto mt-5 ">
            <button type='button' className='btn btn-outline-dark rounded-pill mx-2 '> 1 </button>
            <button type='button' className='btn btn-outline-dark rounded-pill mx-2 '> 2 </button>
            <button type='button' className='btn btn-outline-dark rounded-pill mx-2 '> 3 </button>
            <button type='button' className='btn btn-outline-dark rounded-pill mx-2 '> 4 </button>
        </div>
        </>
    )
}

export default Blogs
