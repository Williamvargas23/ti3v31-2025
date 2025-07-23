import React from 'react';

const InscriptionList = ({ inscripciones, talleres }) => {
  if (!inscripciones || inscripciones.length === 0) {
    return <p>No hay inscripciones disponibles.</p>;
  }

  return (
    <ul>
      {inscripciones.map((i, index) => {
        const taller = talleres.find(t => t.id === i.idTaller);

        return (
          <li key={index}>
            {i.nombre} ({i.correo}) - Taller: {taller ? taller.nombre : 'No encontrado'}
          </li>
        );
      })}
    </ul>
  );
};

export default InscriptionList;