import React from 'react';
// import { getPokemonsRequest } from '../src/lib/pokemon-api/requests/get-pokemon-request';
import GlobalStyle from './gobalStyle';

import Contact from './pages/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Pokemons from './pages/Pokemons/index';
import PokemonDetail from './pages/Pokemons/name';

import Home from './pages/home';
import {ThemeContext} from './context/ThemeContext';
import {useTheme} from './hooks/use-theme';

function App() {
  //almacena en el objeto  theme la variable y la funcion que la modifica
  const theme = useTheme();

    return(
      <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemons" element={<Pokemons />} />
              <Route path="/pokemons/:name" element={<PokemonDetail />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
}

export default App;
