import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandAdd = () => {

  const [agregar, setAgregar] = useState('')
  const {socket} = useContext(SocketContext)

  const onsubmit = (e)=>{
    e.preventDefault()


    if(agregar.trim().length >0){
  
      socket.emit('crear-banda', {name:agregar})
      console.log(agregar)

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
