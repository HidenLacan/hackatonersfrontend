import React from 'react';
import './css/index.css';
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Resultados from './components/Resultados';
import Team from './components/Team';
import Footer from './components/Footer';
// import DataRecords from './components/DataRecords';
// import DataRecords1 from './components/DataRecords1';
// import DataRecords2 from './components/DataRecords2';
// import DataRecords3 from './components/DataRecords3';

function App() {
  return (
    <div className="page">
      
      {/* <main>
        <DataRecords />
      </main> */}
      <Header />
      <main className="main" id="nosotros">
        <Nosotros />
        <Resultados />
        <Team />
        {/* <DataRecords /> */}
        {/* <DataRecords1 /> */}
        {/* <DataRecords2 />
        <DataRecords3 /> */}

        <Footer />
      </main>
    </div>
  );
}

export default App;


