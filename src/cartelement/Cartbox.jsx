import React,{useEffect,useState} from 'react'
import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa";

const Cartbox = () => {

    
  const [cart, setCart] = useState([]);

  const getcarts  = async () =>{
      const response = await fetch('https://fakestoreapi.com/products/?limit=5');
      const jsonData = await response.json();
      setCart(jsonData);
  }


  useEffect(() =>{
      getcarts(); 
  },[]);

 


    return (
        <>
                        <table className="table mt-5">
  <thead>
    <tr className=''>
       <th>IMAGE</th>
      <th>PRODUCT NAME</th>
      <th>PRICE</th>
      <th>ACTIONS</th>
    </tr>
  </thead>
  <tbody>

  {
    cart.map((resp) =>{
      return(
        <>
        <tr className='cart_row'>
        <td><img src={resp.image} className='cartimg' alt="" /></td>
       <td className='pt-4'> {resp.title}  </td>
       <td className='pt-4'> {resp.price} </td>
       <td className='pt-4 d-flex '> 
      <a href="#" className='nav-link text-dark '> <FaRegEdit/> </a>
      <a href="#" className='nav-link text-dark '> <FaRegTrashAlt/>   </a>
       </td>
     </tr>
        </>
      )
    })
  }


  </tbody>
</table>   
        </>
    )
}

export default Cartbox
