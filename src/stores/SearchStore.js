import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore.js";
import { ref } from "vue";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=1deb08b233d87e678ec6b20f99b030db&query=";

  export const useSearchStore = defineStore("searchStore", () => {
    const loader = ref(false);
    const movies = ref([]);
  
    const getMovies = async (search) => {
      loader.value = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      movies.value = data.results;
      loader.value = false;
    };
  
    const addToUserMovies = (object) => {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...object, isWatched: false });
      movieStore.activeTab = 1;
    };
  
    return {
      loader,
      movies,
      getMovies,
      addToUserMovies,
    };
  });