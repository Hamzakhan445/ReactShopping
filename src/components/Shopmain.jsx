import React, {useState,useEffect} from 'react'
import Shop_product from '../products/Shop-product'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaRegEye,FaCartPlus,FaRegHeart } from "react-icons/fa";
import $ from 'jquery'
import magnificPopup from 'magnific-popup'

const Shopmain = () => {

    const [shopProduct, setShopProduct] = useState([]);

    const getProducts = async () =>{
         const resp = await fetch('https://fakestoreapi.com/products/');
        const json = await resp.json();
        setShopProduct(json);
        console.log(json);
        }

        useEffect(() =>{
            getProducts();
        },[])


 
    return (
        <>
        <div className="main">

            <div className="product_wrapper">
            {
                shopProduct.map((resp) =>{
                    return(
                        <div className="product_box px-3 " key={resp.id} >
            <img src={resp.image} alt="product img" />
            <td className='pt-3'> Shirts </td>

            <h6>{resp.title} </h6>
            <p> {resp.price} </p>
            <div className="d-flex justify-content-between align-items-center">
          <NavLink  to="/productinfo"><button className="mainbtn"> Shop Now </button> </NavLink> 
           <div className="rating">
           <i className='fa fa-star px-1 text-warning'></i><i className='fa fa-star px-1 text-warning'></i><i className='fa fa-star px-1 text-warning'></i>
           <i className='fa fa-star px-1 text-warning'></i>

           </div>
          </div>
          <div className="poverlay">
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
 
                    )
                })

            }
            </div>
            </div>
            

        </>
    )
}

export default Shopmain
