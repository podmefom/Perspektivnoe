import styles from "./Modal.module.scss";

const Modal = () => {


    return ( 
        <dialog className={styles.container}>
            <div className= {styles.modal}>
                <button className={styles.close} onClick={() => {
                }}>
                    X
                </button>
                
            </div>
        </dialog>
     );
}
 
export default Modal;