import { defineStore } from "pinia";

export const useMovieStore = defineStore("MovieStore" , {
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: "Spider Man",
                overview: "Lorem Ipsum",
                poster_path: "",
                release_date: "2002-05-01",
                isWatched: false,
            },
            {
                id: 2,
                original_title: "Batman",
                overview: "Lorem Ipsum",
                poster_path: "",
                release_date: "2022-03-01",
                isWatched: true,
            },
        ],
    }),
});