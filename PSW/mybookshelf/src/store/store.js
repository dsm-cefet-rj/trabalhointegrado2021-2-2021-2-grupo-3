import {createStore, combineReducers} from "redux";
import cadastroLivroReducer from "./reducers/cadastroLivro.reducer";
import devoluçãoReducer from "./reducers/devolução.reducer";
import chatReducer from "./reducers/chat.reducer";


const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer,
    msg: chatReducer
})

const store = createStore(rootReducer)
export default store;