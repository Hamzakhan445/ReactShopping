import React from 'react'
import { NavLink } from 'react-router-dom'

const Dtabs = () => {
    
    return (
        <>
 
        <div className="dashboard_top">
            <div className="tabs"> 
                <button type='button' className='product_btn tabactive mainbtn'> Products </button> 
                 <button type='button' className='order_btn mx-2 mainbtn'> Orders </button> 
                 <button type='button' className='user_btn mx-2 mainbtn'> Users </button> 
                 <button type='button' className='bid_btn mx-2 mainbtn'> Biding </button> 
            </div>

            <div className="userprofile">
                <div className="userinfo">
                    <img src="../images/user.png" className='userimg' alt="" />
                   
                    <div className="userdata">
                        <li className='menuitem' id='profile_btn'  >  Hamza khan <span className='dropdown-toggle'></span> 
                        <div className="profile_dropdown">
                            <NavLink to="/" className="nav-link text-dark" ><li> Profile </li> </NavLink>
                            <NavLink to="/" className="nav-link text-dark" ><li> Setting </li> </NavLink>
                            <NavLink to="/" className="nav-link text-dark" ><li> Privacy </li> </NavLink>
                            <NavLink to="/login_register" className="nav-link text-dark" ><li> Log out </li> </NavLink>
                        </div>
                         </li>
                      
                     </div>
               
                        

                </div>
            </div>

            </div>
        </>
    )
}

export default Dtabs
