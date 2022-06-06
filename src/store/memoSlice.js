import { createSlice } from "@reduxjs/toolkit";


const memoSlice = createSlice({
    name: "memo",
    initialState: {
        cards: [],
        selectedCards: []
    },
    reducers: {

    }
})

export default memoSlice
export const memoSliceActions = memoSlice.actions