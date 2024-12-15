import { UserAuth } from "../interfaces/User"
import {instance} from "./api"


export const getUsers = async () => {
    const result = await instance({
        method: "GET",
        url: "/users/"
    })

    return result.data
}

export const getUser = async (id : string) => {
    const result = await instance({
        method: "GET",
        url: `/users/${id}`
    })

    return result.data
}

export const register = async (data : UserAuth) => {
    const result = await instance({
        method: "POST",
        url: "/users",
        data
    })

    return result.data

}

export const updateUser = async (id: string, data: Partial<UserAuth>) => {
    const result = await instance({
        method: "PUT",
        url: `/users/${id}`,
        data
    });

    return result;
}
