import {useEffect, useState} from "react";
import UserApi from "../../api/UserApi";
import styles from "./List.module.css";
import {useNavigate} from "react-router-dom";


export default function List() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        UserApi.getList('users')
            .then((res) => {
                setList(res)
            })
    }, [])

    function onClickBtn(user) {
        console.log(user.id)
        navigate(`/users/${user.id}`)
    }

    return (
        <div className={styles.container}>
            <table>
                <thead>
                <tr>
                    <th>Users</th>
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