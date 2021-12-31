export const API_KEY = process.env.API_KEY;
export const BASE_MOVIE_ENDPOINT = `https://api.themoviedb.org/4/discover/movie?api_key=${API_KEY}&with_genres=`;
export const BASE_IMG_ENDPOINT = "https://image.tmdb.org/t/p/w500";

const trendingEndPoint = `https://api.themoviedb.org/4/trending/all/day?api_key=${API_KEY}&language=en-US`;
const searchMovie =
  "https://api.themoviedb.org/3/search/movie$apiKey&language=en-US&query=";

export const CATEGORIES = [
  {
    title: "Trending",
    url: `${BASE_MOVIE_ENDPOINT}28`,
    genre: "trending",
  },
  {
    title: "Top Rated",
    url: `${BASE_MOVIE_ENDPOINT}18`,
    genre: "top-rated",
  },
  {
    title: "Action",
    url: `${BASE_MOVIE_ENDPOINT}28`,
    genre: "action",
  },
  {
    title: "Comedy",
    url: `${BASE_MOVIE_ENDPOINT}35`,
    genre: "comedy",
  },
  {
    title: "Horror",
    url: `${BASE_MOVIE_ENDPOINT}27`,
    genre: "horror",
  },
  {
    title: "Romance",
    url: `${BASE_MOVIE_ENDPOINT}10749`,
    genre: "romance",
  },
  {
    title: "Documentary",
    url: `${BASE_MOVIE_ENDPOINT}99`,
    genre: "documentary",
  },
  {
    title: "Sci-Fi",
    url: `${BASE_MOVIE_ENDPOINT}878`,
    genre: "sci-fi",
  },
  {
    title: "Animation",
    url: `${BASE_MOVIE_ENDPOINT}16`,
    genre: "animation",
  },
  {
    title: "Adventure",
    url: `${BASE_MOVIE_ENDPOINT}12`,
    genre: "adventure",
  },
  {
    title: "Family",
    url: `${BASE_MOVIE_ENDPOINT}10751`,
    genre: "family",
  },
  {
    title: "Mystery",
    url: `${BASE_MOVIE_ENDPOINT}9648`,
    genre: "mystery",
  },
  {
    title: "Drama",
    url: `${BASE_MOVIE_ENDPOINT}18`,
    genre: "drama",
  },
  {
    title: "History",
    url: `${BASE_MOVIE_ENDPOINT}36`,
    genre: "history",
  },
  {
    title: "War",
    url: `${BASE_MOVIE_ENDPOINT}10752`,
    genre: "war",
  },

  {
    title: "Western",
    url: `${BASE_MOVIE_ENDPOINT}37`,
    genre: "western",
  },
  {
    title: "Musical",
    url: `${BASE_MOVIE_ENDPOINT}10402`,
    genre: "musical",
  },
];
