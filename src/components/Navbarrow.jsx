import React from 'react'

const Navbarrow = () => {
    return (
        <>
         <div className="container-fluid bg-white navbar_row ">
            <div className="row align-items-center justify-content-between ">
                <div className="col-lg-6 col-12   ">
                <ul className='nav toprow mx-4 m-2'>
                <li> <a href="#" className='nav-link text-dark'>  <i className='fa fa-phone'></i> +92 312 1023445   </a> </li>
                <li className='mx-3'> <a href="#" className='nav-link text-dark'> <i className='fa fa-envelope'></i> shop12@gmail.com  </a> </li>
                </ul>
                </div>

                <div className="col-lg-5">
                    <div className="form-group d-flex m-2  ">
                        <input type="search" placeholder='Search here products ...' className='p-2 top_search' />
                        <button type='button' className='mainbtn'> Search </button>
                    </div>
                </div>

             

            </div>
            </div>
        </>
    )
}

export default Navbarrow
