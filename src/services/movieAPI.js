import  axios from 'axios';

const API_KEY = 'dad2725b968ab7e952dfbc80999b3d08';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
        return response.data;
    
} catch (error) {
        console.log(error.message);
}
}

export const fetchMovieById = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchCastById = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
