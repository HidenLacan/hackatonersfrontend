import React from 'react';

const Team = () => {
  return (
    <section className="person " id="team">

      <div data-aos="fade-up" data-aos-duration="2000" class="text-7xl font-bold text-center  p-2">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
           Equipo
        </span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="person__social">
          <span className="block text-lg font-semibold">Denise</span>
          <div data-aos="fade-up" data-aos-duration="2000" className="person__denise">
            <a href="https://github.com/denisehanono">
              <div className="person__image_denise bg-gray-200 h-32 w-32 mx-auto mb-4 rounded-full"></div>
            </a>
          </div>
        </li>
        <li className="person__social">
          <span className="block text-lg font-semibold">Cecilia</span>
          <div data-aos="fade-up" data-aos-duration="2000" className="person__cecilia">
            <a href="https://github.com/CECILIAM14">
              <div className="person__image_cecilia bg-gray-200 h-32 w-32 mx-auto mb-4 rounded-full"></div>
            </a>
          </div>
        </li>
        <li className="person__social">
          <span className="block text-lg font-semibold">Luis</span>
          <div data-aos="fade-up" data-aos-duration="2000" className="person__luis">
            <a href="https://github.com/HidenLacan">
              <div className="person__image_luis bg-gray-200 h-32 w-32 mx-auto mb-4 rounded-full"></div>
            </a>
          </div>
        </li>
        <li className="person__social">
          <span className="block text-lg font-semibold">Emanuel</span>
          <div data-aos="fade-up" data-aos-duration="2000" className="person__emanuel">
            <a href="https://github.com/EmmanuelPNava">
              <div className="person__image_emanuel bg-gray-200 h-32 w-32 mx-auto mb-4 rounded-full"></div>
            </a>
          </div>
        </li>
        <li className="person__social">
          <span className="block text-lg font-semibold">José</span>
          <div data-aos="fade-up" data-aos-duration="2000" className="person__jose">
            <a href="https://github.com/JosephFaster">
              <div className="person__image_jose bg-gray-200 h-32 w-32 mx-auto mb-4 rounded-full"></div>
            </a>
          </div>
        </li>
        <li className="person__social">
          <span className="block text-lg font-semibold">Santiago</span>
          <div data-aos="fade-up" data-aos-duration="2000" className="person__santiago">
            <a href="https://github.com/santicar1809">
              <div className="person__image_santiago bg-gray-200 h-32 w-32 mx-auto mb-4 rounded-full"></div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Team;
