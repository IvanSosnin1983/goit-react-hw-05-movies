import axios from 'axios';
const API_KEY = '82661c1ce7c4f41d15c61fe4ef9077eb';
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  // console.log(responce);
  return response;
};

export const fetchMovieId = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesQuery = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response;
};

export const fetchMoviesReview = async movieId => {
  return await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const fetchMoviesCast = async movieId => {
  return await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
};
