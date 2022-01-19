import {createSlice} from '@reduxjs/toolkit'
import livro3 from '../../img/livro3.jpg'
import livro4 from '../../img/livro4.jpg'

const livrosIniciais = [{
    titulo: "O poder do hábito",
    descricao: "Este livro tem como objetivo descrever...",
    proprietario: "Jorge",
    dataAluguel: "20/06/2021",
    img: livro4
  },{
    titulo: "Código Limpo",
    descricao: "Este livro tem como objetivo descrever...",
    proprietario: "Lucas",
    dataAluguel: "10/05/2021",
    img: livro3
  }]

function cadastrarLivroReducer (state, livro) {
    return state.concat(livro)
}

function removerLivroReducer (state, livro) {
    return state.filter(p => p != livro) 
}

export const cadastroLivroSlice = createSlice({
    name: "CadastroLivro",
    initialState: livrosIniciais,
    reducers: {
        cadastrarLivro: (state, action) => cadastrarLivroReducer(state, action.payload),
        removerLivro: (state, action) => removerLivroReducer(state, action.payload)
    }
})

export const { cadastrarLivro, removerLivro } = cadastroLivroSlice.actions
export default cadastroLivroSlice.reducer