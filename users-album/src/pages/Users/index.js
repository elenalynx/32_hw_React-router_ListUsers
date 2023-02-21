import {NavLink, Route, Routes} from "react-router-dom";
import List from "./List";
import User from "./User";
import styles from "../../App.module.css";

export default function Users() {

    const active = ({isActive}) =>
        isActive ? styles.active : undefined

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={active}>Go to home</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </>
    );
}