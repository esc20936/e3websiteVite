import React from "react";
import Navbar from "./Components/Nav";
import { motion } from "framer-motion";
import "../dist/output.css";
import { Link } from "react-router-dom";
export default function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <main className="flex flex-col items-center justify-between min-h-screen aurora">
      <Navbar
        theme="light"
      />

      <div className="flex flex-row items-center justify-center flex-1 w-full text-center">
        {/* left side */}
        <div className="flex flex-col items-center justify-center flex-1 w-1/2 px-20 text-center ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className=""
          >
            <h1 className="text-5xl font-bold md:text-8xl colorText">
              E3 Solutions
            </h1>
            <p className="mt-3 text-xl font-semibold text-blue-900 md:text-2xl">
              Potenciando tu éxito con innovación
            </p>

            <div className="flex flex-row items-center justify-center mt-10 space-x-4">
              <button

                className="px-6 py-2 text-sm text-black duration-300 ease-in-out bg-transparent border-2 border-gray-500 border-solid rounded-md hover:scale-110 transform-gpu animation"
              > 
                <Link to="/contact">
                  
                  Contáctanos
                </Link>
              </button>

            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
