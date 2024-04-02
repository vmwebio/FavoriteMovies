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
            {
                id: 3,
                original_title: "Robocop",
                overview: "Lorem Ipsum",
                poster_path: "",
                release_date: "1987-05-01",
                isWatched: false,
            },
            {
                id: 4,
                original_title: "Rambo",
                overview: "Lorem Ipsum",
                poster_path: "",
                release_date: "1981-03-01",
                isWatched: true,
            },
        ],
    }),
});