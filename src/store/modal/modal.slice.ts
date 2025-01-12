import { createSlice } from "@reduxjs/toolkit";
import { Modal as ModalInterface } from "../../interfaces/Modal";

const initialState: ModalInterface = {
    isActive: false,
    authActive: false,
    addHeroActive: false
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeActive(state, action) {
            state.isActive = action.payload;
        },
        changeAuth(state, action) {
            state.authActive = action.payload;
        },
        changeAddHeroActive(state, action) {
            state.addHeroActive = action.payload;
        }
    }
});

export const { changeActive, changeAuth, changeAddHeroActive } = modalSlice.actions;
export default modalSlice.reducer;
