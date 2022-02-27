import React  from 'react'
import { Link } from 'react-router-dom'
import { MdSupervisorAccount,MdZoomIn,MdAddShoppingCart} from "react-icons/md";
import $ from 'jquery'
  
const Navbar = () => {

    return (
        <>
           <nav className="navbar navbar-expand-lg   justify-content-between nav_menu">
               
                <Link to="/"> <img src="../images/logo4.png" className='toplogo' /> </Link>

                 <ul className='menubar mt-3'>
                    <li> <Link to="/"> Home </Link>  </li>
                    <li> <Link to="/about"> About </Link>  </li>
                    <li> <Link to="/shop"> Shop </Link>  </li>
                    <li> <Link to="/blog"> Blog </Link>  </li>
                     <li> <Link to="/contact"> Contact </Link>  </li>
                </ul>
              

                <div className="topicons d-flex ">
                 

                <li className='useritem'>
                <Link to="#" className='text-dark px-2' >  <img src="../images/user.png" alt="topicon" />  </Link>
               
                <div className="dropmenu">
                <li className='cartitem'>
                <Link  to="login_register" className='nav-link text-dark px-2' > 
                 Login / Register
                </Link>
                </li>

                <li className='cartitem'>
                <Link  to="/sell" className='nav-link text-dark px-2' > 
                 Sell 
                </Link>
                </li>
                </div>

               
                </li>

                   <li className='cartitem'>
                    <Link to="/cart" className='text-dark px-2' >  <img src="../images/cart.png" alt="topicon" />  </Link>
                    <div className="cartcount">
                       <p> 10 </p>
                    </div>
                    </li>
                    <a href="#" id='menubtn' data-bs-target="#mobdata" data-bs-toggle="collapse"  className='text-dark px-2' >  
                    <img src="../images/menuicon.png" className='menuicon' />  </a>            
                      </div>

                      <div className="mobile_menu collapse" id='mobdata'>
                      <ul className='mobmenu mt-3'>
                     <Link className="nav-link text-dark" to="/"> <li> Home   </li> </Link>
                     <Link className="nav-link text-dark" to="/about">  <li> About    </li> </Link>
                     <Link className="nav-link text-dark" to="/shop">  <li> Shop  </li> </Link>
                     <Link className="nav-link text-dark" to="/blog">  <li> Blog  </li> </Link> 
                     <Link className="nav-link text-dark" to="/contact">   <li> Contact  </li> </Link>
                </ul>
               
                      </div>

               </nav> 
        </>
    )
}

export default Navbar
