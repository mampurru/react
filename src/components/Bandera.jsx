/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Bandera(props){
    const [imageName, setImageName] = useState("bandera.jpg"); // Imagen predeterminada
    const imageNamesList = ["colombia.jpg","bolivia.jpg","brazil.jpg","ecuador.jpg","myanmar.jpg","venezuela.jpg","paraguay.jpg","argentina.jpg"]; // Agrega aquí los nombres de tus imágenes

    const ChangeImage = () => {
        const newImageName = prompt("Ingrese el nombre de la nueva imagen:");
        if (newImageName && imageNamesList.includes(newImageName)) {
          setImageName(newImageName);
        } else {
          alert("Nombre de imagen no válido.");
        }
    };

    const returnImage = () => {
        setImageName("bandera.jpg");
    };

    return (
        <>
          <h1>{props.Appname}</h1>
          <img src={`/imagenes/${imageName}`} alt={imageName} />
          <div>
          <button onClick={ChangeImage}>Cambiar Imagen</button>
          <button onClick={returnImage}>Return Image</button>
          </div>
         
        </>
    )
}

export default Bandera;
