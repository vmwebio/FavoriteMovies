import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

// Определяем хранилище "movieStore" с использованием defineStore
export const useMovieStore = defineStore("movieStore", () => {
  // Инициализация состояния списка фильмов и активной вкладки
  const movies = ref([]);
  const activeTab = ref(1);

  // Получаем данные о фильмах из локального хранилища
  const moviesInLocalStorage = localStorage.getItem("movies");
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value;
  }

  // Вычисляемые свойства для списка просмотренных фильмов и общего количества фильмов
  const watchedMovies = computed(() =>
    movies.value.filter((el) => el.isWatched)
  );

  const totalCountMovies = computed(() => movies.value.length);

  // Функция для установки активной вкладки
  const setActiveTab = (id) => {
    activeTab.value = id;
  };
  // Функция для переключения состояния "просмотрено/не просмотрено" для фильма
  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };
  // Функция для удаления фильма из списка по его ID
  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  // Наблюдатель за изменениями списка фильмов, сохраняет изменения в локальное хранилище
  watch(
    () => movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );

  // Возвращаем состояния и методы для использования в компонентах
  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    toggleWatched,
    deleteMovie,
    setActiveTab,
  };
});
