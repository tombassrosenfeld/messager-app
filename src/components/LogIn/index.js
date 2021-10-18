import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import axios from "../../data/axios";

import './Login.css';

const LogIn = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const emailChange = (e) => {
        setEmail(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = { email };

        axios.post("users/login", {
            email
        } ).then((data) => {
            dispatch({
                type: "SET_USER",
                user: data.data
            })
            // TODO error handling - notify user of error
        })
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="email">Email</label>
            <input value={email} onChange={emailChange} id="email" type="email" name="email" required />
            <input type="submit" />
        </form>
    )
}

export default LogIn