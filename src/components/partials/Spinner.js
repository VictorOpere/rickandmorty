import React from 'react'
import Image from '../../img/Spinner.gif'      

function Spinner() {
    return (
        <div className="container center-align">
            <img src={Image} alt="Loading"/>
        </div>
    )
}

export default Spinner
