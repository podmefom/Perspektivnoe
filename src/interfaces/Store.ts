import { Modal } from "./Modal"
import {UserAuthObject} from "./User"

export interface Store {
    modal: Modal
    userAuth: UserAuthObject
}