import styles from "../../App.module.css";
import {NavLink, Route, Routes, useParams} from "react-router-dom";
import Photo from "../Photos/Photo";

export default function Photos () {
    let {idUser} = useParams();
    const backUrl = `/users/${idUser}`
    const active = ({isActive}) =>
        isActive ? styles.active : undefined

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={backUrl} className={active}>Back to albums</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Photo/>}/>
                {/*<Route path="/" element={<Photo/>}/>*/}
            </Routes>
        </>
    );
}