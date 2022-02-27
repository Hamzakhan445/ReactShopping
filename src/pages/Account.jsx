import React from 'react'
import Smheader from '../components/Smheader'
import Passwordbox from '../components/Passwordbox'
import $ from 'jquery'
const Account = () => {

    $(document).ready(function(){
        $('.passwordbox').hide();

         $('.pass_btn').click(function(){
             $('.passwordbox').show();
             $(this).addClass('active');
             $('.edit_btn').removeClass('active');
             $('.account_box').hide();
         });

         $('.edit_btn').click(function(){
            $('.account_box').show();
            $(this).addClass('active');
            $('.pass_btn').removeClass('active');
            $('.passwordbox').hide();
        });
    });


    return (
        <>
            <div className="container-md w-75 mx-auto m-5 ">
                <h5> Your Persnol Details * </h5> <hr/>

            <div className="row justify-content-between ">
                <div className="col-lg-3  ">
                     <ul style={{lineHeight:"40px"}}>
                    <li className='edit_btn active'> Edit Account </li>
                    <li className='pass_btn'> Change Password </li>
                    </ul>
                </div>

            <div className="col-lg-8 ">
            <div className="row account_box bg-light">
    
    <div className="col-lg-8 mx-auto  text-center p-3 ">
        <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" className='cartimg' alt="" />
    </div>

<div className="col-lg-6">
<label className='mb-2' htmlFor="input"> First Name </label>
    <input type="text" className='form-control mb-3' />
</div>
<div className="col-lg-6">
<label className='mb-2' htmlFor="input"> Last Name </label>
    <input type="text" className='form-control mb-3' />
</div>

<div className="col-lg-12">
<label htmlFor="input"> Email Address   </label>
    <input type="email" className='form-control mb-3' />
</div>

<div className="col-lg-6">
<label className='mb-2' htmlFor="input"> Telephone   </label>
    <input type="text" className='form-control mb-3' />
</div>
<div className="col-lg-6">
<label className='mb-2' htmlFor="input">  Fax   </label>
    <input type="text" className='form-control mb-3' />
</div>

<div className="col-lg-12 d-flex justify-content-end ">
    <input type="submit" value="Continue" className="mainbtn" />
</div>

                </div>

                <Passwordbox/>


            </div>


            </div>
 
            

            </div>



        </>
    )
}

export default Account




 
 
