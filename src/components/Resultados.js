import React from 'react';
import DataRecords from './DataRecords'; // Asegúrate de tener este componente

const Resultados = () => {
  return (
    <section className="results" id="results">
      <h2 className="results__title">Resultados</h2>
      <div className="results__graphic">
        <img src="images/your_graphic_image.jpg" alt="Aqui esta el grafico" className="results__graphic-image"/>
      </div>
      <p className="results__subtitle">Descripción de los resultados (aquí va una gráfica)</p>
      <DataRecords />
    </section>
  );
};

export default Resultados;
