import React from 'react';

const Nosotros = () => {
  return (
    <section className="nosotros" id="nosotros">
      <h2 data-aos="fade-up" data-aos-duration="2000" className="mision__title">Misión</h2>
      <p data-aos="fade-up" data-aos-duration="2000" className="mision__subtitle">
        Aplicar técnicas avanzadas de análisis de datos para predecir tendencias y relacionar información relevante.
        A través de estas acciones, buscamos impulsar el crecimiento y los ingresos de la empresa.
      </p>

      <h2 data-aos="fade-up" data-aos-duration="2000" className="vision__title">Visión</h2>
      <p data-aos="fade-up" data-aos-duration="2000" className="vision__subtitle">
        Queremos ser líderes en la aplicación de tecnologías de datos para tomar decisiones estratégicas.
        Visualizamos un futuro donde nuestras soluciones sean fundamentales para el éxito empresarial.
      </p>

      <h2 data-aos="fade-up" data-aos-duration="2000" className="vision__title">Valores</h2>
      <p  data-aos="fade-up" data-aos-duration="2000"className="vision__subtitle"> Innovación, Colaboración, Ética y Compromiso </p>
      
      <div data-aos="fade-up" data-aos-duration="2000" className="content__video-item">
        <iframe
          className="content__video-item_size"
          src="https://www.youtube.com/embed/yHPmooG2PAE?si=kpo_6-DC1fcF8EF8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};

export default Nosotros;
