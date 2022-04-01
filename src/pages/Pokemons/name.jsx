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
    const [error, setError] = useState("");

    const getPokemonInfo =async (url) => {
        try{
            const pokemonRequest = await pokemonService.getPokemon(url);
            const pokemon = await pokemonRequest.data;
            //añadir propiedades pokemon.propiedad=pokemon.valor;
            setSelectedPokemon(pokemon);
        }catch(error){
            setError("Ooops, something goes wrong...\n"+error);
        }
    };

    useEffect(() => {
        getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    },[]);
    
    if(!selectedPokemon.hasOwnProperty('abilities')){
        return <img src={loadGif} alt="" />
    }

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
                <>
                    <HeadingH2 
                        text = {params.name}
                        color = "red"
                    />
                    {
                        // pokemonService.loading && <img src={loadGif} alt=""/>
                    }
                    {
                        // pokemonService.pokemonListError !== "" && <span>{pokemonService.pokemonListError}</span>
                    }                
                
                <h2>Habilidades</h2>                          
                    {  
                        selectedPokemon.abilities.map((item,index) => {
                            return(
                                <p key={index}>{item.ability.name}</p>
                            );
                        })                          
                    }                    
                </>
            </Section>
        </>
    );
};

export default PokemonDetail;