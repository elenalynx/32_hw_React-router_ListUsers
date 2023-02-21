import styles from "../../App.module.css";
import {NavLink, Route, Routes} from "react-router-dom";
import List from "../Users/List";
import User from "../Users/User";
import Photos from "../Photos/Photos";

export default function Albums () {
    const active = ({isActive}) =>
        isActive ? styles.active : undefined

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={active}>Back</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/photos" element={<Photos/>}/>
            </Routes>
        </>
    );
}