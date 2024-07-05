import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords = () => {
  const [dataRecords, setDataRecords] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/datarecords/')
      .then(response => {
        setDataRecords(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data Records</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Created At</th>
            <th>JSON Data</th>
          </tr>
        </thead>
        <tbody>
          {dataRecords.map(record => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.created_at}</td>
              <td>{JSON.stringify(record.json_data)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataRecords;
