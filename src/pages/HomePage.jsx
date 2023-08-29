import React, { useContext} from "react"
import { SocketContext } from "../context/SocketContext";

import { BandAdd } from "../componentes/BandAdd"
import { BandList } from "../componentes/BandList"
import { BandChart } from "../componentes/BandChart";



function HomePage() {


  const {online } = useContext(SocketContext)   
  //const [bands, setBands] = useState([])





  return (
    <div className="container">

      <div className="alert">
        <p>Estado del servicio : { online ? <span className="text-success"> Online</span>:<span className="text-danger"> Offline</span>}
          
        </p>
      </div>

      <h1>Nombre de Bandas</h1>
      <hr/>
      <div className="row">
        <div className="col">
          <BandChart></BandChart>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
         <BandList></BandList>
        </div>

        <div className="col-4">
          <BandAdd></BandAdd>
        </div>
      </div>




    </div>
  )
}

export default HomePage
