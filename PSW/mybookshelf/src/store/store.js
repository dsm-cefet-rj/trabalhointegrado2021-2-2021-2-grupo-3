import {createStore, combineReducers} from "redux";
import cadastroLivroReducer from "./reducers/cadastroLivro.reducer";
import chatReducer from "./reducers/chat.reducer";
import livroAlugar from "./reducers/livrosAlugar.reducer"
import devoluçãoReducer from "./slices/devoluçãoSlice";

const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer,
    msg: chatReducer,
    alugados: livroAlugar,
})

const store = createStore(rootReducer)
export default store;