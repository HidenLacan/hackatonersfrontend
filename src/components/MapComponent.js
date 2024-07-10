import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Region", "Total Revenue"],
  ["United Kingdom", 7010651.814],
  ["Netherlands", 285446.34],
  ["EIRE", 265262.46],
  ["Germany", 228678.4],
  ["France", 200612.19],
  ["Australia", 138453.81],
  ["Spain", 61558.56],
  ["Switzerland", 56443.95],
  ["Belgium", 41196.34],
  ["Sweden", 38367.83],
];

const MapComponent = () => {
  const options = {
    title: 'Total Revenue by Region in Europe',
    region: "150", // Europe
    colorAxis: { colors: ["#1e88e5", "#0d47a1"] }, // Light Purple to Light Blue
    backgroundColor: "#f1f7f9",
    datalessRegionColor: "#f1f7f9", // Fixed typo: changed "##f1f7f9" to "#f1f7f9"
    defaultColor: "#f5f5f5",
  };
  

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-8 p-4 lg:p-8">
      <div className="shadow-lg w-full lg:w-2/3 h-64 lg:h-auto mb-6 lg:mb-0">
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
          loader={<div>Loading Chart...</div>}
        />
      </div>
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h3 className="text-2xl font-bold mb-4">Ingresos totales por país</h3>
        <p className="text-lg">
          Este mapa muestra los ingresos totales generados por diferentes regiones de Europa. El degradado de color del violeta al azul indica los niveles de ingresos, donde el azul representa los ingresos más altos y el violeta los más bajos. Esta visualización ayuda a identificar las regiones clave que contribuyen a los ingresos generales.
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
