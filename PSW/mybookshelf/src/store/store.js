import {createStore, combineReducers} from "redux";
import chatReducer from "./slices/chatSlice";
import devoluçãoReducer from "./slices/devoluçãoSlice";
import livrosAlugarReducer from "./slices/livrosAlugarSlice";
import cadastroLivroReducer from "./slices/cadastroLivroSlice";

const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer,
    msg: chatReducer,
    alugados: livrosAlugarReducer,
})

const store = createStore(rootReducer)
export default store;