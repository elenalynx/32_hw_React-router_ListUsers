import styles from "../Users/List.module.css";
import {useEffect, useState} from "react";
import UserApi from "../../api/UserApi";
import {useNavigate, useParams} from "react-router-dom";

export default function Album() {
    const queryParam = '?userId={id}';
    const [user, setUser] = useState([]);
    const {idUser} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // UserApi.getList(`photos?albumId=${user.id}`)
        UserApi.getList(`albums?userId=1`)
            .then((res) => {
                setUser(res)
            })
    })

    function onClickBtn(albums) {
        console.log(albums.id)
        navigate(`/users/user/${user.id}/album/${albums.id}`)
    }

// return 'gggg'
    return (
        <div className={styles.container}>
            <table>
                <thead>
                <tr>
                    <th>User</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>
                <tr>
                    <td>yyy</td>
                    <td>yyyll</td>
                </tr>
                {user.map(albumOne => (
                    <tr key={albumOne.id}>
                        <td>{albumOne.title}</td>
                        <td>
                    <span>
                        <button onClick={() => onClickBtn(user)}>Photo</button>
                    </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}