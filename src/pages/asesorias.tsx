import React from "react";
import "../../dist/output.css";
import Navbar from "../Components/Nav.tsx";
import { motion } from "framer-motion";
import camaraImage from "../../public/Images/Camaras/camara.webp";
import { Link, useNavigate } from "react-router-dom";

export default function Asesorias() {
  const navigation = useNavigate();
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full bg-black h-1/4">
        <h1 className="mb-12 text-3xl font-bold md:text-6xl colorText">
          Asesorías
        </h1>
      </div>
      {/* Info section */}
      <div className="flex flex-col items-center justify-center w-full h-auto p-8 bg-slate-100">
        {/* row items */}
        <div className="flex flex-col items-center justify-center w-full h-auto lg:flex-row ">
          {/* left side */}
          <div className="flex flex-col items-start justify-end flex-1 w-full p-4 text-center bg-white rounded-lg md:w-3/6 md:p-20 drop-shadow-lg ">
            {/* why do it with us */}
            <h1 className="text-xl font-bold text-left text-black md:text-3xl">
              Lo que se puede medir se puede mejorar
            </h1>
            <p className="mt-3 font-normal text-left text-gray-800 text-md md:text-xl">
              Como empresa, nos enorgullece ofrecer una amplia gama de servicios
              de asesoría para satisfacer las necesidades de nuestros clientes
              en el área eléctrica, mecánica y control de procesos. Nuestro
              experimentado equipo de expertos está capacitado para brindar
              asesoramiento técnico y soluciones innovadoras en cada uno de
              estos campos. Ya sea que necesite orientación en diseño y
              mantenimiento de sistemas eléctricos, análisis de fallas mecánicas
              o mejora de procesos industriales, estamos comprometidos en
              proporcionar un servicio integral y personalizado. Nuestro
              objetivo es asegurar la eficiencia, la seguridad y el rendimiento
              óptimo de las operaciones de nuestros clientes, trabajando en
              estrecha colaboración con ellos para alcanzar resultados
              excepcionales.
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-col items-center justify-center mt-10 space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-6 py-2 text-sm text-black border-2 border-gray-500 border-solid rounded-md "
                
                  onClick={()=>{
                    navigation("/contact")
                  }}
                >
                  Contáctanos
                </motion.button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
