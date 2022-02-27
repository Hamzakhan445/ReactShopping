import React from 'react'
import Mainheading from '../components/Mainheading'
import Smheader from '../components/Smheader'
import Aboutbox from '../components/Aboutbox'
import Aboutus from '../components/Aboutus'
import About_counter from '../components/About_counter'
const About = () => {
    return (
        <>
        <Smheader smtitle="About Us" smdesc="orem ipsum dolor sit amet,consectetur adipisicing elit. consectetur adipisicing elit. Magni corrupti vel dolorum cum ipsum animi " />

        <div className="container-md mt-5 ">

          <div className="about_us text-center w-100 mx-auto">
          <Mainheading headingtext="Welcome To Our Store" />
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud  </p>
            </div>

            <div className="row mt-5 ">
                <Aboutbox abtitle="Our Vision" abdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. U " />
                <Aboutbox abtitle="Our Mission" abdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. U " />
                <Aboutbox abtitle="Our Goal" abdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. U " />
            </div>

            <Aboutus />           
            </div>
            <About_counter />


        </>
    )
}

export default About
