export interface User {
    login: string;
    password: string;
}

export interface UserAuth extends User {
    name: string;
    surname: string;
    mmr: string;
}

export interface UserAuthObject {
    userLogin: User;
    userRegister: UserAuth
}

export interface UserDB {
    id: string,
    login: string,
    name: string,
    surname: string,
    mmr: number
}


