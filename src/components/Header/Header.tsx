import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import Modal from "../Modal/Modal";
import {  useDispatch } from "react-redux"
import { changeActive, changeAuth } from "../../store/modal/modal.slice";


const Header = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const exit = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <Modal />
    
            <header className={styles.header}>
                
                <img onClick={() => {
                    navigate("/")
                }} className={styles.logo} src="/images/PudgeLogo.png" alt="Logo" />
                
                <nav className={styles.nav}>
                    <button onClick={() => navigate("/heroes")}>
                        Герои
                    </button>
            
                    {!token ? (
                        <>
                            <button onClick={() => {
                                dispatch(changeActive(true))
                                dispatch(changeAuth(false))
                            }}>Логин</button>
                            <button onClick={() => {
                                dispatch(changeActive(true))
                                dispatch(changeAuth(true))
                            }}>Зарегаться</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate("/profile")}>Профиль</  button>
                            <button onClick={exit}>Выход</button>
                        </>
                    )}
                    
                </nav>
            </header>
        </>

    );
};

export default Header;
