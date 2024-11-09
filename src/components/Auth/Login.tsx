import styles from "./Auth.module.scss"

const Login = () => {

    


    return ( 
        <form className={styles.form}>
            <h2>Логин</h2>
            <input placeholder={"Логин"} />
            <input placeholder={"Пароль"} />
            <button>115 ФЗ</button>

        </form>
     );
}
 
export default Login;