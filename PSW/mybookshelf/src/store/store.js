import {createStore, combineReducers} from "redux";
import chatReducer from "./slices/chatSlice";
import devoluçãoReducer from "./slices/devoluçãoSlice";
import livrosAlugarReducer from "./slices/livrosAlugarSlice";
import cadastroLivroReducer from "./slices/cadastroLivroSlice";
import confirmarAluguelReducer from "./slices/confirmarAluguelSlice";
import loginReducer from "./slices/loginSlice";

const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer,
    msg: chatReducer,
    alugados: livrosAlugarReducer,
    confirmar: confirmarAluguelReducer,
    login: loginReducer
})

const store = createStore(rootReducer)
export default store;