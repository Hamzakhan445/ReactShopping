import React from 'react'

const Smheader = (smdata) => {
    return (
        <>
         
         <header className='smheader'>
            <div className="smdata">
                <h1> {smdata.smtitle} </h1>
                <p> {smdata.smdesc} </p>
            </div>
            </header>     
        </>
    )
}

export default Smheader
