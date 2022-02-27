import React, {useState} from 'react'
import $ from 'jquery'
import Comment from './Comment'
import Reviewbox from './Reviewbox'
const Product_desc = () => {

    const [count, setCount] = useState(1);

    const tabs = (index) =>{
         setCount(index);
    }
    
    return (
        <>
            <div className="pinfo">
            <h6 className={count === 1 ? 'active_btn activetab' : 'btnn' }  onClick={(e) => tabs(1) } > Description    </h6>
                    <h6 className={count === 2 ? 'active_btn activetab' : 'btnn' } onClick={(e) => tabs(2) }> Additional Information  </h6>
                    <h6 className={count == 3 ? 'active_btn activetab' : 'btnn' } onClick={(e) => tabs(3) }>  Reviews <span> (2) </span>    </h6>
                </div>

                <div className='box'>
                  
                    <div className={count === 1 ? 'active-content' : 'content' }>
                        <p>  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                    </div>

                    <div className={count === 2 ? 'active-content mt-4 ' : 'content' }>
                        <li> <b> Weight : </b> <span style={{paddingLeft:"30px"}}> 23KG </span> </li>
                        <li> <b> Dimensions : </b> <span style={{paddingLeft:"30px"}}> 10 x 10 x 15 cm </span> </li>
                        <li> <b> Materials : </b> <span style={{paddingLeft:"30px"}}>  60% cotton, 40% polyester </span> </li>
                        <li> <b> Other Info : </b> <span style={{paddingLeft:"30px"}}> heirloom jean shorts pug seitan letterpress </span> </li>
                    </div>

                    <div className={count ===3 ? 'active-content mt-4' : 'content'}>
                        <div className="row justify-content-between ">
                            <div className="col-lg-6">
                                <Comment />
                            </div>
                            <div className="col-lg-4">
                            <div className=''>
                                <Reviewbox />
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
        </>
    )
}

export default Product_desc
