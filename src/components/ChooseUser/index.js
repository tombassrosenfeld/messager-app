import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../data/axios';


const ChooseUser = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            axios.get('users/random')
                .then(response => {
                    setUsers(response.data)
                })
        }
    })

    const handleClick = (user) => {
        dispatch({
            type: "SET_USER",
            user
        })
    }

    return (

        <div className="choose-user">
            <h2>Choose your user</h2>   
            {
                users.map(user => (
                    <button onClick={() => handleClick(user)} key={user.id}>{user.name}</button>
                ))
            }
        </div>   

        
    )
}

export default ChooseUser;