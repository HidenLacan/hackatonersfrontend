import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Nosotros = () => {
  const text = "Conócenos";
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.44 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section className="nosotros py-10" id="nosotros">
      <div className="container p-5">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div className="relative bg-white border shadow-sm rounded-xl">
              <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
              <div className="absolute top-0 start-0 end-0">
                <div className="p-4 md:p-5" data-aos="fade-up" data-aos-duration="2000">
                  <h3 className="text-4xl font-bold mb-4 text-gray-800">
                    Misión
                  </h3>
                  <p className="mt-1 text-gray-800 text-xl">
                    Aplicar técnicas avanzadas de análisis de datos para predecir tendencias y relacionar información relevante.
                    A través de estas acciones, buscamos impulsar el crecimiento y los ingresos de la empresa.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div className="relative bg-white border shadow-sm rounded-xl">
              <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fMHx8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
              <div className="absolute top-0 start-0 end-0">
                <div className="p-4 md:p-5" data-aos="fade-up" data-aos-duration="2000">
                  <h3 className="text-4xl font-bold mb-4 text-gray-800">
                    Visión
                  </h3>
                  <p className="mt-1 text-gray-800 text-xl">
                    Queremos ser líderes en la aplicación de tecnologías de datos para tomar decisiones estratégicas.
                    Visualizamos un futuro donde nuestras soluciones sean fundamentales para el éxito empresarial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div className="relative bg-white border shadow-sm rounded-xl">
              <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fMHx8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
              <div className="absolute top-0 start-0 end-0">
                <div className="p-4 md:p-5" data-aos="fade-up" data-aos-duration="2000">
                  <h3 className="text-4xl font-bold mb-4 text-gray-800">
                    Valores
                  </h3>
                  <p className="mt-1 text-gray-800 text-xl">
                    Innovación, Colaboración, Ética y Compromiso
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Section */}
          <div className="sm:p-10 lg:p-20 md:p-20 col-span-1 md:col-span-3">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={container}
            >
              <motion.div className="text-7xl font-bold text-center p-2">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"
                    variants={child}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
              <iframe
                className="w-full h-56 md:h-[600px] rounded-md"
                src="https://www.youtube.com/embed/yHPmooG2PAE?si=kpo_6-DC1fcF8EF8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
