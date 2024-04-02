<template>
  <main>
    <header>
      <a href="/" target="_self">
        <img src="/logo.svg" class="logo" alt="Vite logo" />
      </a>
      <h1>Movies Favorite</h1>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]">
        Favorite
      </button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]">
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched Movies</h3>
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <h3>All Movies (count: {{ movieStore.totalCountMovies }})</h3>
      <Movie
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div class="search" v-else>Search</div>
  </main>
</template>

<script setup>
import Movie from "./components/Movie.vue";
import { useMovieStore } from "./stores/MovieStore.js";

const movieStore = useMovieStore();
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1em;
  will-change: filter;
  transition: filter 300ms;  
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo:hover {
  filter: drop-shadow(0 0 2em #9fa3faaa);
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
}
.btn {
  width: 100px;
  height: 40px;
  font-size: 1em;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: darkorange; 
  border: 1px solid transparent;
  transition: border-color 0.25s;
  padding: 0;
}
.btn:hover {
  border-color: lemonchiffon;
}
.btn_green {
  background: green;
}
</style>
