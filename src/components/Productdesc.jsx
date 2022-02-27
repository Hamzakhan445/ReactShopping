import React, {useState, useEffect} from 'react'
import { FaRegStar } from "react-icons/fa";
import Cartbtn from './Cartbtn';
import { Link } from 'react-router-dom';

const Productdesc = () => {

        const [info, setInfo] = useState([]);

            const getInfo = async  () =>{
                 const response = await fetch('https://fakestoreapi.com/products/1');

                 const json = await response.json();
                 setInfo(json);
            }

        useEffect(() => {
            getInfo();
        }, [])
 

    return (
        <>
            <div className="col-lg-5" key={info.id}>
                <h5> {info.title} </h5>
                <p className='display-4 text-danger pprice' style={{fontSize:"24px"}}> {info.price}
                 <span className="text-dark" style={{fontSize:"20px"}} className='psale mx-2'> <del> $66 </del>  </span> </p>
                
                <div className="preview d-flex justify-content-between w-25 ">
                <span className='text-warning'>   <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/> </span> 
                </div>

                <div className="short_desc">
                    <p className='mt-3'> {info.description} </p>
                </div>

                  <Link to="/cart" className="nav-link">  <Cartbtn /> </Link>

                    <p className='pcategories mt-5 '> Categories : <span className='mx-5'> Fashion  | Men </span>  </p>
                  
            </div>
        </>
    )
}

export default Productdesc
