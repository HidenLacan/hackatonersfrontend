import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords6 = () => {
  const [chartData, setChartData] = useState([
    ['Category', 'Percentage']
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hackatoners-backend.onrender.com/media/csv_files/clientes_por_categorias/clientes_por_categorias.json');
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.CATEGORY, parseInt(item.PERCENTAGE)]);
        setChartData(prevData => [['Category', 'Percentage'], ...data]);
      } catch (error) {
        console.error("There was an error fetching the JSON data!", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title: 'Porcentaje de clientes por categorías',
    chartArea: { width: '60%' },
    hAxis: {
      title: 'Categorías',
      minValue: 0,
    },
    vAxis: {
      title: 'Porcentaje',
    },
    legend: { position: 'none' },
    backgroundColor: '#ffffff', // White background
    colors: ['#1e88e5'], // Blue color
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

export default DataRecords6;
