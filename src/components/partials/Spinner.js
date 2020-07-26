import React from 'react'
import Image from '../../img/Spinner.gif'      

function Spinner() {
    return (
        <div className="container">
            <img src={Image} alt="Loading"/>
        </div>
    )
}

export default Spinner
