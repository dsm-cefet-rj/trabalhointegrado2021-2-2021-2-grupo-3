import {createSlice} from '@reduxjs/toolkit'

function confirmacaoReducer (livroState, livro) {
    return livro
}

export const confirmarAluguel = createSlice({
    name: "confirmacao",
    initialState: {},
    reducers: {
        confirmacao: (state, action) => confirmacaoReducer(state, action.payload)
    }
})

export const { confirmacao } = confirmarAluguel.actions
export default confirmarAluguel.reducer