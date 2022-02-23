import {createSlice} from '@reduxjs/toolkit'

function salvarTokenReducer (state, loginInfo) {
    return {logado: true, token: loginInfo.token, nickname: loginInfo.nickname}
}

function logoutTokenReducer (state) {
    return {logado: false, nickname: null, token: null}
}

export const loginSlice = createSlice({
    name: "login",
    initialState: {logado: false, nickname: null, token: null},
    reducers: {
        salvarToken: (state, action) => salvarTokenReducer(state, action.payload),
        logoutToken: (state, action) =>logoutTokenReducer(state),
    }
})



export const { salvarToken, logoutToken } = loginSlice.actions
export default loginSlice.reducer