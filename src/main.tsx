import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Emotron from "./pages/emotron.tsx";
import Contact from './pages/contact.tsx';
import Automatization from './pages/automatization.tsx';
import Camaras from './pages/camaras.tsx';
import Asesorias from './pages/asesorias.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/emotron" element={<Emotron />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/automatization" element={<Automatization />} />
        <Route path="/camaras" element={<Camaras />} />
        <Route path="/asesorias" element={<Asesorias />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
