import React from 'react';

import DataRecords1 from './DataRecords1'; // Asegúrate de tener este componente
import DataRecords2 from './DataRecords2'; // Asegúrate de tener este componente
import DataRecords3 from './DataRecords3'; // Asegúrate de tener este componente
import DataRecords4 from './DataRecords4'; // Asegúrate de tener este componente
import DataRecords5 from './DataRecords5';
import DataRecords6 from './DataRecords6';
import DataRecords7 from './DataRecords7';


const Resultados = () => {
  return (
    <section className="results" id="results">
      <h2 className="results__title">Resultados</h2>
      <DataRecords1/>
      <DataRecords2/>
      <DataRecords3/>
      <DataRecords4/>
      <DataRecords5/>
      <DataRecords6/>
      <DataRecords7/>
    </section>
  );
};

export default Resultados;
