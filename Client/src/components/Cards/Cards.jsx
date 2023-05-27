import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

const Cards = ({characters, onClose}) => {
   return(
      <div className={styles.contenedor}>
         {
            characters.map(({name, status, species, gender, origin, id, image}) =>{
               return(
                  <Card
                  id={id}
                  key={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
               )
            })
         }
      </div>

   );
}

export default Cards;