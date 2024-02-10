import React from 'react'

export const Contador = () => {
    let  [count,setCount]= useState(0)
  return (
    <>
            <div>RickAndMortyCards</div>
           <h1>{count}</h1>
           <button onClick={()=>setCount(count+1)}>Aumentar</button>
           <button onClick={()=>setCount(count-1)}>Disminuir</button>
        </>
  )
}
