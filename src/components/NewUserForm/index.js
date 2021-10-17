import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import axios from "../../data/axios";


const NewUserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const nameChange = (e) => {
        setName(e.currentTarget.value)
    }
   
    const emailChange = (e) => {
        setEmail(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email };

        axios.post("users", data ).then((data) => {
            dispatch({
                type: "SET_USER",
                user: data.data
            })
            // TODO error handling - notify user of error
        })
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="name-new">Full Name</label>
            <input value={name} onChange={nameChange} id="name-new" type="text" name="name-new" required />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={emailChange} id="email-new" type="email" name="email-new" required />
            <input type="submit" />
        </form>
    )
}

export default NewUserForm;