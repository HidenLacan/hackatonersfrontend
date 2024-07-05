import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords7 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/clientes_con_mayores_numeros_de_compras/clientes_con_mayores_numeros_de_compras.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Data Records for File 7</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataRecords7;
