import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration:(state,action)=>{
            state.url = action.payload
        },
        getApiGenres:(state,action)=>{
            state.url = action.payload
        },
    },
});

export const {getApiConfiguration,getApiGenres} = homeSlice.actions;

export default homeSlice.reducer;