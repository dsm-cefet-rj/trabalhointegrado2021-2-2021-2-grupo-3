import {createStore, combineReducers} from "redux";
import devoluçãoReducer from "./reducers/devolução.reducer";

const rootReducer = combineReducers({
    devolucao: devoluçãoReducer
})

const store = createStore(rootReducer)
export default store;