import React from 'react'

const Login_form = () => {
    return (
        <>
             


            <div className="login_form mx-auto mt-3 ">
                <input type="text" placeholder='Username' className='p-3 form-control mb-4'  />
                <input type="password" placeholder='************' className='p-3 form-control mb-4'  />

                <li className='d-flex w-100  align-items-center justify-content-start'>
                 <input type="checkbox" className='custom-checkbox' /> 
                <span className='mx-2'> Remember Me  </span>
                 <span> <a href="#" className='nav-link'> Forgot Password? </a> </span> </li>

                     <input type="submit" value="LOGIN" className="mainbtn mt-3" />

            </div>

             
        </>
    )
}

export default Login_form
