import axios from "axios";

export const getNextPokemonsRequest = async(url) =>{
    return axios(url,{
        method: 'get'
      });
};