/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";


function Bandera(props){
    const [imageName, setImageName] = useState("bandera.jpg"); // Imagen predeterminada
    const imageNamesList = ["colombia.jpg","bolivia.jpg","brazil.jpg","ecuador.jpg","myanmar.jpg","venezuela.jpg","paraguay.jpg","argentina.jpg"]; // Agrega aquí los nombres de tus imágenes

    const ChangeImage = () => {
        const newImageName = prompt("⏺ Ingrese el nombre de la bandera: \n\n ¡RECUERDA LA EXTENSIÓN .jpg AL FINAL DEL NOMBRE!");
        if (newImageName && imageNamesList.includes(newImageName)) {
          setImageName(newImageName);
        } else {
          alert("🔴 El nombre de la bandera no está en nuestra base de datos.");
        }
    };

    const returnImage = () => {
        setImageName("bandera.jpg");
    };

    return (
        <>
        <div className="bandera-container">
          <h1>{props.Appname}</h1>
            <img src={`/imagenes/${imageName}`} alt={imageName} className="imagen-tamaño"/>
            <div>
              <button onClick={ChangeImage}>Busca tu bandera</button>
              <button onClick={returnImage}>Reiniciar a ninguna</button>
            </div>

        </div>
        </>
    )
}

export default Bandera;
