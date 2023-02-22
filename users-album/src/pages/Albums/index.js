import styles from "../../App.module.css";
import {NavLink, Route, Routes} from "react-router-dom";
import List from "../Users/List";
import Album from "./Album";
import Photos from "../Photos/Photos";

export default function Albums () {
    const active = ({isActive}) =>
        isActive ? styles.active : undefined

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/users" className={active}>Back to users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Album/>}/>
                <Route path="/albums/:id" element={<Photos/>}/>
            </Routes>
        </>
    );
}