import styles from './HeroCard.module.scss';


const HeroCard = ({ name, description, img, type } : {
    name: string,
    description: string;
    img: string;
    type: string;
}) => {
    return ( 
        <div className={styles.container}>
            <div>{name}</div>
            <div>{description}</div>
            <img src={img} />
            <div>{type}</div>
        </div>
     );
}
 
export default HeroCard;