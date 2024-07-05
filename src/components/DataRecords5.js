import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/styles.css'; // Asegúrate de importar el archivo CSS

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DataRecords5 = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  });

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/ganacia_por_mes/ganacia_por_mes.json')
      .then(response => {
        console.log(response.data); // Añadir esta línea para verificar los datos recibidos

        const labels = response.data.map(item => item.MONTH);
        const counts = response.data.map(item => parseInt(item.TOTAL_REVENUE));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: '',
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
            display: false,
          },
          title: {
            display: true,
            text: 'Ganancia por mes'
          }
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Mes'
            },
            grid: {
              display: false // Elimina el fondo cuadriculado del eje x
            }
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Conteo'
            },
            grid: {
              display: false // Elimina el fondo cuadriculado del eje y
            }
          }
        }
      }} />
    </div>
  );
};

export default DataRecords5;
