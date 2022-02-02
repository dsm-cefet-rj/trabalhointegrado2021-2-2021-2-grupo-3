import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const usuariosIniciais = []


export const addUsuarioServer = createAsyncThunk('usuario/addUsuarioServer', async (usuario) => {
    return await httpPost(`${baseUrl}/usuario`, usuario);
  });

export const cadastroUsuarioSlice = createSlice({
    name: "CadastroUsuario",
    initialState: usuariosIniciais,
    reducers: {
        cadastrarUsuario: (state, action) => cadastrarUsuarioReducer(state, action.payload),
        removerUsuario: (state, action) => removerUsuarioReducer(state, action.payload),
        setStatus: (state, action) => {state.status = action.payload}
    }})


function cadastrarUsuarioReducer (state, usuario) {
    return state.concat(usuario)
}

function removerUsuarioReducer (state, usuario) {
    const teste = state.filter(p => p.id != usuario.id) 
    console.log(teste)
    return teste
    
}

export const { cadastrarUsuario, removerUsuario } = cadastroUsuarioSlice.actions
export default cadastroUsuarioSlice.reducer