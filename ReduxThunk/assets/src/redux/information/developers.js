import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Dewi Anggraini",
    nim: 120140149,
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;