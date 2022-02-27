import React, {useState, useEffect}  from 'react'
import Newproduct from '../products/Newproduct'
import Mainheading from './Mainheading'
import { Link } from 'react-router-dom';
import { FaRegEye,FaCartPlus,FaRegHeart } from "react-icons/fa";
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
 
const NProduct = () => {

    
    const [product, setProduct] = useState([]);

        const getProducts  = async () =>{
            const response = await fetch('https://fakestoreapi.com/products/?limit=12');
            const jsonData = await response.json();
            setProduct(jsonData);
        }


        useEffect(() =>{
            getProducts(); 
        },[]);

    $(document).ready(function(){
        $('.popup').magnificPopup({
          type : 'image',
          delegate : '.zoom',
          gallery : {
            enabled:true
          }
        });
     });
 

    return (
        <>
        <div className="nproduct_section">
        <Mainheading headingtext="Latest Products" />
          <div className="nproduct_wrapper popup">
         {
             product.map((resp) =>{
                 return(
                     <>
                     <div className="nproduct_box " key={resp.id}>
                     <img src={resp.image} alt="" /><br/><br/>
                     <div className="desc   p-3 ">
                     <td className=' p-1 '> {resp.category} </td>
                     <h6 className='mt-3'> {resp.title} </h6>
                     <p> $ {resp.price} </p>
                     <div className="d-flex justify-content-between align-items-center">
                    <Link  className='mainbtn nav-link text-white' style={{cursor:"pointer", zIndex:"999"}} to="/productinfo"> Shop Now   </Link> 
                     <div className="rating">
                     <i className='fa fa-star px-1 text-warning'></i><i className='fa fa-star px-1 text-warning'></i><i className='fa fa-star px-1 text-warning'></i>
                     <i className='fa fa-star px-1 text-warning'></i>
                     </div>
                    </div>
                     <div className="npoverlay">
                         <div className="overlay">
                         <a href="#">
                             <div className="overlayicon">
                             <a href={resp.image} className='zoom'> <FaRegEye /> </a>
                            </div>
                            </a>
           
                            <div className="overlayicon">
                                <a href="#">
                             <FaCartPlus /> 
                             </a>
                            </div>
           
           
                            <a href="#">
                            <div className="overlayicon">
                               <FaRegHeart />   
                            </div>
                            </a>
                         </div>
                     </div>
                     </div>
                 </div>
                     </>
                 )
             })
         }  
          </div>  
            </div>
        </>
    )
}

export default NProduct
