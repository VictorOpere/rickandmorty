import React from 'react'
import Spinner from '../partials/Spinner'
import CharacterItem from './CharacterItem'

function Character({characters, isLoading}) {

    return isLoading ? (<Spinner/>) : (
        <section>
            <div className="container">
                <div className="row">

                    {

                        characters.map( character => 

                            (<CharacterItem key={character.id} character={character} ></CharacterItem>)

                        )
                    }


                </div>

            </div>
            
        </section>
    )
}

export default Character
