import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import '../styles/styles.css';  // Ensure you import the CSS file

const DataRecords7 = () => {
  const [chartData, setChartData] = useState([
    ['Customer ID', 'Invoice Count']
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hackatoners-backend.onrender.com/media/csv_files/clientes_con_mayores_numeros_de_compras/clientes_con_mayores_numeros_de_compras.json');
        console.log(response.data); // Verify received data

        const data = response.data.map(item => [item.CUSTOMER_ID, parseInt(item.INVOICE_NO)]);
        setChartData(prevData => [['Customer ID', 'Invoice Count'], ...data]);
      } catch (error) {
        console.error("There was an error fetching the JSON data!", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title: 'Clientes con mayores números de compras',
    chartArea: { width: '60%' },
    hAxis: {
      title: '',
      minValue: 0,
    },
    vAxis: {
      title: 'ID Cliente',
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

export default DataRecords7;
