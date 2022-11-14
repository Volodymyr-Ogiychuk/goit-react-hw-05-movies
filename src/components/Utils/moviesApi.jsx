import axios from 'axios';

const API_KEY = "1feb50c2048a08e48eff870c3219db15";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getTrendMovies() {
    return await axios(`trending/movie/week?api_key=${API_KEY}`)
    .then(resp => resp.data.results);
}

export async function getMoviesBySearch(query) {
    return await axios(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`)
    .then(resp => resp.data.results);
}

export async function getMovieDetails(movieId) {
    return await axios(`movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(resp => resp.data);
}

export async function getCasts(movieId) {
    return await axios(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(resp => resp.data);
}

export async function getReviews(movieId) {
    return await axios(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(resp => resp.data.results);
}