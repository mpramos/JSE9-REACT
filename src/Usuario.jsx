import React from 'react'
import { useModo } from './UserProvider'

function Usuario({nombre, apellido}) {
    const {modo,cambiarModo} = useModo()
  return (
   <>
    <div >
        <h1>Theme {modo ==='light' ? 'Claro':'Oscuro'}</h1>
        <button onClick={cambiarModo}>Cambiar Modo</button>
    
        </div>
   <p> {nombre}</p>
   <p> {apellido}</p>
   
   </>
  )
}

export default Usuario