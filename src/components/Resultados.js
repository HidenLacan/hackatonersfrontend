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
        <p className="mision__subtitle">La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.</p>
      <DataRecords2/>
        <p className="mision__subtitle">Distribución de Clientes por Categoría
        La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.</p>
      <DataRecords3 />
        <p className="mision__subtitle">Top Clientes con Mayores Compras
        Esta gráfica destaca a los diez clientes más valiosos por volumen de compras, con el cliente ID 14646 liderando con cerca de 300,000 compras.</p>
        <p className="mision__subtitle">El análisis de estos datos identifica a nuestros principales generadores de ingresos y guía la creación de estrategias de fidelización. Al enfocar esfuerzos en estos clientes clave, podemos personalizar ofertas y asegurar su satisfacción y lealtad continuas, cruciales para el crecimiento sostenido de la empresa.</p> 
      <DataRecords4/>
        <p className="mision__subtitle">Top 10 Artículos por Ganancia
Esta gráfica destaca los diez artículos que generan más ganancias, con el "REGENCY CAKESTAND 3 TIER" a la cabeza con más de 140,000 unidades vendidas, seguido por el "WHITE HANGING HEART T-LIGHT HOLDER" y el "JUMBO BAG RED RETROSPOT".

El análisis de estos productos revela cuáles son los más rentables, lo que es crucial para la optimización de inventarios y la planificación de estrategias de marketing. Esto asegura que se maximicen las ganancias al priorizar y promocionar los artículos con mayor demanda y rentabilidad.</p> 
      <DataRecords5/>
        <p className="mision__subtitle">El análisis del conteo de compras por mes nos permite identificar patrones de comportamiento a lo largo del año. Esto es esencial para planificar estrategias de ventas y marketing, garantizando que estamos alineados con las necesidades y preferencias de nuestros clientes en cada periodo.</p>
      <DataRecords7/>
        <p className="mision__subtitle">Clientes con Mayores Números de Compras
        Esta gráfica destaca a los clientes con el mayor número de compras, subrayando la importancia de la retención. Mantener a estos clientes satisfechos es crucial, ya que su lealtad y frecuencia de compra son fundamentales para el éxito continuo de nuestra empresa.</p>
       
    </section>
  );
};

export default Resultados;
