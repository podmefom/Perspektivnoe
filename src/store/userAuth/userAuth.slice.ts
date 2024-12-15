import { createSlice } from "@reduxjs/toolkit";
import { UserAuthObject } from "../../interfaces/User";

const initialState: UserAuthObject = {
    userLogin: {
        login: "",
        password: ""
    },
    userRegister: {
        login: "",
        name: "",
        surname: "",
        mmr: "",
        password: ""
    }
};

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        changeLogin(state, action) {
            state.userLogin = action.payload;
        },
        changeRegister(state, action) {
            state.userRegister = action.payload;
        }
    }
});

export const { changeLogin, changeRegister } = userAuthSlice.actions;
export default userAuthSlice.reducer;
