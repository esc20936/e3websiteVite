import React from "react";
import Navbar from "../Components/Nav";
import { motion } from "framer-motion";
import emotronImage from "../assets/Images/Emotron/emotron.webp";
import "../../dist/output.css";
import { Link } from "react-router-dom";


export default function Automatization() {
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full bg-black h-1/4">
        <h1 className="mb-12 text-3xl font-bold md:text-6xl colorText">
          Emotron
        </h1>
      </div>
      {/* Info section */}
      <div className="flex flex-col items-center justify-center w-full h-auto p-8 bg-slate-100">
        {/* row items */}
        <div className="flex flex-col items-center justify-center w-full h-auto bg-white rounded-lg lg:flex-row drop-shadow-lg">
          {/* left side */}
          <div className="flex flex-col items-start justify-end flex-1 w-full p-4 text-center md:w-5/6 md:p-20 ">
            {/* why do it with us */}
            <h1 className="text-xl font-bold text-left text-black md:text-3xl">
              ¿Quien es emotron?
            </h1>
            <p className="mt-3 font-normal text-left text-gray-800 text-md md:text-xl">
              Emotron es una empresa europea líder a nivel mundial en la gestión
              y aplicación de energía eléctrica. ofrecen sistemas de
              accionamiento completos basados en una amplia gama de productos
              estándar, como variadores de velocidad y arrancadores progresivos.
              Su tecnología es aplicable a bombas, ventiladores, compresores,
              soplantes, grúas, trituradoras, centrifugadoras, molinos,
              mezcladoras, transportadoras, sierras, ascensores, y muchos otros
              equipos.

              <span
                className="font-semibold text-black"
              > E3 Solutions es el distribuidor autorizado de Emotron en Latinoamérica y el Caribe.</span>
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-row items-center justify-center mt-10 space-x-4">
              <button

                className="px-6 py-2 text-sm text-black duration-300 ease-in-out border-2 border-gray-500 border-solid rounded-md hover:scale-110 transform-gpu animation"
              
                onClick={()=>{
                  window.open("https://www.emotron.es/products/", "_blank")
                }}
              >
                  Ver productos
             
              </button>

              <button

                className="px-6 py-2 text-sm text-white duration-300 ease-in-out bg-blue-600 border-2 border-blue-600 border-solid rounded-md hover:scale-110 transform-gpu animation "
                onClick={()=>{}}
                >
                    Contáctanos
                </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 w-full text-center md:w-1/2 ">
            <aside className="flex flex-col items-center justify-center flex-1 w-3/4 my-8 md:w-3/4 md:mt-0 ">
              <img src={emotronImage} alt="Hero" className="transition duration-75 ease-in-out transform rounded-lg" />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
