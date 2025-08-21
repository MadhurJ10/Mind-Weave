import { configureStore } from "@reduxjs/toolkit";
import conceptMapReducer from '../features/conceptMapSlice'

export const store = configureStore({
    reducer: {
        conceptMap: conceptMapReducer,
        // ai: aiReducer,
        // user: userReducer,
    },
})