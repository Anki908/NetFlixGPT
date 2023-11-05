import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleSearchGpt : (state , action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const {toggleSearchGpt} = GptSlice.actions;

export default GptSlice.reducer;