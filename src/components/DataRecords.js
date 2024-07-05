import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecords = () => {
  const [dataRecords, setDataRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/datarecords/')
      .then(response => {
        setDataRecords(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Data Records</h1>
      <table border="1">
        <thead>
          <tr>
            
            <th>JSON Data</th>
          </tr>
        </thead>
        <tbody>
          {dataRecords.map(record => (
            <tr key={record.id}>
              
              <td>{JSON.stringify(record.json_data)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataRecords;
