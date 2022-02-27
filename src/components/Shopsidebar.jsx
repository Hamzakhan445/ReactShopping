import React from 'react'
import Categories from './Categories'

const Shopsidebar = () => {
    return (
        <>
         <div className="searchbar d-flex ">
             <input type="search" className='form-control' placeholder='Search here ...' />
             <button className='mainbtn w-25'> <i className='fa fa-search'></i> </button>
         </div>

            <div className="category mt-5">
            
            <Categories />
            </div>

        </>
    )
}

export default Shopsidebar
