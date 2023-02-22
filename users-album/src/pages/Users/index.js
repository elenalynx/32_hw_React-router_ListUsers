import {NavLink, Route, Routes} from "react-router-dom";
import List from "./List";
import Album from "../Albums/Album";
import styles from "../../App.module.css";

export default function Users() {

    const active = ({isActive}) =>
        isActive ? styles.active : undefined

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={active}>Back to home</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<List />}/>
                <Route path="/user/:id" element={<Album/>}/>
            </Routes>
        </>
    );
}