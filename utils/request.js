const API_KEY = process.env.API_KEY;

const BASE_MOVIE_ENDPOINT = `/discover/movie?api_key=${API_KEY}&with_genre=`;

export default [
  {
    title: "Trending",
    url: `${BASE_MOVIE_ENDPOINT}28`,
    route: "/trending",
  },
  {
    title: "Top Rated",
    url: `${BASE_MOVIE_ENDPOINT}18`,
    route: "/top-rated",
  },
  {
    title: "Action",
    url: `${BASE_MOVIE_ENDPOINT}28`,
    route: "/action",
  },
  {
    title: "Comedy",
    url: `${BASE_MOVIE_ENDPOINT}35`,
    route: "/comedy",
  },
  {
    title: "Horror",
    url: `${BASE_MOVIE_ENDPOINT}27`,
    route: "/horror",
  },
  {
    title: "Romance",
    url: `${BASE_MOVIE_ENDPOINT}10749`,
    route: "/romance",
  },
  {
    title: "Documentary",
    url: `${BASE_MOVIE_ENDPOINT}99`,
    route: "/documentary",
  },
  {
    title: "Sci-Fi",
    url: `${BASE_MOVIE_ENDPOINT}878`,
    route: "/sci-fi",
  },
  {
    title: "Thriller",
    url: `${BASE_MOVIE_ENDPOINT}53`,
    route: "/thriller",
  },
  {
    title: "Animation",
    url: `${BASE_MOVIE_ENDPOINT}16`,
    route: "/animation",
  },
  {
    title: "Adventure",
    url: `${BASE_MOVIE_ENDPOINT}12`,
    route: "/adventure",
  },
  {
    title: "Family",
    url: `${BASE_MOVIE_ENDPOINT}10751`,
    route: "/family",
  },
  {
    title: "Mystery",
    url: `${BASE_MOVIE_ENDPOINT}9648`,
    route: "/mystery",
  },
  {
    title: "Drama",
    url: `${BASE_MOVIE_ENDPOINT}18`,
    route: "/drama",
  },
  {
    title: "History",
    url: `${BASE_MOVIE_ENDPOINT}36`,
    route: "/history",
  },
  {
    title: "War",
    url: `${BASE_MOVIE_ENDPOINT}10752`,
    route: "/war",
  },

  {
    title: "Western",
    url: `${BASE_MOVIE_ENDPOINT}37`,
    route: "/western",
  },
  {
    title: "Musical",
    url: `${BASE_MOVIE_ENDPOINT}10402`,
    route: "/musical",
  },
];
