import React, { useState, useEffect, useRef } from 'react';
// import { getPokemonsRequest } from '../src/lib/pokemon-api/requests/get-pokemon-request';

//assets
// import logo from './logo.svg';
import buscarGif from '../../assets/images/pokeball_search.gif';
import loadGif from '../../assets/images/pokeball-loading.gif';

//components
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
// import Paragraph from '../../components/Text/Paragraph/Paragraph';
import HeadingH2 from '../../components/Text/Headings/HeadingH2/HeadinH2';

//containers
import Header from '../../containers/Header/Header';
import Hero from '../../containers/Hero/Hero';
import Section from '../../containers/Section/Section';
import PokemonList from '../../containers/PokemonList/PokemonList';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import MainModal from '../../containers/MainModal/MainModal';
// import PageNavegation from '../../containers/PageNavegation/PageNavegation';

//Hooks
import { useModal } from '../../hooks/use-modal';
import { usePokemons } from '../../services/pokemon/pokemon-services';


import { Link } from 'react-router-dom';

function Pokemons() {

  const { handleModal, modalOpened } = useModal();
  
  // const [modalOpened, setModalOpened] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  //para solucionar que en la busqueda se mantiene la ultima busqueda y no permite buscar una segunda vez
  // este array es con el que trabajamos y selectedPokemon es sobre el que buscamos(original, que no se modifica)
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  const searchBar = useRef(null);


  const pokemonService = usePokemons();
  useEffect(() => {
    //acceder a api con axios (libreria de JS paa acceder a API) [npm install axios]
    const getPokemonList = async () =>{
      const pokemons = await pokemonService.getPokemons();
      const { results } = await pokemons.data;

      setPokemonList(results);
      setSearchedPokemon(results);
    }
    getPokemonList();
  },[]);
    
  const handlePokemon = async (url) => {
    const pokemon = await pokemonService.getPokemon(url);
    const pokemonInfo = await pokemon.data;
    setSelectedPokemon(pokemonInfo);
    handleModal(true)
  };

  const handleSeach = () => {
    // console.log(searchBar.current.value);
    const seachedValue = searchBar.current.value;
    const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(seachedValue)); 
    setSearchedPokemon(filteredPokemon);
  }

  
  return (
    <>
    <Header />
    <Hero>
      <HeadingH1 
        text = "Todos los pokémons"
        color = '#ffffff'
      />      
    </Hero> 
    <Section>
      <HeadingH2 text="Descubre todos los datos" />
      {
        pokemonService.loading && <img src={loadGif} alt=""/>
      }
      {
        pokemonService.pokemonListError !== "" && <span>{pokemonService.pokemonListError}</span>
      }
      {/* <span>Número de pokemons: {numerosPokemon}</span> */}
      <div className="buscador">
        <input 
          ref={searchBar} 
          type="text" 
          name="" 
          id="" 
          placeholder="Buscar pokemon"
          onChange={(e) => handleSeach(e)}
        />
        <img src={buscarGif} alt="" />
      </div>
      <PokemonList>
        {
          searchedPokemon.map((pokemon, index) => {
            // handlePokemon(pokemon.url)
            return (
              <li key={index}>
                <PokemonCard 
                // number={selectedPokemon.id}
                name={pokemon.name} 
                // image={selectedPokemon.sprites.other["official-artwork"].front_default}
                handleClick = {() => handlePokemon(pokemon.url)}
                // handleClick = {() => setModalOpened(true)}

                >                    
                  <Link to={`/pokemons/${pokemon.name}`}>Ver mas información</Link>
                </PokemonCard>
              </li>
            )
          })
        }
      </PokemonList>
      </Section>
      {
      modalOpened && (
        <MainModal handleClick = {() => handleModal(false)}>
        {
          selectedPokemon.moves.map((pokemon, index) => {
            return (
              <li key={index}>                
                · {pokemon.move.name}
              </li>
            )
          })
        }          
        </MainModal>
      )
    }
    </> 
  );
}

export default Pokemons;
