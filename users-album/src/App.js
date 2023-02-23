import {Route, Routes, NavLink} from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import styles from './App.module.css';

function App() {
    const active = ({isActive}) =>
        isActive ? styles.active : undefined
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={active}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users/*" element={<Users/>}/>
                <Route path="/users/user/:idUser/*" element={<Albums/>}/>
                <Route path="/users/user/:idUser/album/:idAlbum/*" element={<Photos/>}/>
            </Routes>
        </>
    );
}

export default App;

//
// Реалізувати сторінку "Список користувачів", дані взяти тут https://jsonplaceholder.typicode.com/users
// При натисканні на кнопку Album під кожним користувачем вивести список альбомів конкретного користувача,
// url - https://jsonplaceholder.typicode.com/albums, userId – query параметр для фільтрації користувачам
// При натисканні на кнопку Photos під кожним альбомом – вивести фото з цього альбому,
// урл https://jsonplaceholder.typicode.com/photos, albumId – query параметр для фільтрації альбомів
