import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

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
        livroAlugar: (state, action) => livroAlugarReducer(state, action.payload)
    }
})

export const { livroAlugar } = livroAlugarSlice.actions
export default livroAlugarSlice.reducer