import axios from "axios";

export const getPokemonRequest = (url) => {
    return axios(url, {
        method: 'GET'
    });
};