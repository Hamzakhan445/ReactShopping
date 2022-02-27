import React from 'react'
import Categorydata from '../products/Categorydata'
import Mainheading from './Mainheading'

const Category = () => {

    var data = Categorydata.map((res, index)=>{
        return(
            <div className="category_box">
                <img src={res.img} alt="" />
                <h5 className='mt-3 text-center'> {res.name} </h5>
            </div>  
        )
    })    

    return (
        <>
            <br/><br/><br/>
            <Mainheading  headingtext="Category" />
           <div className="category_wrapper">
            {data} 
            </div> 
        </>
    )
}

export default Category
