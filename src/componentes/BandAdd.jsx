import React, { useState } from 'react'
import { useSocket } from '../hooks/useSocket'

export const BandAdd = () => {

  const [agregar, setAgregar] = useState('')
  const {socket} = useSocket('')

  const onsubmit = (e)=>{
    e.preventDefault()


    if(agregar.trim().length >0){
  
      socket.emit('crear-banda', agregar)

      setAgregar('')
    }

  }





  return (
   <>
   <h3>Agregar Banda</h3>

   <form onSubmit={ onsubmit }>
    <input className='form-control' placeholder='nuevo nombre de bandas' value={agregar} onChange={(e) => setAgregar(e.target.value)}></input>
   </form>


   </>
  )
}
