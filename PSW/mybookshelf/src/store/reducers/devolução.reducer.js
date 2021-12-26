export default (state = {}, action) => {
    switch (action.type) {
        case "AgendarDevolução":
            return action.payload[0]
        default: 
         return state
    } 
}