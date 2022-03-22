import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './gobalStyle';

import Contact from './pages/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Pokemons from './pages/Pokemons/index';
import PokemonDetail from './pages/Pokemons/name';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<PokemonDetail />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
