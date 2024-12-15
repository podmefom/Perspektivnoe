import { useState } from "react";
import styles from './Profile.module.scss';
import { UserDB } from "../../interfaces/User";
import { updateUser } from "../../api/user.api"; 


const Profile = () => {
    
    const user: UserDB = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user || !user.id) {
        return <div>Ошибка: данные пользователя не найдены!</div>;
    }
    
    const [userChange, setUserChange] = useState({
        id: user.id,
        login: user.login,
        mmr: user.mmr,
        name: user.name,
        surname: user.surname,
        password: user.password
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        try {
            const res = await updateUser(user.id, {...userChange});
            
            if (res.status == 200) {

                localStorage.setItem("user", JSON.stringify({...userChange}));
                alert("Данные успешно обновлены!");
            }
        } catch (error) {
            console.error("Ошибка при обновлении данных пользователя", error);
            alert("Произошла ошибка при обновлении данных.");
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(event) => {
                        setUserChange({ ...userChange, name: event.target.value });
                    }}
                    value={userChange.name}
                    placeholder="Name"
                />

                <input
                    onChange={(event) => {
                        setUserChange({ ...userChange, surname: event.target.value });
                    }}
                    value={userChange.surname}
                    placeholder="Surname"
                />

                <input
                    onChange={(event) => {
                        setUserChange({ ...userChange, mmr: event.target.value });
                    }}
                    value={userChange.mmr}
                    placeholder="mmr"
                />

                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default Profile;
