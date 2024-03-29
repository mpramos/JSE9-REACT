import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import { useModo } from './UserProvider'

const RickAndMortyCards = () => {
    const {modo,cambiarModo} = useModo()


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
        <div >
        <h1>Theme {modo ==='light' ? 'Claro':'Oscuro'}</h1>
        <button onClick={cambiarModo}>Cambiar Modo</button>
    
        </div>

            <h1  className='title'> Rick And Morty</h1>
        
        <nav>
            <ul>
                <li>
                    <Link to= '/about/head' >head</Link>
                </li>
            </ul>
        </nav>
        
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