// 1
import React from "react";
import Encabezado from "../componentes/Encabezado";

//2
function Inicio() {
    // METODO QUE REGRESA EL HTML
    return (
        <>
            <Encabezado/>
            <div className="container">
                <h1>
                    Bienvenidos a nuestro portal
                </h1>
            </div>
        </>
    )
}

export default Inicio;