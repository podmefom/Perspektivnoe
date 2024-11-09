import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux"
import { Store } from "../../interfaces/Store";
import { changeActive, changeAuth } from "../../store/modal/modal.slice";


const Header = () => {
    const token = "dljkfal;faldsjfk";
    const navigate = useNavigate();

    const modal = useSelector((store: Store) => store.modal)
    const dispatch = useDispatch()


    console.log(modal)

    return (
        <>
            <Modal />
    
            <header className={styles.header}>
                
                <img onClick={() => {
                    navigate("/")
                }} className={styles.logo} src="./image/PudgeLogo.png" alt="Logo" />
                
                <nav className={styles.nav}>
                    <button onClick={() => navigate("/heroes")}>
                        Герои
                    </button>
            
                    {!token ? (
                        <>
                            <button onClick={() => navigate("/login")}>Логин</  button>
                            <button onClick={() => navigate("/register")}   >Зарегаться</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate("/profile")}>Профиль</  button>
                            <button>Выход</button>
                        </>
                    )}
                    <button onClick={() => {
                        dispatch(changeActive(true))
                    }}>Модальное</button>
                </nav>
            </header>
        </>

    );
};

export default Header;
