import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../partials/Header'
import CharacterGrid from './CharacterGrid'

function Characters() {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const fetchItems = async() => {

            const mycharacters = await axios('https://rickandmortyapi.com/api/character')

            console.log(mycharacters.data.results)

            setCharacters(mycharacters.data.results)
            setIsLoading(false)
            

        }


        fetchItems()
        
        
        
    }, [])

    
    return (
        <div>
            <Header/>

            <CharacterGrid isLoading={isLoading} characters={characters}/>

        </div>
    )
}

export default Characters
