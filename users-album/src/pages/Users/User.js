import styles from "./List.module.css";
import {useEffect, useState} from "react";
import UserApi from "../../api/UserApi";

export default function User () {
    const queryParam = '?userId={id}';
    const [user, setUser] = useState([]);

    // useEffect(() => {
    //     UserApi.getOne(id)
    //         .then((id) => {
    //             setUser(id)
    //         })
    // })
return 'gggg'
//     return (
//         <div className={styles.container}>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>User</th>
//                     <th>Action</th>
//                 </tr>
//
//                 </thead>
//
//                 <tbody>
//                 <tr>
//                     <td>yyy</td>
//                     <td>yyyll</td>
//                 </tr>
//                 {/*{user.map(user => (*/}
//                 {/*    <tr key={user.userId}>*/}
//                 {/*        <td>{user.title}</td>*/}
//                 {/*        <td>*/}
//                 {/*    <span>*/}
//                 {/*        <button>Album</button>*/}
//                 {/*    </span>*/}
//                 {/*        </td>*/}
//                 {/*    </tr>*/}
//                 {/*))}*/}
//                 </tbody>
//             </table>
//         </div>
//     );
}