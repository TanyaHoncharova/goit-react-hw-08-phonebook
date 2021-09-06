import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu";
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { AuthorizationSelectors } from '../../redux/authorization';


export default function AppBar() {
    const isLoggedIn = useSelector(AuthorizationSelectors.isLoggedIn);
    return (
        <header className={styles.header}>

            {!isLoggedIn ?
                <nav>
                    <NavLink exact
                        to="/register"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Register
                    </NavLink>

                    <NavLink exact
                        to="/login"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Login
                    </NavLink>

                </nav>
                :
                <>
                    <nav>
                        <NavLink exact
                            to="/contacts"
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Contacts
                        </NavLink>
                    </nav>

                    <UserMenu />
                </>
            }

        </header>

    );
};