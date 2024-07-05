import React from 'react';
import './App.css';
import DataRecords from './components/DataRecords.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSV Data Viewer</h1>
      </header>
      <main>
        <DataRecords />
      </main>
    </div>
  );
}

export default App;


