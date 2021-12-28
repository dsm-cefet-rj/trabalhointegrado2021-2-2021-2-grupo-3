export default (state = [], action) => {
    switch (action.type) {
        case "enviarMensagem":
            return state.concat(action.payload[0])
        default: 
         return state
    } 
}