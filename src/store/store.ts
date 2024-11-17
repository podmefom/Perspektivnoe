import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalReducer from "./modal/modal.slice"
import userAuthReducer from "./userAuth/userAuth.slice.ts"

const reducers = combineReducers({
    modal: modalReducer,
    userAuth: userAuthReducer
})


export const store = configureStore({
    reducer: reducers
})

