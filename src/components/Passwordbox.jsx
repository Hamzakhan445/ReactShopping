import React from 'react'

const Passwordbox = () => {
    return (
        <>
            

            <div className="passwordbox w-100 mt-3" >
                <label htmlFor="pwd" className='mb-3' > Password </label>
                <input type="password" id='pwd' className='mb-3 form-control' />

                <label htmlFor="pwd" className='mb-3' > Confirm Password </label>
                <input type="password" id='pwd' className='mb-3 form-control' />

                <input type="submit" className='mainbtn mt-3' value="Change Password"  />
            </div>

        </>
    )
}

export default Passwordbox
