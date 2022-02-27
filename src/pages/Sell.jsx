import React, {useState} from 'react'
import Mainheading from '../components/Mainheading'

const Sell = () =>{

     const [userData, setUserData] = useState({
         name :"",
         price : "",
         category:"",
         desc:"",
     });

     let name, value;

     const postData = (event) =>{
         name = event.target.name;
        value = event.target.value;
        setUserData({...userData, [name]:value})
     };

     const sendData = async (e) =>{
        e.preventDefault();

        const {name,price,category,desc} = userData;

        const res = await fetch('https://reactecommerce-c8e74-default-rtdb.firebaseio.com/userdata.json',{
            method:"POST",
            Headers:{
                "Content-Type": "application/json",
            },
             body:JSON.stringify({
                 name,
                 price,
                 category,
                 desc,
             }),
        });
        if(res){
            setUserData({
                name:"",
                price:"",
                category:"",
                desc:"",
            })
            alert("Product Added");
        }
        else{
            alert("Try Again");
        }
     };
   
     
    return(

            <div className="container-md   mt-5 ">
                <Mainheading headingtext="Add Your Product" />

                <form className='mt-5 sellform' method='POST' >
                    <input type="text" className='mb-3 p-3 form-control' autoComplete='off' onChange={postData} value={userData.name} name="name" placeholder='Product Name *' />
                    <input type="text" className='mb-3 p-3 form-control' autoComplete='off' onChange={postData} value={userData.price} name="price" placeholder='Price *' />
                    <input type="text" className='mb-3 p-3 form-control' autoComplete='off' onChange={postData} value={userData.category} name="category" placeholder='Category *' />
                    <input type="file" className='mb-3 p-3 form-control'  autoComplete='off'/>
                    <textarea autoComplete='off' onChange={postData} value={userData.desc} name="desc" placeholder='Description' rows="7" className='form-control p-3 mb-3'></textarea>

                    <input type="submit" value="Add Product"  className="mainbtn" onClick={sendData} />

                </form>
 
 

            </div>
 
        
    )
}
export default Sell