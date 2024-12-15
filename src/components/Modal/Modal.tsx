import styles from "./Modal.module.scss";
import { changeActive } from "../../store/modal/modal.slice";
import { useDispatch, useSelector } from "react-redux"
import { Store } from "../../interfaces/Store"
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import { useRef } from "react";

const Modal = () => {

    const dispatch = useDispatch()
    
    const modal = useSelector((store: Store) => store.modal)

    const dialogRef = useRef(null)
    return (
        <>
            
            <dialog open={modal.isActive} className={styles.container} ref={dialogRef} onClick={(event) => {
                    if (event.target === dialogRef.current) {
                        dispatch(changeActive(false))
                   }
                }}
                >
                    <div className={styles.modal}>
                        <div className={styles.close} onClick={() => {
                            dispatch(changeActive(false));
                        }}>
                            X
                        </div>
                        {modal.authActive ? (<Registration/>) : (<Login/>)}
                    </div>
            </dialog>

        </>
     );
}
 
export default Modal;