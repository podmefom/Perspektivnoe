import { Hero } from "../interfaces/Hero";
import {instance} from "./api"

export const getHeroes = async () => {
    const result = await instance({
        method: "GET",
        url: "/heroes/"
    })

    return result.data;
}

export const getHero = async (id: string) => {
    const result = await instance({
        method: "GET",
        url: `/heroes/${id}`
    })

    return result.data;
}

export const createHero = async (data: Hero) => {
    const result = await instance({
        method: "POST",
        url: `/heroes/`,
        data
    })

    return result.data
}