// 1
import React from "react";
import Encabezado from "../componentes/Encabezado";

//2
function Nosotros() {
    // METODO QUE REGRESA EL HTML
    return (
        <>
            <Encabezado />
            <div className="container">
                <h1>
                    Nosotros                
                </h1>
            </div>
        </>
    )
}

export default Nosotros;