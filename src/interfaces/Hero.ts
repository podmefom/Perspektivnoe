export interface HeroDB {
    id: string,
    id_user: string, 
    img: string,
    name: string,
    type: string,
    description: string
}

export interface Hero extends Omit<HeroDB, "id" | "id_user"> {

}