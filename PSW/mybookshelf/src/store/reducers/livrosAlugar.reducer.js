export default (state = [], action) => {
    switch (action.type) {
        case "livroAlugar":
            return state.concat(action.payload[0])
        default: 
            return state
    }
}