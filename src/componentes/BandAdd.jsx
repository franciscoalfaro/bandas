import React, { useState } from 'react'

export const BandAdd = ({crearBanda}) => {

  const [agregar, setAgregar] = useState('')

  const onsubmit = (e)=>{
    e.preventDefault()
    console.log(agregar)

    if(agregar.trim().length >0){
      crearBanda(agregar)

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
