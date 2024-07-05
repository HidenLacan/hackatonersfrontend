import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://hackatoners-backend.onrender.com/media/csv_files/top_10_articulos_por_ganancia/top_10_articulos_por_ganancia.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Data Records for File 4</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataRecords4;
