import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth.module.scss"
import { Store } from "../../interfaces/Store"
import { UserDB } from "../../interfaces/User"
import { changeRegister } from "../../store/userAuth/userAuth.slice";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/user.api";
import { register } from "../../api/user.api";
import { changeAuth } from "../../store/modal/modal.slice";


const Registration = () => {

    const [users, setUsers] = useState<UserDB[]>([])
    const [status, setStatus] = useState("")
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
        if (user.userRegister.password === repeatPassword) {

            for (let i = 0; i < users.length; i++) {
                if (user.userRegister.login.toLowerCase() === users[i].login.toLowerCase()) {
                    setStatus("Пользователь с таким логином уже существует!") 
                    return
                }
    
            }
    
            const result = await register(user.userRegister);
            console.log(result)
            if (result) {
                const token = "fjerafjlkiedsrafj5ifjlkhifedsrlifedsrjlknifedrjlki"
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(result))
                window.location.reload()
            } 
        }
        else {
            setStatus("Пароли не совпадают!")
            return
        }
        
        
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
            {status != "" ? <div>{status}</div> : <></>}
            <button>115 ФЗ</button>
             
            <div className={styles.button_login}> 
                <p>
                    Если аккаунт уже зарегестрирован
                </p>
                <span 
                onClick={() => 
                    {dispatch(changeAuth(false))}
                }
                >
                    Логин</span>
            </div>
            
        </form>
     );
}
 
export default Registration;