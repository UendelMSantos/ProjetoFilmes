import axios from 'axios';

// Base da URL : https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=1fbfc44c618e2050563b357497c0e518

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

