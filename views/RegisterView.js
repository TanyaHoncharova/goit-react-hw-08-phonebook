import { useState } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { AuthorizationOperations, AuthorizationSelectors } from "../redux/authorization";
import styles from './Views.module.css'



export default function LoginView() {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const error = useSelector(AuthorizationSelectors.getError);


   
    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;
            
            case 'name':
                setName(value);
                break;

            default:
                return;
        }

    };

    const handleSubmit = e => {
        e.preventDefault();
        const credentials = { name, email, password };
        dispatch(AuthorizationOperations.signupUser(credentials))
        setName('')
        setEmail('')
        setPassword('')
    };


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} >
                <label >
                    Name
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange} className={styles.input}
                    />
                </label>
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

                <button type="submit" className={styles.button}>Register</button>
            </form>
            {error &&
                <>
                    <p className={styles.error}> {`This email address is already used or 'password' is shorter than the minimum allowed length (7).`} </p>
                    <p className={styles.error}>Try another</p>
                </>}
        </div>
    );

};