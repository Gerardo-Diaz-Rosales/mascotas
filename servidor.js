import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

// CREAR INSTANCIA DE EXPRESS
const app=express();
app.use(cors());

// CREAR LA CONEXION
const conexion=mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'mascotas'
});

//VERIFICAR LA CONEXION
conexion.connect(function(error){
    if (error) {
        console.log("Error al conectar a la bd")
    }else{
        console.log("Conectado exitosamente")
    }
});

// CONSULTAR LA LISTA DE MASCOTAS
app.get('/obtenerMascotas',(peticion,respuesta)=>{
    const sql="Select * from mascotas";
    conexion.query(sql,(error,resultado)=>{
        if(error) return respuesta.json({mensaje:"error"});
        return respuesta.json({mensaje:"exitoso",contenido:resultado})
    });
});


//INICIAMOS EL SERVIDOR
app.listen(8081,()=>{
console.log("Servidor iniciado");
});