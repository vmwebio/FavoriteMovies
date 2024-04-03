import { defineStore } from "pinia";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=1deb08b233d87e678ec6b20f99b030db&query=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    movie: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
  },
});
