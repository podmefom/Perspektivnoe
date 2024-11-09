import styles from "./Auth.module.scss"


const Registration = () => {


    return ( 
        <form className={styles.form}>
            <h2>Регайся</h2>
            <input placeholder={"Логин"} />
            <input placeholder={"Имя"} />
            <input placeholder={"Фамилия"} />
            <input placeholder={"ММР"} />
            <input placeholder={"Пароль"} />
            <input placeholder={"Повторите пароль"} />
            <button>115 ФЗ</button>
        </form>
     );
}
 
export default Registration;