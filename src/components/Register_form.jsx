import React from 'react'

const Register_form = () => {
    return (
        <>
            <div className="register">

<div className="register_form  mx-auto mt-3 " >
    <input type="text" placeholder='Username' className='p-3 form-control mb-4'  />
    <input type="password" placeholder='Password' className='p-3 form-control mb-4'  />
    <input type="email" placeholder='Email' className='p-3 form-control mb-4'  />

    <div className="buery d-flex justify-content-start w-100 align-items-center ">
   <li> <input type="checkbox" className='custom-checkbox' show /> Buyer </li> 
   <li className="mx-3"> <input type="checkbox" className='custom-checkbox ' /> Seller <br/> </li>
    </div>
 
         <input type="submit" value="REGISTER" className="mainbtn mt-3" />

</div>

 
            </div>
        </>
    )
}

export default Register_form
