import SearchBar from '../SearchBar/SearchBar.jsx'
import Styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = ({onSearch}) => {
    return(
        <div className={Styles.barraNav}>
            <SearchBar onSearch={onSearch}/>

            <Link to={'/about'}>
            <button>About</button>
            </Link>

            <Link to={'/home'}>
            <button>Home</button>
            </Link>
        </div>
    );
};

export default NavBar