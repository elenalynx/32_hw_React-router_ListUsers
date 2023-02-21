import {useEffect, useState} from "react";
import UserApi from "../../api/UserApi";
import styles from "./List.module.css";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import User from "./User";
import Albums from "../Albums";

export default function List() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        UserApi.getList('users')
            .then((list) => {
                setList(list)
            })
    })

    function onClickBtn(user) {
        navigate('/users/user')
    }

    return (
        // <>
        <div className={styles.container}>
            <table>
                <thead>
                <tr>
                    <th>User</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>
                {list.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>
                    <span>
                        <button onClick={() => onClickBtn(user)}>Album</button>
                    </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}