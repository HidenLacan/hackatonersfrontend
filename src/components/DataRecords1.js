import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords1 = () => {
  const [chartData, setChartData] = useState([
    ['Description', 'Quantity']
  ]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/10_articulos_vendidos/10_articulos_vendidos.json')
      .then(response => {
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.DESCRIPTION, parseInt(item.QUANTITY)]);
        setChartData(prevData => [...prevData, ...data]);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  const options = {
    title: 'Top 10 Artículos Más Vendidos',
    chartArea: { width: '70%' },
    hAxis: {
      title: '',
      minValue: 0,
    },
    vAxis: {
      
    },
    legend: { position: 'none' },
    backgroundColor: '#ffffff', // White background
    colors: ["#1565c0"] , // Blue color
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

export default DataRecords1;
