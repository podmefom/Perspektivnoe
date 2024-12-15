import { useEffect, useState } from "react";
import { getHeroes } from "../../api/hero.api";
import styles from "./HeroPage.module.scss"
import HeroCard from "../HeroCard/HeroCard";
import { HeroDB } from "../../interfaces/Hero";

const HeroPage = () => {

    const [heroData, setHeroData] = useState<HeroDB[]>([]);
     
    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const result = await getHeroes();
                setHeroData(result);
            } catch (error) {
                console.log(error);
            } 
        }
        
        fetchHeroData();
    }, [])
    
    console.log(heroData)

    return ( 
        <div className={styles.container}>
            {heroData.map((hero: HeroDB) => (
                <HeroCard key={hero.id} name={hero.name} description={hero.description} img={hero.img} type={hero.type} />
            ))}
        </div>
     );
}
 


export default HeroPage;