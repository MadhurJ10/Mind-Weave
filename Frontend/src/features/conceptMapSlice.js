import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    latest: []
}

const conceptMapSlice = createSlice({
    name: "conceptMapSlice",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        addData: (state, action) => {
            state.data = [ ...state.data, action.payload ];
        },
        deleteData: (state, action) => {
            state.data = state.data.filter((item) => item._id !== action.payload);
        },
        setLatest: (state, action) => {
            state.latest = action.payload;
        }
    }
});

export const { setData, addData, deleteData, setLatest } = conceptMapSlice.actions;
export default conceptMapSlice.reducer;