import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
   return (
      <div className={styles.container}>
         <img src={image} alt="" />
         <Link to={`/detail/${id}`}><p>{`Name: ${name}`}</p></Link>
         <p>{`Status: ${status}`}</p>
         <p>{`Species: ${species}`}</p>
         <p>{`Gender: ${gender}`}</p> 
         <p>{`Origin: ${origin}`}</p>
         <button onClick={ ()=> {onClose(id)}}>X</button>
      </div>
   );
}

export default Card;