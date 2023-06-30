import React, { useEffect, useState } from "react";
import axios from 'axios';

function Mascota(){
    const [mascotas,setMascotas]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/obtenerMascotas')
        .then(respuesta=>{
            if (respuesta.data.mensaje === 'exitoso') {
                setMascotas(respuesta.data.contenido)
                console.log(respuesta.data.contenido);
            }
        })
        .catch(error=>console.log("error al recuperar datos"));
    });
    return(
        <>
        { mascotas.map((lamascota,index)=>{
            return <h1>(lamascota.nombre) tiene (lamascota.edad) años</h1>
        })}
        </>
    )
}

export default Mascota;
