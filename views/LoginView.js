import { useState, } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import styles from './Views.module.css'
import { AuthorizationOperations, AuthorizationSelectors } from "../redux/authorization";

export default function LoginView() {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const error = useSelector(AuthorizationSelectors.getError);
    
    const handleSubmit = e => {
        e.preventDefault();
        const credentials = { email, password };
        dispatch(AuthorizationOperations.loginUser(credentials))
        setEmail('')
        setPassword('')
    };
    
    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }

    };

    return (
        <div className={styles.container}>

            <form onSubmit={handleSubmit} >
                <label >
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <label >
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <button type="submit" className={styles.button}>Login</button>
            </form>
            {error &&
                <>
                <p className={styles.error}> {`Sorry, Request failed. `} </p>
                <p className={styles.error}> {`Please, check your email and pasword. `} </p>
                </>
                }
        </div>
    );

};