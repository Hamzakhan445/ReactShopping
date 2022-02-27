import React from 'react'

const Checkout_form = () => {
    return (
        <>

                <div className="row">
                    <div className="col-lg-6">
                    <label className='mb-2' htmlFor="input"> First Name </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-6">
                    <label className='mb-2' htmlFor="input"> Last Name </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-12">
                    <label className='mb-2' htmlFor="input"> Company Name   </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-12">
                    <label className='mb-2' htmlFor="input">  Country   </label>
                    <select className='mb-3 w-100 p-2 '>
                    <option value=""> Select a Country </option>
                        <option value="Pakistan"> Pakistan </option>
                        <option value="Bangladesh"> Bangladesh </option>
                        <option value="UAE"> UAE </option>
                        <option value="Canada"> Canada </option>
                    </select>
                    </div>

                    <div className="col-lg-12">
                    <label className='mb-2' htmlFor="input"> Address     </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-12">
                    <label className='mb-2' htmlFor="input"> Town / City    </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-6">
                    <label className='mb-2' htmlFor="input">    State / Country </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-6">
                    <label className='mb-2' htmlFor="input"> Postcode / Zip </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-6">
                    <label className='mb-2' htmlFor="input">  Phone   </label>
                    <input type="text" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-6">
                    <label className='mb-2' htmlFor="input">  Email Address   </label>
                    <input type="email" className='mb-3 form-control' />
                    </div>

                    <div className="col-lg-12">
                    <label className='mb-2' htmlFor="input">  Additional Information   </label>
                    <textarea className='form-control'  rows="7"></textarea>
                    </div>
                </div>

                    <button type="button" className='mainbtn mt-3'> Submit Now </button>

            
        </>
    )
}

export default Checkout_form
