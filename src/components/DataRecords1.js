import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/styles.css';  // Asegúrate de importar el archivo CSS

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DataRecords1 = () => {
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
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/10_articulos_vendidos/10_articulos_vendidos.json')  // URL completa
      .then(response => {
        console.log(response.data); // Verificar los datos recibidos

        const labels = response.data.map(item => item.DESCRIPTION);
        const values = response.data.map(item => parseInt(item.QUANTITY));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: '',
              data: values,
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
            text: 'Top 10 artículos más vendidos'
          }
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Categories'
            },
            grid: {
              display: false // Elimina el fondo cuadriculado del eje x
            }
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Values'
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

export default DataRecords1;
