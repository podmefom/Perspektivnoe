import styles from "./Auth.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeLogin } from "../../store/userAuth/userAuth.slice";
import { Store } from "../../interfaces/Store"
import { getUsers } from "../../api/user.api";
import { useState, useEffect } from "react";
import { UserDB } from "../../interfaces/User";
import { changeAuth } from "../../store/modal/modal.slice";


const Login = () => {

    const dispatch = useDispatch()
    const user = useSelector((store: Store) => store.userAuth)
    const [users, setUsers] = useState<UserDB[]>([])
    const [status, setStatus] = useState("")

    
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        for (let i = 0; i < users.length; i++){
            if (user.userLogin.login.toLowerCase() === users[i].login.toLowerCase()){
                const token = "dljasfhadsljfh"
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(users[i]))
                window.location.reload()
                return
            }
        }

        setStatus("Пользователя с таким логином не существует")

    }

    useEffect (() => {
        const get = async () => {
            const result = await getUsers();
            setUsers(result)
        }

        get()
    }, []);


    return ( 
        <form className={styles.form}  onSubmit={handleSubmit}>
            <h2>Логин</h2>
            <input value={user.userLogin.login} onChange={(event) => {
                dispatch(changeLogin({...user.userLogin, login: event.target.value}))
            }} placeholder={"Логин"} />
            <input value={user.userLogin.password} onChange={(event) => {
                dispatch(changeLogin({...user.userLogin, password: event.target.value}))
            }} placeholder={"Пароль"} />
            {status != "" ? <div>{status}</div> : <></>}
            <button>115 ФЗ</button>
            <div className={styles.button_login}> 
                <p>
                    Если аккаунт незарегистрирован
                </p>
                <span 
                onClick={() => 
                    {dispatch(changeAuth(true))}
                }
                >
                    Зарегистрируйтесь</span>
            </div>
        </form>
     );
}
export default Login;