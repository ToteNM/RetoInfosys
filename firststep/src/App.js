
import './App.css';
import Header from './Components/Header/Header';
import Boton from './Components/Boton/Botton';
import Respuestas from './Components/Respuestas/Respuestas';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Resultados from './Components/Resultados/Resultados';
import Sugerencias from './Components/Sugerencias/Sugerencias';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header/>}></Route>
          <Route path="/resultados" element={<Resultados/>}></Route>
          <Route path="/sugerencias" element={<Sugerencias/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
