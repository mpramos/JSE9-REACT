import React from 'react'
import Usuario from './Usuario'
const Principal = () => {
    return (
        <main style={{backgroundColor:'green'}}>
            <p>Prerequisitos para iniciar en React:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <Usuario nombre='Juan' apellido = "Ramirez" />
        </main>

    )
}

export default Principal
