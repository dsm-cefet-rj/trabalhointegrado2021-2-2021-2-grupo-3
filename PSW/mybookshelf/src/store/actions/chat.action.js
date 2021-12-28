export function enviarMensagem(mensagem) {
    const envia_mensagem = {
        className: "container",
        hora: new Date().getHours() + ":" + new Date().getMinutes()
    }
    return {
        type: "enviarMensagem",
        payload: [Object.assign(mensagem, envia_mensagem)]
    }
}
