import React from 'react';
import './css/index.css';
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Resultados from './components/Resultados';
import Team from './components/Team';
import Footer from './components/Footer';
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
        <Footer />
      </main>
    </div>
  );
}

export default App;


