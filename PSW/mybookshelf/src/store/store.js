import {createStore, combineReducers} from "redux";
import cadastroLivroReducer from "./reducers/cadastroLivro.reducer";
import devoluçãoReducer from "./reducers/devolução.reducer";


const rootReducer = combineReducers({
    devolucao: devoluçãoReducer,
    cadastroLivro: cadastroLivroReducer
})

const store = createStore(rootReducer)
export default store;