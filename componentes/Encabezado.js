// IMPORTAR REACT
import React from 'react';

// CREAR LA FUNCION
function Encabezado() {
    // METODO QUE REGRESA EL HTML
    return (
        <>
            <header>
                <h1>
                    OntaMiMascota.com
                </h1>
            </header>
            <nav>
                <link to="/">Inicio</link>
                <link to='/Nosotros'>Nosotros</link>
                <link to='/Categorias'>Categorias</link>
                <link to='/Contactos'>Contactos</link>
            </nav>
        </>
    );
}

// EXPORTACIONES
export default Encabezado;