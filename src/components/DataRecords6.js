import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/clientes_por_categorias/clientes_por_categorias.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Data Records for File 3</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataRecords6;
