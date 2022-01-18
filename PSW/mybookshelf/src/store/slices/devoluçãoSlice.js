import {createSlice} from '@reduxjs/toolkit'

function agendarDevoluçãoReducer (livroState, livro) {
    return livro
}

export const devolucaoSlice = createSlice({
    name: "devolução",
    initialState: {},
    reducers: {
        agendarDevolução: (state, action) => agendarDevoluçãoReducer(state, action.payload)
    }
})

export const { agendarDevolução } = devolucaoSlice.actions
export default devolucaoSlice.reducer