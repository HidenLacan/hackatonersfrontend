import React from 'react';

const Team = () => {
  return (
    <section className="person" id="team">
      <p data-aos="fade-up" data-aos-duration="2000" className="person__title">Nuestro equipo</p>
      <ul>
        <li className="person__social">Denise
          <div data-aos="fade-up" data-aos-duration="2000" className="person__denise">
            <a href="https://github.com/denisehanono">
              <div className="person__image_denise"></div>
            </a>
          </div>
        </li>
        <li className="person__social">Cecilia
          <div data-aos="fade-up" data-aos-duration="2000" className="person__cecilia">
            <a href="https://github.com/CECILIAM14">
              <div className="person__image_cecilia"></div>
            </a>
          </div>
        </li>
        <li className="person__social">Luis
          <div data-aos="fade-up" data-aos-duration="2000" className="person__luis">
            <a href="https://github.com/HidenLacan">
              <div className="person__image_luis"></div>
            </a>
          </div>
        </li>
        <li className="person__social">Emanuel
          <div data-aos="fade-up" data-aos-duration="2000" className="person__emanuel">
            <a href="https://github.com/EmmanuelPNava">
              <div className="person__image_emanuel"></div>
            </a>
          </div>
        </li>
        <li className="person__social">José
          <div data-aos="fade-up" data-aos-duration="2000" className="person__jose">
            <a href="https://github.com/JosephFaster">
              <div className="person__image_jose"></div>
            </a>
          </div>
        </li>
        <li className="person__social">Santiago
          <div data-aos="fade-up" data-aos-duration="2000" className="person__santiago">
            <a href="https://github.com/santicar1809">
              <div className="person__image_santiago"></div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Team;
