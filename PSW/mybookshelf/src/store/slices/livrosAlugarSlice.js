import {createSlice} from '@reduxjs/toolkit'

function livroAlugarReducer (state, livro) {
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