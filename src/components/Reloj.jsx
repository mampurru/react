/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    // Usamos un efecto para actualizar la hora cada segundo
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatoHora = (date) => {
    const opciones = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return date.toLocaleTimeString('es-ES', opciones);
  };

  return (
    <div className='reloj-container'>
      <h1>Reloj Digital</h1>
      <p>{formatoHora(hora)}</p>
    </div>
  );
}

export default Reloj;
