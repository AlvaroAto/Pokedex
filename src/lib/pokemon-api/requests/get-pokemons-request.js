import axios from "axios";

export const getPokemonsRequest = async() =>{
    return axios('https://pokeapi.co/api/v2/pokemon',{
        method: 'get'
      });
};