export function enviarMensagem(mensagem) {
    return {
        type: "enviarMensagem",
        payload: [mensagem]
    }
}