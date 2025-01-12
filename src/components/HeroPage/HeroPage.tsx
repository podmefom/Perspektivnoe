import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeAddHeroActive } from "../../store/modal/modal.slice";
import { getHeroes } from "../../api/hero.api";
import styles from "./HeroPage.module.scss";
import HeroCard from "../HeroCard/HeroCard";
import { HeroDB } from "../../interfaces/Hero";
import AddHeroForm from "../AddHeroForm/AddHeroForm";

const HeroPage = () => {
    const [heroData, setHeroData] = useState<HeroDB[]>([]);
    const dispatch = useDispatch();
    // const blob = new Blob([byteArray]) // Создаем блоб по массиву байтов
    // const blobNewURL = URL.createObjectURL(blob) // Создаем ссылку по блобу, можно юзать в картинках
    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const result = await getHeroes();
                setHeroData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchHeroData();
    }, []);

    console.log(heroData)

    const handleAddHero = () => {
        console.log("Кнопка нажата. Открытие модального окна для добавления героя");
        dispatch(changeAddHeroActive(true)); 
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.buttonGroup}>
                <button onClick={handleAddHero}>Добавить карточку героя</button>
            </div>
            <div className={styles.cardButtons}>
                <button>Все карточки</button>
                <button>Мои карточки</button>
            </div>
            <div className={styles.cardContainer}>
                {heroData.map((hero: HeroDB) => (
                    <HeroCard
                        key={hero.id}
                        name={hero.name}
                        description={hero.description}
                        img={hero.img}
                        type={hero.type}
                    />
                ))}
            </div>
            <AddHeroForm />
        </div>
    );
};

export default HeroPage;
