import styles from "./Auth.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeLogin } from "../../store/userAuth/userAuth.slice";
import { Store } from "../../interfaces/Store"

const Login = () => {

    const dispatch = useDispatch()

    const user = useSelector((store: Store) => store.userAuth)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(user.userLogin) 
    }

    return ( 
        <form className={styles.form}  onSubmit={handleSubmit}>
            <h2>Логин</h2>
            <input value={user.userLogin.login} onChange={(event) => {
                dispatch(changeLogin({...user.userLogin, login: event.target.value}))
            }} placeholder={"Логин"} />
            <input value={user.userLogin.password} onChange={(event) => {
                dispatch(changeLogin({...user.userLogin, password: event.target.value}))
            }} placeholder={"Пароль"} />
            <button>115 ФЗ</button>

        </form>
     );
}
 
export default Login;