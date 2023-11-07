import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleSearchGpt : (state , action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        // addGptMoviesResult: (state , action) => {
        //     const {movieNames , movieResults} = action.payload;
        //     state.movieNames = movieNames;
        //     state.movieResults = movieResults;
        // }
        // addGptMoviesResult: (state , action) => {
        //     state.movieResults = action.payload;
        // },
        // addGptMoviesNames: (state , action) => {
        //     state.movieNames = action.payload;
        // }
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
})

export const {toggleSearchGpt , addGptMovieResult} = GptSlice.actions;

export default GptSlice.reducer;