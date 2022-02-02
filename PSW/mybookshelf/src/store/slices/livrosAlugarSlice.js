import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const pegarLivros = createAsyncThunk (
    "livroAlugar/pegarLivros", async () => {
        axios.get("http://localhost:3000/livros/alugados")
        .then( response => response.data.livros)
    })

function carregarCatalogoReducer (state, livros) {
        return livros
}   

function livroAlugarReducer (state, livro) {
    axios.post("http://localhost:3000/livros/alugar", { livroID: livro._id})
    .then( (response) => { console.log(response) })
    .catch( (error) => { console.log(error) })
    
    return state.concat(livro)
}

export const livroAlugarSlice = createSlice({
    name: "livroAlugar",
    initialState: [],
    reducers: {
        carregarLivros: (state, action) => carregarCatalogoReducer(state, action.payload),
        livroAlugar: (state, action) => livroAlugarReducer(state, action.payload)
    },
    extraReducers: {
        [pegarLivros.fulfilled]: (state, { payload } ) => {
            state = payload
        }
    }
})

export const { livroAlugar, carregarLivros } = livroAlugarSlice.actions
export default livroAlugarSlice.reducer