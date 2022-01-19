import {createSlice} from '@reduxjs/toolkit'

function enviarMensagemReducer (state, msg_incompleta) {
    const dados_msg = {
        className: "container",
        hora: new Date().getHours() + ":" + new Date().getMinutes()
    }

    var msg = Object.assign(msg_incompleta, dados_msg)
    return state.concat(msg)
}

export const chatSlice = createSlice({
    name: "chat",
    initialState: [],
    reducers: {
        enviarMensagem: (state, action) => enviarMensagemReducer(state, action.payload)
    }
})

export const { enviarMensagem } = chatSlice.actions
export default chatSlice.reducer