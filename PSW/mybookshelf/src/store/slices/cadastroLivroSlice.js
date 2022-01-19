import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import livro3 from '../../img/livro3.jpg'
import livro4 from '../../img/livro4.jpg'

const livrosAdapter = createEntityAdapter();

const initialState = livrosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

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

//Migrando a aplicação para utilizar o EntityAdapter - Passando os dados para Async Thunk
//Aqui joga para o servidor e se for ok, vai atualizar na tela
export const updateLivrosServer = createAsyncThunk('livros/updateLivrosServer', 
    async (livro) => {
        let response = await fetch('http://localhost:3000/livros/' + livro.id , 
        {
            method: 'PUT', //Pode ser post para adição ou DELETE para remoção
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(livro)
        });
        if(response.ok){
            return livro;
        } else {
            throw new Error("Erro ao atualizar o livro");
        }
    });

export const { cadastrarLivro, removerLivro } = cadastroLivroSlice.actions
export default cadastroLivroSlice.reducer