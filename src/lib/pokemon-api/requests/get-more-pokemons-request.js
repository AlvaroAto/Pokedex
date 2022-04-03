import axios from "axios";

export const getMorePokemonsRequest = async(url) =>{
    return axios(url,{
        method: 'get'
      });
};