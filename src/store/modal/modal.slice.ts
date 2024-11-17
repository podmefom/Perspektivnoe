import { createSlice } from "@reduxjs/toolkit";
import { Modal } from "../../interfaces/Modal";


const initialState: Modal = {
    isActive: false,
    authActive: false
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeActive(state, action) {
            state.isActive = action.payload
        },

        changeAuth(state, action) {
            state.authActive = action.payload
        }

    }
})


export const { changeActive, changeAuth } = modalSlice.actions
export default modalSlice.reducer