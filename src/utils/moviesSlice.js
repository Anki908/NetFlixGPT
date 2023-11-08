import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        topMovies: null,
        MovieId: null
    },
    reducers: {
        addNowPlayMovies: (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state , action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state , action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state , action) => {
            state.upcomingMovies = action.payload;
        },
        addTopMovies: (state , action) => {
            state.topMovies = action.payload;
        },
        MovieId: (state , action) => {
            state.MovieId = action.payload;
        }
    }
})

export const { addNowPlayMovies , addTrailerVideos , addPopularMovies , addUpcomingMovies , addTopMovies , MovieId} = moviesSlice.actions;
export default moviesSlice.reducer;