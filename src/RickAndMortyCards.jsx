import React, { useEffect, useState } from 'react'
import './style.css'


const RickAndMortyCards = () => {

    const [characters, setCharacters]= useState([])
    
    useEffect(() => {
        async function fetchCharacters() {
            try {
                const respuesta = await fetch('https://rickandmortyapi.com/api/character')
                const data= await respuesta.json()
                setCharacters(data.results)
            } catch (error) {
                console.log('Error en el fetching de datos : ',error);
            }
        }
      fetchCharacters()
    }, [])
    return (
        <>
            <h1  className='title'> Rick And Morty</h1>
            <div className='container'>
            <div className='cards-container'>
                {characters.map(character =>(
                    <div className='card' key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <div className='card-info'>
                            <h2>{character.name}</h2>
                            <p> Status: {character.status}</p>
                            <p> Species : {character.species}</p>
                            <p> Origin : {character.origin.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default RickAndMortyCards