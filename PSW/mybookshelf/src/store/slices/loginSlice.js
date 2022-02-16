import {createSlice} from '@reduxjs/toolkit'

function salvarTokenReducer (state, loginInfo) {
    return {logado: true, token: loginInfo.token, nickname: loginInfo.nickname}
}

export const loginSlice = createSlice({
    name: "login",
    initialState: {logado: false, nickname: null, token: null},
    reducers: {
        salvarToken: (state, action) => salvarTokenReducer(state, action.payload),
    }
})

export const { salvarToken } = loginSlice.actions
export default loginSlice.reducer