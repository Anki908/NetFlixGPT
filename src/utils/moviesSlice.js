import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayMovies: (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state , action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayMovies , addTrailerVideos } = moviesSlice.actions;
export default moviesSlice.reducer;