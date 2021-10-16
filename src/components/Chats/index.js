import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../data/axios'

const Chats = () => {
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.userID);
    useEffect(() => {
        axios.get(`users/${ userID }/chats`).then((data) => {
            const { chats, messages } = data.data;
            dispatch({
                type: "UPDATE_CHATS",
                chats,
                messages,
            })
        })
    })
    return (
        <>
            <h2>Chats</h2>
        </>
    )
}

export default Chats;