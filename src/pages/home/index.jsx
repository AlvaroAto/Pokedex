import React, { useState, useEffect, useRef } from 'react';
// import { getPokemonsRequest } from '../src/lib/pokemon-api/requests/get-pokemon-request';

//assets
// import logo from './logo.svg';
import buscarGif from '../../assets/images/pokeball_search.gif';
import loadGif from '../../assets/images/pokeball-loading.gif';

//components
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import Paragraph from '../../components/Text/Paragraph/Paragraph';
import HeadingH2 from '../../components/Text/Headings/HeadingH2/HeadinH2';

//containers
import Header from '../../containers/Header/Header';
import Hero from '../../containers/Hero/Hero';
import Section from '../../containers/Section/Section';
import PokemonList from '../../containers/PokemonList/PokemonList';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import MainModal from '../../containers/MainModal/MainModal';
import PageNavigation from '../../containers/PageNavigation/PageNavigation';

//styled components
import HomeContainer from './home-style';

//Hooks
import { useModal } from '../../hooks/use-modal';
import { usePokemons } from '../../services/pokemon/pokemon-services';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';



function Home() {

  const { handleModal, modalOpened } = useModal();
  
  // const [modalOpened, setModalOpened] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  //para solucionar que en la busqueda se mantiene la ultima busqueda y no permite buscar una segunda vez
  // este array es con el que trabajamos y selectedPokemon es sobre el que buscamos(original, que no se modifica)
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  const searchBar = useRef(null);

  const themeValue = useContext(ThemeContext);
  

  //ejemplo de uso de useState para ejecutar funciones al renderizar la pagina
  // const[numerosPokemon, setNumerosPokemon] = useState(0);
  
  // const sumarNumero = (a,b) =>{
    //   return a +b;
    // }
    // useEffect(() => {
      //   const numerosPokemon = sumarNumero(5,7);
      //   setNumerosPokemon(numerosPokemon);
      // },[]);
      // [] -> array de variables, cuyo cambio van a ejecutar esta funci??n. si est?? vacia se ejecuta s??lo en el primer renderizado
      
      //useEffect no se puede ejecutar de forma asincrona pero las de dentro si
      // useEffect(() => {
        //acceder a api con axios (libreria de JS paa acceder a API) [npm install axios]
      //   const getPokemonList = async () =>{
      //     const pokemons = await getPokemonsRequest();
      //     const {results} = await pokemons.data;
      //     setPokemonList(results);
      //   }
      //   getPokemonList();
      // },[]);

  const pokemonService = usePokemons();
  useEffect(() => {
    //acceder a api con axios (libreria de JS paa acceder a API) [npm install axios]
    const getPokemonList = async () =>{
      const pokemons = await pokemonService.getPokemons();
      const response = await pokemons.data;

      setPokemonList(response);
      setSearchedPokemon(response);
    }
    getPokemonList();
  },[]);
    
  const handlePokemon = async (url) => {
    const pokemon = await pokemonService.getPokemon(url);
    const pokemonInfo = await pokemon.data;
    setSelectedPokemon(pokemonInfo);
    handleModal(true)
  };

  const handlePokemonPagination = async (url) =>{
    const pokemon = await pokemonService.getPokemon(url);
    const pokemonInfo = await pokemon.data;
    console.log(pokemonInfo)
    setPokemonList(pokemonInfo);
    setSearchedPokemon(pokemonInfo); 
  }

  const handleSeach = () => {
    // console.log(searchBar.current.value);
    const seachedValue = searchBar.current.value.toLowerCase();
    const filteredPokemon = pokemonList.results.filter(pokemon => pokemon.name.toLowerCase().includes(seachedValue)); 
    setSearchedPokemon(filteredPokemon);
  }

  // const handlePokemonMoves = async (url) => {
  //   const pokemon = await pokemonService.getPokemon(url);
  //   const pokemonInfo = await pokemon.data;
  //   setPokemonMoves(pokemonInfo);
  //   handleModal(true)
  // };
  
  return (
    <HomeContainer theme={themeValue.theme}>
    <Header
      handleTheme={() => themeValue.handleTheme()}
    />
    <Hero height="300px">
      <HeadingH1 
        text = "Pok??dex"
      />
      <Paragraph 
        text = "Consulta el listado de pok??mons"
        color = '#ffffff'
      />
    </Hero> 
    <Section>
      <HeadingH2 text="Pok??mons destacados" />
      {
        pokemonService.loading && <div className="loading"><img src={loadGif} alt=""/></div>
      }
      {
        pokemonService.pokemonListError !== "" && <span>{pokemonService.pokemonListError}</span>
      }
      {/* <span>N??mero de pokemons: {numerosPokemon}</span> */}
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
          searchedPokemon.results && searchedPokemon.results.map((pokemon, index) => {
            // handlePokemon(pokemon.url)
            return (
              <li key={index}>
                <PokemonCard 
                // number={selectedPokemon.id}
                name={pokemon.name} 
                // image={selectedPokemon.sprites.other["official-artwork"].front_default}
                // handleClick = {() => setModalOpened(true)}
                handleClick = {() => handlePokemon(pokemon.url)}
                />
              </li>
            )
          })
        }
      </PokemonList>
      {/* console.log(pokemonList.previus); */}
      
      <PageNavigation
        prevUrl={pokemonList.previous}
        nextUrl={pokemonList.next}
        onClick={(url)=>handlePokemonPagination(url)}
      />
    </Section>
    {
      modalOpened && (
        <MainModal handleClick = {() => handleModal(false)}>
        {
          selectedPokemon.moves.map((pokemon, index) => {
            // handlePokemonMoves(pokemon.move.url);
            // console.log(pokemonMoves);
            // let moves = pokemonMoves.find((el) => {
            //   return el.flavor_text_entries.language.name === 'es'
            // }).flavor_text_entries.flavor_text;
            // console.log(moves);
            // console.log(pokemonMoves.find(el => el.flavor_text_entries.language.name === 'es').flavor_text_entries.flavor_text);
            // console.log(pokemonMoves.find(el => el.flavor_text_entries.language.name === 'es').flavor_text_entries.flavor_text);
            return (
              <li key={index}>                
                ?? {pokemon.move.name}
              </li>
            )
          })
        }          
        </MainModal>
      )
    }
    </HomeContainer>
  );
}

export default Home;
