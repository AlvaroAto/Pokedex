import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

//assets
import loadGif from '../../assets/images/pokeball-loading.gif';

//components
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import HeadingH2 from '../../components/Text/Headings/HeadingH2/HeadinH2';
// import Paragraph from '../../components/Text/Paragraph/Paragraph';

//containers
import Header from '../../containers/Header/Header';
import Hero from '../../containers/Hero/Hero';
import Section from '../../containers/Section/Section';

//Hooks
import { usePokemons } from '../../services/pokemon/pokemon-services';

const PokemonDetail = () => {
    const params = useParams();
    const pokemonService = usePokemons();
    const [selectedPokemon, setSelectedPokemon] = useState({});
    // const [searchedPokemon, setSearchedPokemon] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        //acceder a api con axios (libreria de JS paa acceder a API) [npm install axios]
        const getPokemonList = async () =>{
        const pokemons = await pokemonService.getPokemons();
        const { results } = await pokemons.data;

        setPokemonList(results);
        //   setSearchedPokemon(results);
        }
        getPokemonList();
      },[]);

    const handlePokemon = async (url) => {
        const pokemon = await pokemonService.getPokemon(url);
        const pokemonInfo = await pokemon.data;
        setSelectedPokemon(pokemonInfo);
    };
    // handlePokemon(params.url);
    return(
        <>
            <Header/>
            <Hero height="">
            <HeadingH1 
                text = {`Datos de ${params.name}`}
                color = '#ffffff'
            />
            </Hero>      
            <Section>
                <HeadingH2 
                    text = {params.name}
                    color = "red"
                />
                {
                    pokemonService.loading && <img src={loadGif} alt=""/>
                }
                {
                    pokemonService.pokemonListError !== "" && <span>{pokemonService.pokemonListError}</span>
                }                
                {
                   
                    <ul>                        
                        <li></li>
                    </ul>
                }
            </Section>
        </>
    );
};

export default PokemonDetail;