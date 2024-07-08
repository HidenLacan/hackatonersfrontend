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
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '60%', height: '60%' }}>
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
          loader={<div>Loading Chart...</div>}
        />
      </div>
    </div>
  );
};

export default MapComponent;
