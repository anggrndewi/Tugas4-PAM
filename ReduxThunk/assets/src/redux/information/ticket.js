import { createSlice } from '@reduxjs/toolkit'

const ticketInit = {
    location: "",
    destination: "",
    date: ""
}

export const ticket = createSlice({
    name: "ticket",
    initialState: {...ticketInit},
    reducers: {
        setForm: (state, action) => {
            const {key, value} = action.payload
            state[key] = value
        },

        clearForm: (state) => {
            state.location = ''
            state.destination = ''
            state.date = ''
        }
    }
})

export const { setForm, clearForm } = ticket.actions
export default ticket.reducer;