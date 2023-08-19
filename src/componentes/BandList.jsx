import React, { useEffect, useState } from 'react'


export const BandList = ({ data, votar, borrarBanda, cambiarNombre }) => {

    const [bands, setBands] = useState(data)

    useEffect( ()=>{
        setBands(data)

    },[data])

    const cambioNombre = (e, id)=>{
        const nuevoNombre = e.target.value
        
        setBands(bands => bands.map(band =>{
            if(band.id === id){
                band.name = nuevoNombre
            }
            return band
        }))
    }

    const onPerdioFoco = (id, name) => {
        cambiarNombre(id, name)
    }
   

    const crearRows = () => {
        return (
            bands.map( band => (
                <tr key={band.id}>
                    <td>
                        <button className='btn btn-primary' onClick={ () => votar( band.id)  }> +1 </button>
                    </td>

                    <td>
                        <input className='form-control' value={band.name} 
                        onChange={(e) => cambioNombre(e, band.id)} 
                        onBlur={() => onPerdioFoco(band.id, band.name)}></input>
                    </td>
                    <td><h3>{band.vote}</h3></td>
                    <td>
                        <button className='btn btn-danger' onClick={()=> borrarBanda (band.id)}>borrar</button>
                    </td>
                </tr>
            ))

        )
    }
    return (
        <>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {crearRows()}
                </tbody>
            </table>

        </>
    )
}
