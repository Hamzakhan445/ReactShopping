 import React from 'react'
  import $ from 'jquery'
  import Dtabs from '../Dashboard_content/Dtabs'
import Orders from '../Dashboard_content/Orders'
import Products from '../Dashboard_content/Products'
import Users from '../Dashboard_content/Users'
import Biding from '../Dashboard_content/Biding'
 
 const Dashboard = () => {

    $(document).ready(function(){
         $('.order_btn').click(function(){
                $('.dproducts, .userbox, .bidingbox').hide();
                $('.orderbox').removeAttr('hidden');
                $('.orderbox').show();
                $(this).addClass('tabactive');
                $('.product_btn, .user_btn,  .bid_btn').removeClass('tabactive');
         });

         $('.product_btn').click(function(){
            $('.orderbox, .userbox, .bidingbox').hide();
            $('.dproducts').show();
              $(this).addClass('tabactive');
              $('.user_btn, .order_btn, .bid_btn').removeClass('tabactive');
            });

     $('.user_btn').click(function(){
        $('.orderbox, .dproducts, .bidingbox').hide();
        $('.userbox').show();
        $('.userbox').removeAttr('hidden');
        $(this).addClass('tabactive');
        $('.product_btn,   .order_btn, .bid_btn').removeClass('tabactive');
    });

 
 $('.bid_btn').click(function(){
    $('.orderbox, .dproducts, .userbox').hide();
    $('.bidingbox').show();
    $('.bidingbox').removeAttr('hidden');
    $(this).addClass('tabactive')
    $('.product_btn, .user_btn, .order_btn').removeClass('tabactive');

});

 


 
    })
    
     return (
         <>
             <div className="dashboard  w-100">
             <Dtabs />
            <Orders/>
            <Products />
            <Users />
            <Biding />
        </div>


 
         </>
     )
 }
 
 export default Dashboard
 