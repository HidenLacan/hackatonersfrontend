import React from 'react';

import DataRecords1 from './DataRecords1'; 
import DataRecords2 from './DataRecords2'; 
import DataRecords3 from './DataRecords3'; 
import DataRecords4 from './DataRecords4'; 
import DataRecords5 from './DataRecords5';

import DataRecords7 from './DataRecords7';
import MapComponent from './MapComponent'; 

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
        <p>La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.</p>
      <DataRecords2/>
        <p>Distribución de Clientes por Categoría
        La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.</p>
      <DataRecords3/>
        <p>Top Clientes con Mayores Compras
        Esta gráfica destaca a los diez clientes más valiosos por volumen de compras, con el cliente ID 14646 liderando con cerca de 300,000 compras.</p>
        <p>El análisis de estos datos identifica a nuestros principales generadores de ingresos y guía la creación de estrategias de fidelización. Al enfocar esfuerzos en estos clientes clave, podemos personalizar ofertas y asegurar su satisfacción y lealtad continuas, cruciales para el crecimiento sostenido de la empresa.</p> 
      <DataRecords4/>
        <p></p> 
      <DataRecords5/>
        <p></p>
      <DataRecords7/>
        <p></p>
        <MapComponent/>
    </section>
  );
};

export default Resultados;
