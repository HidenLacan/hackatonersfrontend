
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/styles.css'; // Asegúrate de importar el archivo CSS

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DataRecords4 = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Count',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  });

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/top_10_articulos_por_ganancia/top_10_articulos_por_ganancia.json')
      .then(response => {
        console.log(response.data); // Añadir esta línea para verificar los datos recibidos

        const labels = response.data.map(item => item.DESCRIPTION);
        const counts = response.data.map(item => parseInt(item.TOTAL_REVENUE));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Count',
              data: counts,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1
            }
          ]
        });
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  return (
    <div className="chart-container">
      <Bar data={chartData} options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Top 10 artículos por ganancia'
          }
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'ID Clientes'
            }
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Conteo'
            }
          }
        }
      }} />
    </div>
  );
};

export default DataRecords4;