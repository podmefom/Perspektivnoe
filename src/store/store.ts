import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalReducer from "./modal/modal.slice"

const reducers = combineReducers({
    modal: modalReducer
})


export const store = configureStore({
    reducer: reducers
})

