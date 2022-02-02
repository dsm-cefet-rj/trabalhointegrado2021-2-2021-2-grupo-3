import {createStore, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import chatReducer from "./slices/chatSlice";
import devoluçãoReducer from "./slices/devoluçãoSlice";
import livrosAlugarReducer from "./slices/livrosAlugarSlice";
import cadastroLivroReducer from "./slices/cadastroLivroSlice";
import confirmarAluguelReducer from "./slices/confirmarAluguelSlice";

const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer,
    msg: chatReducer,
    alugados: livrosAlugarReducer,
    confirmar: confirmarAluguelReducer
})

const store = createStore(rootReducer)
export default store;