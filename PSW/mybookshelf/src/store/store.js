import {createStore, combineReducers} from "redux";
import cadastroLivroReducer from "./reducers/cadastroLivro.reducer";
import devoluçãoReducer from "./reducers/devolução.reducer";
import chatReducer from "./reducers/chat.reducer";
import livroAlugar from "./reducers/livrosAlugar.reducer"


const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer,
    msg: chatReducer,
    alugados: livroAlugar,
})

const store = createStore(rootReducer)
export default store;