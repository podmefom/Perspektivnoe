import axios from "axios";
import { useEffect, useState } from "react";

const HeroPage = () => {

    const [heroData, setHeroData] = useState(null);
     
    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/heroes');
                setHeroData(response.data);
            } catch (error) {
                console.log(error);
            } 
        }
        
        fetchHeroData();
    }, [])
    
    console.log(heroData)

    return ( 
        <div>

        </div>
     );
}
 
export default HeroPage;