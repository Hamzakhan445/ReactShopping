import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import Featuredata from '../products/Featuredata'
 

const Featurebox = () => {
  
  const [category, setCategory] = useState([]);

  const getProducts  = async () =>{
      const response = await fetch('https://fakestoreapi.com/products/?limit=12');
      const jsonData = await response.json();
      setCategory(jsonData);
  }

  useEffect(() => {
    
    getProducts();

  }, [])
  
  const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        centerPadding: 30,
        slidesToScroll: 1,

        responsive:[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    }


 
    return (
        <>
         <Slider {...settings} >
        {
          category.map((resp) =>{
             return(
               <>
               <div className="item">
            <img src={resp.image} className='img-fluid' alt="" />
            <h5 className='mt-4'> {resp.title} </h5>
         </div>   
               </>
             )
          })
        }
        </Slider>
         </>
    )
}

export default Featurebox
