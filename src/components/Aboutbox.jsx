import React from 'react'

const Aboutbox = (aboutbox) => {
    return (
        <>
          <div className="col-lg-4">
            <h4> {aboutbox.abtitle} </h4>
            <p> {aboutbox.abdesc} </p>
            </div>
        </>
    )
}

export default Aboutbox
