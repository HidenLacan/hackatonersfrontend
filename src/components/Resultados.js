import React from 'react';

import DataRecords1 from './DataRecords1'; // Asegúrate de tener este componente
import DataRecords2 from './DataRecords2'; // Asegúrate de tener este componente

const Resultados = () => {
  return (
    <section className="results" id="results">
      <h2 className="results__title">Resultados</h2>
      
      
      <DataRecords1/>
      <DataRecords2/>
      
    </section>
  );
};

export default Resultados;
