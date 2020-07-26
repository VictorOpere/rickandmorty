import React from 'react'
import { Link } from 'react-router-dom'

function CharacterItem({character}) {
    return (
        <section className="col s12 m6 l3">
            <div className="card  z-depth-1 hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={character.image} alt={ character.name }/>
                </div>
                <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4"> { character.name } <i className="material-icons right"></i></span>
                        <Link to="#!" className="waves-effect waves-light activator">Learn More</Link>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{ character.name }</span>
                        
                        <div className="row">

                            <ul className="collection">

                                <li className="collection-item">Status: {character.status}</li>
                                <li className="collection-item">Species: {character.species}</li>
                                <li className="collection-item">Gender: {character.gender}</li>
                                <li className="collection-item">From: {character.location.name}</li>
                                


                            </ul>

                    
                        </div>
                        
                </div>
            </div>
        </section>
    )
}

export default CharacterItem
