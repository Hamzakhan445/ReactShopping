import React from 'react'
import Mainbtn from './Mainbtn'
const Blogsidebar = () => {
    return (
        <>
          
        <div className="blog_sidebar">
           <form action="">
               <div className="form-group">
                   <input type="text" placeholder='Search here...' className='form-control' name="" id="" />
                    <div className="mt-4">
                   <Mainbtn btntext="Search" /> </div>
               </div>

            <h5 className='mt-5'>Categories</h5>
            <p className='mt-3'> <input type="checkbox"  /> <span className='mx-2'> Men</span> </p>
            <p className='mt-3'> <input type="checkbox"  /> <span className='mx-2'> Women </span> </p>
            <p className='mt-3'> <input type="checkbox"  /> <span className='mx-2'> Accessories </span> </p>
            <p className='mt-3'> <input type="checkbox"  /> <span className='mx-2'> Life & Health </span> </p>
           </form>

           <h5 className='mt-5'>Tags</h5>

            <div className="tags">
                <td className='bg-light rounded-pill p-2 m-2'> Bags </td>
                <td className='bg-light rounded-pill p-2 m-2'> Electronics </td>
                <td className='bg-light rounded-pill p-2 m-2'> Kids </td>
                <td className='bg-light rounded-pill p-2 m-2'> Bags </td>
            </div>

            <div className="tags">
                <td className='bg-light rounded-pill p-2 m-2'> Clothes </td>
                <td className='bg-light rounded-pill p-2 m-2'> Shirts </td>
                <td className='bg-light rounded-pill p-2 m-2'> Jeans </td>
                <td className='bg-light rounded-pill p-2 m-2'> Shoes </td>
            </div>

            <div className="video">
                
            </div>


        </div>  
        </>
    )
}

export default Blogsidebar
