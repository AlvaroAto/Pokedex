import React, { useState, useEffect } from 'react';
// import { getPokemonsRequest } from '../src/lib/pokemon-api/requests/get-pokemon-request';

//assets
// import logo from './logo.svg';

//components
import HeadingH1 from './components/Text/Headings/HeadingH1/HeadingH1';
import Paragraph from './components/Text/Paragraph/Paragraph';
import HeadingH2 from './components/Text/Headings/HeadingH2/HeadinH2';

//containers
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import Section from './containers/Section/Section';
import PokemonList from './containers/PokemonList/PokemonList';
import PokemonCard from './components/PokemonCard/PokemonCard';
import MainModal from './containers/MainModal/MainModal';
import { getPokemonsRequest } from './lib/pokemon-api/requests/get-pokemons-request';
import PageNavegation from './containers/PageNavegation/PageNavegation';

//Hooks
import { useModal } from './hooks/use-modal';
import { usePokemons } from './services/pokemon/pokemon-services';



function App() {

  const { handleModal, modalOpened } = useModal();
  // const [modalOpened, setModalOpened] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const [pokemonMoves, setPokemonMoves] = useState({});
  //ejemplo de uso de useState para ejecutar funciones al renderizar la pagina
  // const[numerosPokemon, setNumerosPokemon] = useState(0);
  
  // const sumarNumero = (a,b) =>{
    //   return a +b;
    // }
    // useEffect(() => {
      //   const numerosPokemon = sumarNumero(5,7);
      //   setNumerosPokemon(numerosPokemon);
      // },[]);
      // [] -> array de variables, cuyo cambio van a ejecutar esta función. si está vacia se ejecuta sólo en el primer renderizado
      
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
      const { results } = await pokemons.data;

      setPokemonList(results);
    }
    getPokemonList();
  },[]);
    
  const handlePokemon = async (url) => {
    const pokemon = await pokemonService.getPokemon(url);
    const pokemonInfo = await pokemon.data;
    setSelectedPokemon(pokemonInfo);
    handleModal(true)
  };

  // const handlePokemonMoves = async (url) => {
  //   const pokemon = await pokemonService.getPokemon(url);
  //   const pokemonInfo = await pokemon.data;
  //   setPokemonMoves(pokemonInfo);
  //   handleModal(true)
  // };
  
  return (
    <>
    <Header />
    <Hero>
      <HeadingH1 
        text = "Pokédex"
        color = '#ffffff'
      />
      <Paragraph 
        text = "Consulta el listado de pokémons"
        color = '#ffffff'
      />
    </Hero> 
    <Section>
      <HeadingH2 text="Listado de Pokémon" />
      {
        pokemonService.loading && <span>Cargando la lista de pokemon...</span>
      }
      {
        pokemonService.pokemonListError !== "" && <span>{pokemonService.pokemonListError}</span>
      }
      {/* <span>Número de pokemons: {numerosPokemon}</span> */}
      <PokemonList>
        {
          pokemonList.map((pokemon, index) => {
            return (
              <li key={index}>
                <PokemonCard 
                // number={handlePokemon(pokemon.url).id}
                name={pokemon.name} 
                // image={handlePokemon(pokemon.url).sprites.other["official-artwork"].front_default}
                // handleClick = {() => setModalOpened(true)}
                handleClick = {() => handlePokemon(pokemon.url)}
                />
              </li>
            )
          })
        }
      </PokemonList>
      {/* console.log(pokemonList.previus); */}
      
      <PageNavegation
        prevUrl={pokemonList.previus}
        nextUrl={pokemonList.next}
      ></PageNavegation>
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

export default App;
