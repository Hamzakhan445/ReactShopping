import React from 'react'

const Categories = () => {
    return (
        <>
        <h6>Categories</h6>
        <div style={{lineHeight:"40px"}}>
           <input type="checkbox" className='custom-checkbox'/> <span className='px-3'> All Categories </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Fashion </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/> <span className='px-3'> Men  </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Women </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Electronics </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Black Friday </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Cosmetics </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Cakes </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Kids </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Accessories </span> <br/> 
           </div>



           <h6 className='mt-5'>Colors</h6>
        <div style={{lineHeight:"40px"}}>
           <input type="checkbox" className='custom-checkbox'/> <span className='px-3'> All Colors   </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Whit </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/> <span className='px-3'> Black  </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Brown </span> <br/> 
           <input type="checkbox" className='custom-checkbox'/><span className='px-3'> Blue </span> <br/> 
           </div>



           <h6 className='mt-5'>Tags</h6>
            <div className="tags">
                
                <li className='mt-4'> 
                <span className='rounded-pill p-1 '> Men's </span>  
                <span className='mx-3 rounded-pill p-1 '> Women's </span>  
                </li>

                <li className='mt-4'> 
                <span className='rounded-pill p-1 '> Jacket </span>  
                <span className='mx-3 rounded-pill p-1 '> Full Sleeve </span>  
                </li>

                <li className='mt-4'> 
                <span className='rounded-pill p-1 '>Coat </span>  
                <span className='mx-3 rounded-pill p-1 '> Top </span>  
                </li>

                <li className='mt-4'> 
                <span className='rounded-pill p-1 '> Electronics </span>  
                <span className='mx-3 rounded-pill p-1 '>Furniture </span>  
                </li>



            </div>

        </>
    )
}

export default Categories
