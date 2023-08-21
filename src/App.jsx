import React, { useEffect, useState } from "react"
import { BandAdd } from "./componentes/BandAdd"
import { BandList } from "./componentes/BandList"


import { useSocket } from "./hooks/useSocket";




function App() {


  const {online,socket} =  useSocket('')
  const [bands, setBands] = useState([])


  useEffect(()=>{
    socket.on('current-band', (bands)=>{

      setBands(bands)
    })

  },[socket])


  const votar= (id) =>{

    socket.emit('votar-banda', id )

  }

  const borrarBanda= (id) =>{

    socket.emit('borrar-banda', id )
  }

  const cambiarNombre = (id, name) =>{
    socket.emit('cambiar-nombre', {id, name})
    
  }





  return (
    <div className="container">

      <div className="alert">
        <p>Estado del servicio : { online ? <span className="text-success"> Online</span>:<span className="text-danger"> Offline</span>}
          
        </p>
      </div>

      <h1>Nombre de Bandas</h1>
      <hr/>

      <div className="row">
        <div className="col-8">
          <BandList data={bands} votar={votar} borrarBanda={borrarBanda} cambiarNombre={cambiarNombre}></BandList>
        </div>

        <div className="col-4">
          <BandAdd></BandAdd>
        </div>
      </div>




    </div>
  )
}

export default App
