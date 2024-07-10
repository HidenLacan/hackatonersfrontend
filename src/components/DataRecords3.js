import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords3 = () => {
  const [chartData, setChartData] = useState([
    ['Customer ID', 'Total Revenue']
  ]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/top_10_clientes_con_mayor_compra/top_10_clientes_con_mayor_compra.json')
      .then(response => {
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.CUSTOMER_ID, parseInt(item.TOTAL_REVENUE)]);
        setChartData(prevData => [['Customer ID', 'Total Revenue'], ...data]);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  const options = {
    title: 'Top Clientes con Mayores Compras',
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
        chartType="ColumnChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};

export default DataRecords3;
