import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords4 = () => {
  const [chartData, setChartData] = useState([
    ['Description', 'Total Revenue']
  ]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/top_10_articulos_por_ganancia/top_10_articulos_por_ganancia.json')
      .then(response => {
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.DESCRIPTION, parseInt(item.TOTAL_REVENUE)]);
        setChartData(prevData => [['Description', 'Total Revenue'], ...data]);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  const options = {
    title: 'Top 10 Artículos por Ganancia',
    pieHole: 0.4, // This makes the pie chart a donut chart
    backgroundColor: '#ffffff', // White background
    colors: [ '#42a5f5', // Light Blue
      '#1e88e5', // Blue
      '#1565c0', // Darker Blue
      '#0d47a1', // Even Darker Blue
      '#2196f3', // Standard Blue
      '#64b5f6', // Medium Light Blue
      '#1976d2', // Dark Blue
      '#90caf9', // Very Light Blue
      '#1565c0', // Medium Dark Blue
      '#0d47a1'  // Very Dark Blue
      ], 
    chartArea: { width: '80%', height: '80%' },
  };

  return (
    <div className="chart-container" style={{ width: '100%', height: '500px' }}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};

export default DataRecords4;
