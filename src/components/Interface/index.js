import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../data/axios';

import Chats from '../Chats';
import Conversation from '../Conversation';

import './Interface.css';

const Interface = () => {
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.user.id);

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
        <div className="interface">
            <Chats />
            <Conversation />
        </div>
    )
}

export default Interface;