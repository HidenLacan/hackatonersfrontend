import React from 'react';
import { motion, useAnimation } from 'framer-motion';
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
      <h2 data-aos="fade-up" data-aos-duration="2000"  className="text-6xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">Reto</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }}>
            <div className="relative bg-white border shadow-sm rounded-xl overflow-hidden">
              <img
                className="w-full h-auto rounded-xl"
                src="https://images.unsplash.com/photo-1676430535237-54da81604421?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjB8fHxlbnwwfHx8fHw%3D"
                alt="Image Description"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <div className="p-4 md:p-5" data-aos="fade-up" data-aos-duration="2000">
                  <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Context</h3>
                  <p className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl text-white">
                  El Triple Ten Retail Challenge propone un desafío para identificar las tendencias de los compradores en Europa, con el objetivo de determinar posibles oportunidades de venta. Esto te permitirá generar diversas estrategias de ventas que traduzcan los datos en acciones comerciales concretas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }}>
            <div className="relative bg-white border shadow-sm rounded-xl overflow-hidden">
              <img
                className="w-full h-auto rounded-xl"
                src="https://images.unsplash.com/photo-1676430535246-16f7de3560b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fHw%3D"
                alt="Image Description"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <div className="p-4 md:p-5" data-aos="fade-up" data-aos-duration="2000">
                  <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Objective</h3>
                  <p className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl text-white">
                  Realizar un análisis estadístico utilizando procedimientos como análisis de conjuntos de datos, estadísticas descriptivas, segmentación, predicción, agrupamiento y visualización de datos para llevar a cabo la segmentación de clientes con el fin de generar oportunidades de ventas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className=" ">
          <h2 data-aos="fade-up" data-aos-duration="2000"  className="text-6xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">Resultados</h2>
          <MapComponent data-aos="fade-up" data-aos-duration="2000" />

        </div>

        {/* <p data-aos="fade-up" data-aos-duration="2000" className="person__title text-2xl font-bold text-center">Resultados</p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-20 mb-10">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <DataRecords1 />
            <p className="text-lg mt-4">
              Esta gráfica muestra los diez artículos más vendidos, con 'WORLD WAR 2 GLIDERS' y 'ASSTD DESI...' encabezando la lista con más de 50,000 unidades vendidas. Identificar estos productos puede ayudar a enfocar las estrategias de venta y marketing: Reabastecimiento Continuo.Destacar en la Tienda.Promociones y Descuentos.Productos Complementarios.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <DataRecords2 />
            <p className="text-lg mt-4">
              La gráfica ilustra la distribución de nuestros clientes en diferentes categorías. Observamos una gran cantidad de clientes nuevos, lo que destaca nuestra capacidad de atracción. Sin embargo, también se refleja la importancia de convertir estos nuevos clientes en compradores leales.
              a través de propuestas como lo son: programas de retención, ofertas de bienvenida cuando se registran los usuarios, comunicación continua y feedback de clientes nuevos.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <DataRecords3 />
            <p className="text-lg mt-4">
              Esta gráfica destaca a los diez clientes más valiosos por volumen de compras, con el cliente ID 14646 liderando con cerca de 300,000 compras. El análisis de estos datos identifica a nuestros principales generadores de ingresos y guía la creación de estrategias de fidelización. Al enfocar esfuerzos en estos clientes clave, podemos personalizar ofertas y asegurar su satisfacción y lealtad continuas, cruciales para el crecimiento sostenido de la empresa.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <DataRecords4 />
            <p className="text-lg mt-4">
              Esta gráfica destaca los diez artículos que generan más ganancias, con el 'REGENCY CAKESTAND 3 TIER' a la cabeza con más de 140,000 unidades vendidas, seguido por el 'WHITE HANGING HEART T-LIGHT HOLDER' y el 'JUMBO BAG RED RETROSPOT'. El análisis de estos productos revela cuáles son los más rentables:
              Promoción de Productos Rentables.Paquetes de Productos.Optimización de Inventario.Estrategias de Cross-Selling y Up-Selling"
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <DataRecords5 />
            <p className="text-lg mt-4">
              El análisis del conteo de compras por mes nos permite identificar patrones de comportamiento a lo largo del año. Esto es esencial para planificar estrategias de ventas y marketing, garantizando que estamos alineados con las necesidades y preferencias de nuestros clientes en cada periodo:
              Campañas Estacionales.
              Ajuste de Estrategias de Precios.
              Publicidad Dirigida.
              Promociones Temáticas.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <DataRecords7 />
            <p className="text-lg mt-4">
              Esta gráfica destaca a los clientes con el mayor número de compras, subrayando la importancia de la retención. Mantener a estos clientes satisfechos es crucial, ya que su lealtad y frecuencia de compra son fundamentales para el éxito continuo de nuestra empresa.
              Programas de Lealtad.Descuentos por Frecuencia de Compra.Experiencias Personalizadas.Comunicación y Seguimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
