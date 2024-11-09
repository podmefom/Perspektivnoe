import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import Modal from "../Modal/Modal";
import {  useDispatch } from "react-redux"
import { changeActive, changeAuth } from "../../store/modal/modal.slice";


const Header = () => {
    const token = null;
    const navigate = useNavigate();

    const dispatch = useDispatch()

    

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
                            <button>Выход</button>
                        </>
                    )}
                    
                </nav>
            </header>
        </>

    );
};

export default Header;
