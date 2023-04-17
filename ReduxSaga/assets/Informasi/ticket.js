import { createSlice } from '@reduxjs/toolkit'

const ticketInit = {
    lokasi: "",
    tujuan: "",
    tanggal: ""
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
            state.lokasi = ''
            state.tujuan = ''
            state.tanggal = ''
        }
    }
})

export const { setForm, clearForm } = ticket.actions
export default ticket.reducer;