// 1
import React from "react";
import Encabezado from "../componentes/Encabezado";

//2
function Contactos() {
    // METODO QUE REGRESA EL HTML
    return (
        <>
            <Encabezado/>
            <div className="container">
                <h1>
                    Contacto
                </h1>
            </div>
        </>
    )
}

export default Contactos;