import styles from './HeroCard.module.scss';

const HeroCard = ({ name, description, img, type }: {
    name: string,
    description: string;
    img: Uint8Array<ArrayBuffer>,
    type: string;
}) => {
    
    const byteArray = new Uint8Array(Object.values(img))
    const blob = new Blob([byteArray]) // Создаем блоб по массиву байтов
    console.log(blob)
    const blobNewURL = URL.createObjectURL(blob) // Создаем ссылку по блобу, можно юзать в картинках
    return ( 
        <div className={styles.container}>
            <div>{name}</div>
            <div>{description}</div>
            <img src={blobNewURL} alt={name} />
            <div>{type}</div>
        </div>
    );
}
 
export default HeroCard;
