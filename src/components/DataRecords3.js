import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/media/csv_files/file3.json')
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

export default DataRecords3;
