import {createSlice} from '@reduxjs/toolkit'

function enviarMensagemReducer (state, msg_incompleta) {
    const dados_msg = {
        className: "container",
        hora: new Date().getHours() + ":" + new Date().getMinutes()
    }

    var msg = Object.assign(msg_incompleta, dados_msg)
    return state.concat(msg)
}

function carregarMensagemReducer (state, msg_incompleta){
    return state = msg_incompleta
}

export const chatSlice = createSlice({
    name: "chat",
    initialState: [],
    reducers: {
        carregarMensagem: (state, action) => carregarMensagemReducer(state, action.payload),
        enviarMensagem: (state, action) => enviarMensagemReducer(state, action.payload)
    }
})

export const { enviarMensagem, carregarMensagem } = chatSlice.actions
export default chatSlice.reducer