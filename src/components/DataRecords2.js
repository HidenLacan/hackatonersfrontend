import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/media/csv_files/file2.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the JSON data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Data Records for File 2</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataRecords2;
