import React, {useState} from 'react'
import Login_form from '../components/Login_form'
import Register_form from '../components/Register_form'
import $ from 'jquery'

const Login_register = () => {

    const [login, setLogin] = useState(1);

    const loginToggle = (index) =>{
        setLogin(index);
    }

    return (
        <>
          <div className="container-md  loginsection  mt-5 mx-auto p-3 ">
              
            <div className="login w-100  justify-content-center d-flex ">
                <h5 className={login === 1 ? 'login_btn active mx-3' : 'login_btn'} onClick={() => loginToggle(1)} > Login   </h5>
                <span>|</span>
                <h5 className={login === 2 ? 'login_btn active' : 'login_btn'}  onClick={() => loginToggle(2)} > Register </h5>
            </div>

            <div className={login === 1 ? 'logincontent login-active' : 'logincontent' } >
            <Login_form />
            </div>

            <div className={login === 2 ? 'logncontent login-active' : 'logincontent' } >
            <Register_form />
            </div>
            </div>

        </>
    )
}

export default Login_register
