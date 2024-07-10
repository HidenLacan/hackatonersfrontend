import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords2 = () => {
  const [chartData, setChartData] = useState([
    ['Category', 'Count']
  ]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/clientes_por_categorias/clientes_por_categorias.json')
      .then(response => {
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.CATEGORY, parseInt(item.COUNT)]);
        setChartData(prevData => [['Category', 'Count'], ...data]);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  const options = {
    title: 'Distribución de Clientes por Categorías',
    chartArea: { width: '60%' },
    hAxis: {
      title: '',
      minValue: 0,
    },
    vAxis: {
      title: '',
    },
    legend: { position: 'none' },
    backgroundColor: '#ffffff', // White background
    colors: ['#1565c0'], // Blue color
    bar: { groupWidth: '75%' }, // Bar width
  };

  return (
    <div className="chart-container" style={{ width: '100%', height: '500px' }}>
      <Chart
        chartType="BarChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};

export default DataRecords2;
