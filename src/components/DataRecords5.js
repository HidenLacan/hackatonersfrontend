import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords5 = () => {
  const [chartData, setChartData] = useState([
    ['Month', 'Total Revenue']
  ]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/ganacia_por_mes/ganacia_por_mes.json')
      .then(response => {
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.MONTH, parseInt(item.TOTAL_REVENUE)]);
        setChartData(prevData => [['Month', 'Total Revenue'], ...data]);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  const options = {
    title: 'Ganancia por Mes',
    hAxis: {
      title: 'Mes',
    },
    vAxis: {
      title: '',
    },
    backgroundColor: '#ffffff', // White background
    colors: ['#1e88e5'], // Blue color for the line
    chartArea: { width: '80%', height: '70%' },
  };

  return (
    <div className="chart-container" style={{ width: '100%', height: '500px' }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};

export default DataRecords5;
