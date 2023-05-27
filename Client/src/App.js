import styles from './App.css';
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Deatil/Detail';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const App = () => {
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }
   return (
      <div className={styles.App}>
         <NavBar onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;

/*
import Card from './components/Card/Card.jsx'
<Card
id={Rick.id}
name={Rick.name}
status={Rick.status}
species={Rick.species}
gender={Rick.gender}
origin={Rick.origin.name}
image={Rick.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
/>

<SearchBar onSearch={(characterID) => window.alert(characterID)} />

const onSearch = (id) => {
   setCharacters([...characters, example])

   <div className={styles.App}>
         <NavBar onSearch = {onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
};
*/