import React from 'react';

import DataRecords1 from './DataRecords1'; 
import DataRecords2 from './DataRecords2'; 
import DataRecords3 from './DataRecords3'; 
import DataRecords4 from './DataRecords4'; 
import DataRecords5 from './DataRecords5';
// import DataRecords6 from './DataRecords6';
import DataRecords7 from './DataRecords7';

const data = [
  { country: 'United Kingdom', revenue: 7000000 },
  { country: 'United States', revenue: 6000000 },
  { country: 'Canada', revenue: 5500000 },
  { country: 'Brazil', revenue: 5000000 },
  { country: 'Argentina', revenue: 4500000 },
  { country: 'South Africa', revenue: 4000000 },
  { country: 'Australia', revenue: 3500000 },
  { country: 'United Arab Emirates', revenue: 3000000 },
  { country: 'Saudi Arabia', revenue: 2500000 },
  { country: 'France', revenue: 2000000 },
  { country: 'Germany', revenue: 1500000 },
  { country: 'Spain', revenue: 1000000 },
  { country: 'Italy', revenue: 900000 },
  { country: 'Mexico', revenue: 800000 },
  { country: 'Japan', revenue: 700000 },
];

const Resultados = () => {
  return (
    <section className="results" id="results">
      <h2 className="mision__title">Contexto del problema</h2>
      <p className="mision__subtitle">
        Contexto del problema.
        Es fundamental identificar los distintos grupos de clientes para que la empresa pueda optimizar la experiencia y el servicio ofrecido. Esto permitirá mejorar la retención de clientes y maximizar su valor a lo largo del tiempo, además de personalizar las estrategias de marketing.
      </p>

      <h2 className="results__title">Resultados</h2>
      <DataRecords1/>
      <DataRecords2/>
      <DataRecords3/>
      <DataRecords4/>
      <DataRecords5/>
      {/* <DataRecords6/> */}
      <DataRecords7/>
      
    </section>
  );
};

export default Resultados;
