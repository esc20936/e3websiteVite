import React from "react";
import "../../dist/output.css";
import Navbar from "../Components/Nav";
import { motion } from "framer-motion";
import camaraImage from "../assets/Images/Camaras/camara.webp";
import { Link } from "react-router-dom";

export default function Camaras() {
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full bg-black h-1/4">
        <h1 className="mb-12 text-3xl font-bold md:text-6xl colorText">
          Cámaras de seguridad
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
              Distribuidores de cámaras certificadas por el gobierno de Estados
              Unidos
            </h1>
            <p className="mt-3 font-normal text-left text-gray-800 text-md md:text-xl">
              Ofrecemos una amplia gama de cámaras de seguridad de la reconocida
              marca Bolide, certificada por el Gobierno de los Estados Unidos.
              Nuestra selección incluye opciones versátiles para satisfacer
              diversas necesidades, desde cámaras con tecnología de
              reconocimiento facial de vanguardia hasta cámaras diseñadas
              especialmente para negocios y vehículos. Estas cámaras garantizan
              una vigilancia eficiente y confiable, brindando tranquilidad y
              protección tanto a nivel personal como empresarial.
              <span className="font-semibold text-black">
                {" "}
                E3 Solutions es distribuidor autorizado de Bolide en
                Guatemala.
              </span>
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-row items-center justify-center mt-10 space-x-4">
              <button

                className="px-6 py-2 text-sm text-black border-2 border-gray-500 border-solid rounded-md "
              >
                <a
                  href="https://drive.google.com/file/d/1mtrdh95-J2UWCsmRK5lNJNKuj5PbrwEk/view"
                  className="font-medium"
                >
                  Ver cámaras
                </a>
              </button>

              <button

                className="px-6 py-2 text-sm text-white bg-blue-600 border-2 border-blue-600 border-solid rounded-md "
                >
                    Contáctanos
                </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 w-full text-center md:w-1/2 ">
            <aside className="flex flex-col items-center justify-center flex-1 w-3/4 my-8 md:w-3/4 md:mt-0 ">
              <img
                src={camaraImage}
                alt="Hero"
                className="transition duration-500 ease-in-out transform rounded-lg"
              />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
