import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserApi from "../../api/UserApi";
import styles from "./Photo.module.css";

export default function Photo () {
    const [album, setAlbum] = useState([]);
    let {idAlbum} = useParams();

    useEffect(() => {
        console.log(idAlbum)
        UserApi.getList(`photos?albumId=${idAlbum}`)
            .then((res) => {
                setAlbum(res)
            })
    }, [])

    return (
        <>
            <div className={styles.container}>
                {album.map(photoOne => (
                    <img src={photoOne.url} alt={photoOne.id} key={photoOne.id}/>
                ))}
            </div>
        </>
    );
}