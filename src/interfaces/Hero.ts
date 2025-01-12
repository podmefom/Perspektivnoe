export interface HeroDB {
    id: string,
    id_user: string, 
    img: Uint8Array<ArrayBuffer> | undefined,
    name: string,
    type: string,
    description: string
}

export interface Hero extends Omit<HeroDB, "id" | "id_user"> {

}