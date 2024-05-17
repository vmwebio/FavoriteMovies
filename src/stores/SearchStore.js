import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore.js";
import { ref } from "vue";

// URL для поиска фильмов с использованием API TheMovieDB
const url =
  "https://api.themoviedb.org/3/search/movie?api_key=1deb08b233d87e678ec6b20f99b030db&query=";

  // Определяем хранилище "searchStore" с использованием defineStore
  export const useSearchStore = defineStore("searchStore", () => {
    // Инициализация состояния загрузки и списка найденных фильмов
    const loader = ref(false);
    const movies = ref([]);
  
    // Асинхронная функция для получения фильмов по запросу
    const getMovies = async (search) => {
      loader.value = true; // Устанавливаем состояние загрузки
      const res = await fetch(`${url}${search}`); // Выполняем запрос к API
      const data = await res.json(); // Парсим ответ в формате JSON
      movies.value = data.results; // Обновляем состояние списка фильмов
      loader.value = false; // Сбрасываем состояние загрузки
    };
  
    // Функция для добавления фильма в пользовательский список фильмов
    const addToUserMovies = (object) => {
      // Получаем доступ к хранилищу фильмов
      const movieStore = useMovieStore();
      // Добавляем фильм в список с отметкой, что он не просмотрен
      movieStore.movies.push({ ...object, isWatched: false });
      // Устанавливаем активную вкладку на первую
      movieStore.activeTab = 1;
    };
  
    // Возвращаем состояния и методы для использования в компонентах
    return {
      loader,
      movies,
      getMovies,
      addToUserMovies,
    };
  });