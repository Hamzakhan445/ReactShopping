import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className='footer'>
 	<div className="container-md">
  <div className="row align-items-center justify-content-between">
 
  <div className="col-lg-3 col-11 mx-auto col-sm-10 col-md-3 p-3" data-aos="fade-up" data-aos-once="true" data-aos-duration= "1600" >
  <Link to="/"> <img src="../images/logo4.png" className='toplogo' /> </Link>
  <p className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
  </div>			

		<div className="col-lg-2 col-5 col-sm-3 mx-auto col-md-2  p-3" data-aos="fade-up" dat-aos-once="true" data-aos-duration= "1600">
		<h3> Shop  </h3>
 		<ul className="navbar-nav">
 		<li> <Link to="/about" className="nav-link text-dark "> About us  </Link> </li>
  		<li> <Link to="/shop" className="nav-link text-dark "> Shop    </Link> </li>
   		<li> <Link to="/blog" className="nav-link text-dark "> Blog    </Link> </li>
 	</ul>
  </div>	


  	<div className="col-lg-2 col-5 col-sm-3 col-md-2 mx-auto p-3"   data-aos="fade-up" dat-aos-once="true" data-aos-duration= "1600">
		<h3> Contact  </h3>
 		<ul className="navbar-nav">
 		<li> <Link to="" className="nav-link text-dark "> FAQ  </Link> </li>
  		<li> <Link to="" className="nav-link text-dark "> Press    </Link> </li>
   		<li> <Link to="" className="nav-link text-dark "> Trips    </Link> </li>
 	</ul>
  </div>	


	<div className="col-lg-4 col-12 col-sm-10   mx-auto p-3"  data-aos="fade-up" dat-aos-once="true" data-aos-duration= "1600">
		
		<div className="btn-group footerbtn">
			<button type="button" className="mx-2" data-toggle="tooltip" data-placement="top" title="Facebook" > <i className="fa fa-facebook"> </i> </button>

			<button type="button" className="mx-2" data-toggle="tooltip" data-placement="top" title="Twitter" > <i className="fa fa-twitter "></i> </button>

			<button type="button" className=" mx-2" data-toggle="tooltip" data-placement="top" title="Youtube" > <i className="fa fa-youtube "></i> </button>
		</div> 

		<h2 className="pt-4 px-3"> Discover Our App </h2>
		<div className="social-img mt-4 d-flex">
		<img src="images/playstore.svg" className="img-fluid w-50 mx-1 "/>
		<img src="images/appstore.svg" className="img-fluid w-50 mx-2 "/>
	</div>
  </div>	


 		</div>
 	</div>

 	 <p className="text-center pt-5 "> All rights are reserved here  </p>

 </footer>
        </>
    )
}

export default Footer
