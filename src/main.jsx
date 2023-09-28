import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//Importamos todas las paginas
import Home from './pages/Home';
import Heroe from './pages/Heroe';
import About from './pages/About';
import NotFound from './pages/NotFound';
//Importamos los 3 componentes necesarios para enrutar la aplicación
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/Heroe" element={<Heroe />} />
            <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)
