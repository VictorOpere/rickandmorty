import React from 'react'
import { Link } from 'react-router-dom'

function CharacterItem({character}) {
    return (
        <section className="col s12 m6 l3">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={character.image} alt={ character.name }/>
                </div>
                <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4"> { character.name } <i class="material-icons right"></i></span>
                        <p><Link to={ character.url}>Learn More</Link></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{ character.name }</span>
                        
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
