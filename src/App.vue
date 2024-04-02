<template>
  <main>
    <header>
      <a href="https://vitejs.dev" target="_blank">
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
      <h3>All Movies</h3>
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
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
