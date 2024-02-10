import React from 'react'

const Header = () => {
    let estilos = {border: '1px solid blue', backgroundColor: 'blue'}
  return (
    <header style={estilos}>
          <h1>Bienvenidos a React </h1>
          <h2>Iniciando con React</h2>
          <h3>JavaScript Library</h3>
          <p>React primeros pasos</p>
          <small>Febrero 7, 2024</small>
    </header>
  )
}

export default Header