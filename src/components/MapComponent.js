import React, { useEffect } from 'react';
import '../styles/styles.css'; // Asegúrate de importar el archivo CSS

const MapComponent = () => {
  useEffect(() => {
    const handleDataWrapperHeight = (e) => {
      if (e.data["datawrapper-height"]) {
        const iframes = document.querySelectorAll("iframe");
        for (const key in e.data["datawrapper-height"]) {
          iframes.forEach((iframe) => {
            if (iframe.contentWindow === e.source) {
              iframe.style.height = e.data["datawrapper-height"][key] + "px";
            }
          });
        }
      }
    };

    window.addEventListener("message", handleDataWrapperHeight);

    return () => {
      window.removeEventListener("message", handleDataWrapperHeight);
    };
  }, []);

  return (
    <div className="results">
      <p className="results__subtitle">Valores por país</p>
      <div className="results__graphic-image" alt="Mapa de resultados"></div>
      <iframe
        className="results__graphic_map"
        title="Valores por país"
        aria-label="Map"
        id="datawrapper-chart-dVMHP"
        src="https://datawrapper.dwcdn.net/dVMHP/1/"
        scrolling="no"
        frameBorder="0"
        style={{ width: '0', minWidth: '100% !important', border: 'none' }}
        height="366"
        data-external="1"
      ></iframe>
    </div>
  );
};

export default MapComponent;
