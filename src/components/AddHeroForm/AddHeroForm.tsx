import { useState } from "react";
import styles from "./AddHeroForm.module.scss";
import { createHero } from "../../api/hero.api";

const AddHeroForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [img, setImg] = useState<Uint8Array<ArrayBuffer>>()
    

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            setFile(file)
            const buffer = await file.arrayBuffer() // Преобразование в какую-то хуйню ArrayBuffer
            const byteArray = new Uint8Array(buffer) // Преобразование в массив байтов, храним эту хуйню в json-server
            setImg(byteArray)
            console.log(byteArray)
            const blob = new Blob([byteArray])
            console.log(blob)
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const result = await createHero({name, description, img, type})
            console.log(result)
        } catch(error) {
            console.error("Error:", error)
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className="nameHero"
                type="text"
                placeholder="Имя героя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input className="descriptionHero"
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select  value={type} onChange={(e) => setType(e.target.value)} className="typeHero">
                <option value="sila">Сила</option>
                <option value="lovcost">Ловкость</option>
                <option value="intelekt">Интеллект</option>
                <option value="univesal">Универсал</option>

            </select>
            <div className={styles.fileInputWrapper}>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                />
                <label className={styles.fileInputLabel}>
                    <img src="images/plus.png"/>
                    {file ? <p>Вы выбрали файл!</p> : <p>Выберите файл</p>}
                </label>
            </div>
            <div className={styles.buttonCreate}>
                <button>Создать</button>
            </div>
        </form>
    );
};

export default AddHeroForm;
