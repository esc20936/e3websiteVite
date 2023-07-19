import React from "react";
import "../../dist/output.css";
import Navbar from "../Components/Nav";
import { Mail, Facebook, Instagram } from "lucide-react";
import { FacebookIcon } from "lucide-react";

export default function contact() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-black">
      <Navbar theme="dark" />
      <section className="flex flex-col items-center justify-start w-full text-center bg-black h-screen-2/5">
        {/* title container */}
        <div className="flex flex-col items-center justify-end w-full text-center bg-black h-3/5">
          <h1 className="text-3xl font-bold md:text-7xl colorText">
            Contáctanos
          </h1>

          {/* social icons */}
          <div className="flex flex-row items-center justify-center mt-10 space-x-4">
            <a href="https://www.facebook.com/E3SolutionsGT" target="_blank">
              <FacebookIcon size={32} color="white" />
            </a>
            <a href="https://www.instagram.com/e3_solutions/" target="_blank">
              <Instagram size={32} color="white" />
            </a>
            <a href="mailto:eduardo.escobar@e3solutions.com.gt" target="_blank">
              <Mail size={32} color="white" />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start w-full bg-white h-screen-4/5 md:h-screen-3/5">
        <div className="flex flex-col items-center justify-start w-full h-full md:flex-row ">
        <div className="flex flex-col items-start justify-center w-full h-full p-4 text-left bg-slate-600">
            <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
              Servicios
            </h1>
            <p className="text-white">
              Somos una empresa de ingeniería que no solo comercializa productos
              también asesora, instala y entrena a sus clientes en todas sus
              líneas, estamos dedicados a brindar soluciones tecnológicas con
              equipos de última generación, en control industrial,
              automatización, potencia eléctrica y mecánica.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full p-4 text-left bg-blue-700 md:mt-0 ">
            <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
              Teléfonos
            </h1>
            <a className="text-white" href="tel:+50255789040">
              +502 5578 9040
            </a>
            <a className="text-white" href="tel:+50255894503">
              +502 5589 4503
            </a>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full p-4 text-left bg-blue-400 md:mt-0 ">
            <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
              Correos electrónico
            </h1>
            <a
              className="text-white"
              href="mailto:eiceny.sandoval@e3solutions.com.gt"
            >
              eiceny.sandoval@e3solutions.com.gt
            </a>
            <a
              className="text-white"
              href="mailto:eduardo.escobar@e3solutions.com.gt"
            >
              eduardo.escobar@e3solutions.com.gt
            </a>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full p-4 text-left bg-white md:mt-0 ">
            <h1 className="mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              Dirección
            </h1>
            <p className="mb-8 text-gray-700">
              9 calle A 9-34 sector A 10, Cdad. de Guatemala 01057, Guatemala
            </p>
          </div>
         
        </div>
      </section>
    </main>
  );
}
