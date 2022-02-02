import { createSlice } from '@reduxjs/toolkit'

function carregarCatalogoReducer (state, livros) {
        return livros
}   

function livroAlugarReducer (state, livro) {
    return state.concat(livro) 
}

export const livroAlugarSlice = createSlice({
    name: "livroAlugar",
    initialState: [],
    reducers: {
        carregarLivros: (state, action) => carregarCatalogoReducer(state, action.payload),
        livroAlugar: (state, action) => livroAlugarReducer(state, action.payload)
    }
})

export const { livroAlugar, carregarLivros } = livroAlugarSlice.actions
export default livroAlugarSlice.reducer