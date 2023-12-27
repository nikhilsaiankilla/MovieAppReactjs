import axios from "axios";

const BASE_URL = "https://www.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_KEY;

const API_KEY = "78527589f125b6c653a3ad173dea596d";

const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODUyNzU4OWYxMjViNmM2NTNhM2FkMTczZGVhNTk2ZCIsInN1YiI6IjY0NDk1MWY3NmEyMjI3MDRmOGQxOTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6vKuR85bAQsfAWzfTynm_TerPbUqxidmlH5fRVIxpY",
};

export const fetchDataFromApi = async (url, param) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3${url}`, {
      headers: headers,
      params: param,
    });
    return data;
  } catch (err) {
    return err;
  }
};
