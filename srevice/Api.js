// import axios from "axios";

// const API_KEY = "720883225f3d42058938a01cee5fe1b7";

// export const getNewsByCategory = async (category) => {
//   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
//   const response = await axios.get(url);
//   return response.data.articles;
// };

const API_KEY = "720883225f3d42058938a01cee5fe1b7";
export const getNewsByCategory = async (category) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
};
