import React from 'react';

import DataRecords1 from './DataRecords1'; 
import DataRecords2 from './DataRecords2'; 
import DataRecords3 from './DataRecords3'; 
import DataRecords4 from './DataRecords4'; 
import DataRecords5 from './DataRecords5';

import DataRecords7 from './DataRecords7';
import MapComponent from './MapComponent'; 


const Resultados = () => {

  const text = "Conócenos";
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.44 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <section className="results py-8" id="results">
    <div className="container align-center mx-auto px-4">
      <h2 data-aos="fade-up" data-aos-duration="2000" className="text-6xl center font-bold mb-6 text-center">Contexto</h2>
      <p data-aos="fade-up" data-aos-duration="2000" className="text-2xl p-6 mb-8 text-center">
        Es fundamental identificar los distintos grupos de clientes para que la empresa pueda optimizar la experiencia y el servicio ofrecido. Esto permitirá mejorar la retención de clientes y maximizar su valor a lo largo del tiempo, además de personalizar las estrategias de marketing.
      </p>

      <div className=" ">
      <h2 data-aos="fade-up" data-aos-duration="2000" className="text-6xl center font-bold  text-center">Contexto del problema</h2>
        <MapComponent />
      
      
      </div>
      
      <p data-aos="fade-up" data-aos-duration="2000" className="person__title text-2xl font-bold text-center">Resultados</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DataRecords1 />
          <p className="text-lg mt-4">
            La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DataRecords2 />
          <p className="text-lg mt-4">
            Distribución de Clientes por Categoría: La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DataRecords3 />
          <p className="text-lg mt-4">
            Top Clientes con Mayores Compras: Esta gráfica destaca a los diez clientes más valiosos por volumen de compras, con el cliente ID 14646 liderando con cerca de 300,000 compras. El análisis de estos datos identifica a nuestros principales generadores de ingresos y guía la creación de estrategias de fidelización. Al enfocar esfuerzos en estos clientes clave, podemos personalizar ofertas y asegurar su satisfacción y lealtad continuas, cruciales para el crecimiento sostenido de la empresa.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DataRecords4 />
          <p className="text-lg mt-4">
            Top 10 Artículos por Ganancia: Esta gráfica destaca los diez artículos que generan más ganancias, con el "REGENCY CAKESTAND 3 TIER" a la cabeza con más de 140,000 unidades vendidas, seguido por el "WHITE HANGING HEART T-LIGHT HOLDER" y el "JUMBO BAG RED RETROSPOT". El análisis de estos productos revela cuáles son los más rentables, lo que es crucial para la optimización de inventarios y la planificación de estrategias de marketing. Esto asegura que se maximicen las ganancias al priorizar y promocionar los artículos con mayor demanda y rentabilidad.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DataRecords5 />
          <p className="text-lg mt-4">
            El análisis del conteo de compras por mes nos permite identificar patrones de comportamiento a lo largo del año. Esto es esencial para planificar estrategias de ventas y marketing, garantizando que estamos alineados con las necesidades y preferencias de nuestros clientes en cada periodo.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DataRecords7 />
          <p className="text-lg mt-4">
            Clientes con Mayores Números de Compras: Esta gráfica destaca a los clientes con el mayor número de compras, subrayando la importancia de la retención. Mantener a estos clientes satisfechos es crucial, ya que su lealtad y frecuencia de compra son fundamentales para el éxito continuo de nuestra empresa.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Resultados;
