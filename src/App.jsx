import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InscriptionList from './components/InscriptionList';
import { talleres, inscripciones } from './data';

const App = () => {
  const [data, setData] = useState({ talleres: [], inscripciones: [] });

  useEffect(() => {
    // Simula que los datos se cargan
    setData({ talleres, inscripciones });
  }, []);

  return (
    <div className="App">
      <Header />
      <h2>Listado de Inscripciones</h2>
      <InscriptionList
        inscripciones={data.inscripciones}
        talleres={data.talleres}
      />
    </div>
  );
};

export default App;