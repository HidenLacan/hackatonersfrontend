import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/10_articulos_vendidos/10_articulos_vendidos.json')  // URL completa
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Data Records for File 1</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataRecords1;

