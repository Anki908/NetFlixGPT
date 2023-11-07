export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmE5OThlYzc5ZDg1ODkwYmQ3YmI5YzgzZjMxZjM5NiIsInN1YiI6IjY1NDRkZTU4Mjg2NmZhMDBlMWVlMGIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6nDZWf43cDSl7JJ7BWfJBt6fJKtduzfUy64TZhjUJ9I",
    }
  };
  export const IMG_CDN = 'https://image.tmdb.org/t/p/w780';

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en" , name: "English" },
    { identifier: "hindi" , name: "Hindi" },
    { identifier: "spanish" , name: "Spanish" },
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;