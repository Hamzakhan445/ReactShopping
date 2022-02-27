import React from 'react'
import Mainbtn from './Mainbtn'
import Blogdata from '../products/Blogdata'
import Blogsidebar from './Blogsidebar'
import { FcGoogle,FcGallery,FcShare} from "react-icons/fc";


const Blogbox = () => {

 

        var blogdata = Blogdata.map((res, index)=>{
             return(
                <div className="blog_box">
             <img src={res.img} alt="" />
             <div className="blogdata">
            <p> {res.date} </p>
            <h5> {res.title} </h5>
            <p> {res.desc} </p>

            <div className="blogbtn">
                <Mainbtn btntext="Read More" />
                <div className="blogsocial mt-3 "> 
                    <p className='mt-2'> Share:  </p>
                    <div className="bicons d-flex mt-1  mx-3 align-items-middle  justify-content-between ">
                       <li className='px-2' > <FcGoogle /> </li>
                       <li className='px-2' >  <FcGallery /> </li>
                       <li className='px-2' >   <FcShare /> </li>
                    </div>
                </div>
            </div>
            </div>

         </div>
             )
        })

    return (
        <>
        <div className="blog_section">
          <div className="blog_wrapper">
            {blogdata}
        </div>  

        <Blogsidebar />





        </div>
        </>
    )
}

export default Blogbox
