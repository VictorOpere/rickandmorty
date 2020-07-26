import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'


function Header() {

    return (
        <div>

            <nav>
                <div className="nav-wrapper blue grey darken-4">
                    <Link to="/" className="brand-logo center"><img alt="Rick and Morty" src={Logo} className="responsive-img"/></Link>
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">add</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/Links">Link</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Links">Link</Link></li>
            </ul>
            
         
        </div>


    )
}

export default Header
