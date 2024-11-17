import { UserAuth } from "../interfaces/User"
import {instance} from "./api"


export const getUsers = async () => {
    const result = await instance({
        method: "GET",
        url: "/users"
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

