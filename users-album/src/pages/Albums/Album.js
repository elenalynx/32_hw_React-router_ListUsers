import styles from "../Users/List.module.css";
import {useEffect, useState} from "react";
import UserApi from "../../api/UserApi";
import {useNavigate, useParams} from "react-router-dom";

export default function Album() {
    const [user, setUser] = useState([]);
    let {idUser} = useParams();
    const navigate = useNavigate();

    console.log(idUser)

    useEffect(() => {
        UserApi.getList(`albums?userId=${idUser}`)
            .then((res) => {
                setUser(res)
            })
    }, [idUser])

    function onClickBtn(albums) {
        console.log(albums.id)
        navigate(`/users/${idUser}/album/${albums.id}`)
    }

    return (
        <div className={styles.container}>
            <table>
                <thead>
                <tr>
                    <th>Albums</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {user.map(albumOne => (
                    <tr key={albumOne.id}>
                        <td>{albumOne.title}</td>
                        <td>
                    <span>
                        <button onClick={() => onClickBtn(albumOne)}>Photo</button>
                    </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}