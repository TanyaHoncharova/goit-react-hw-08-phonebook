import { useSelector, useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';
import { AuthorizationOperations, AuthorizationSelectors } from "../../redux/authorization";



export default function UserMenu() {
    const userEmail = useSelector(AuthorizationSelectors.getUserName);
    const dispatch = useDispatch();

    return (
        <div className={styles.userMenu}>
            <p className={styles.userName}>{userEmail}</p>
            <button type='button' className={styles.button} onClick={() => dispatch(AuthorizationOperations.logoutUser())} >Logout</button>
        </div>
    )
}