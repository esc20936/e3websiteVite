import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../dist/output.css"
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'; // If you're using React Router

interface NavbarProps {
  theme?: "light" | "dark";
}


const Navbar = ( 
  { theme = "light" }: NavbarProps
) => {


  const [isOpen, setIsOpen] = useState(false);

  const bgColor = theme === "light" ? "bg-transparent" : "bg-black";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";

  const bgColorResponsive = theme === "light" ? "bg-white bg-opacity-20" : "bg-black bg-opacity-70";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full z-10 ${bgColor} border-none border-black`}>
      <div className="w-full px-4 border-none sm:px-0 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            {/* <Link to="/" className="text-lg font-bold text-white">
              E3 Solutions
            </Link> */}
          </div>
          <div className="hidden mr-10 md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link
                to="/"
                className={`${textColor} hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Inicio
              </Link>
              <Link
                to="/automatization"
                className={`${textColor} hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Automatización
              </Link>
              <Link
                to="/emotron"
                className={`${textColor} hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium`}
              >
                
                Emotron
              </Link>
              <Link
                to="/camaras"
                className={`${textColor} hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium`}
              >
                CCTV-Cámaras
              </Link>
              <Link
                to="/asesorias"
                className={`${textColor} hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Asesorias
              </Link>
              {/* Add more navigation as as needed */}
            </div>
          </div>
          <div className="block md:hidden">
            <motion.button
              onClick={toggleNavbar}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none ${bgColor} border-none`}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.9 }} // Example of tap animation, adjust as needed
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <motion.svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  initial={{ opacity: 0 }} // Initial state before animation
                  animate={{ opacity: 1 }} // Animation when the button is rendered
                  transition={{ duration: 0.3 }} // Transition duration
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  initial={{ opacity: 0 }} // Initial state before animation
                  animate={{ opacity: 1 }} // Animation when the button is rendered
                  transition={{ duration: 0.3 }} // Transition duration
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`md:hidden absolute w-full z-10 rounded-sm ${bgColorResponsive} backdrop-blur-lg rounded drop-shadow-lg`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

  

              <Link
                to="/"
                className={`${textColor} hover:text-gray-400 block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Inicio
              </Link>

              <Link
                to="/automatization"
                className={`${textColor} hover:text-gray-400 block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Automatización
              </Link>
              <Link
                to="/emotron"
                className={`${textColor} hover:text-gray-400 block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Emotron
              </Link>
              <Link
                to="/camaras"
                className={`${textColor} hover:text-gray-400 block px-3 py-2 rounded-md text-sm font-medium`}
              >
                CCTV-Cámaras
              </Link>
              <Link
                to="/asesorias"
                className={`${textColor} hover:text-gray-400 block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Asesorias
              </Link>
              {/* Add more navigation as as needed */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
