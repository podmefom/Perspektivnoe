import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth.module.scss"
import { Store } from "../../interfaces/Store"
import { UserDB } from "../../interfaces/User"
import { changeRegister } from "../../store/userAuth/userAuth.slice";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/auth.api";


const Registration = () => {

    const [users, setUsers] = useState<UserDB[]>()

    useEffect(() => {
        const get = async () => {
            const result = await getUsers();
            setUsers(result)
        }

        get()
    }, [])


    const dispatch = useDispatch()

    const [repeatPassword, setRepeatPassword] = useState("")
    const user = useSelector((store: Store) => store.userAuth)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(user.userRegister)
        
    }

    return ( 
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Регайся</h2>
            <input onChange={(event) => {
                dispatch(changeRegister({...user.userRegister, login: event.target.value}))
            }} placeholder={"Логин"} />
            <input onChange={(event) => {
                dispatch(changeRegister({...user.userRegister, name: event.target.value}))
            }} placeholder={"Имя"} />
            <input onChange={(event) => {
                dispatch(changeRegister({...user.userRegister, surname: event.target.value}))
            }} placeholder={"Фамилия"} />
            <input onChange={(event) => {
                dispatch(changeRegister({...user.userRegister, mmr: event.target.value}))
            }} placeholder={"ММР"} />
            <input onChange={(event) => {
                dispatch(changeRegister({...user.userRegister, password: event.target.value}))
            }} placeholder={"Пароль"} />
            <input onChange={(event) => {
                setRepeatPassword(event.target.value)
            }} placeholder={"Повторите пароль"} />
            <button>115 ФЗ</button>
        </form>
     );
}
 
export default Registration;