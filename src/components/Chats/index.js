import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Chats.css'

const Chats = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state) => state.chats);
   
    const handleClick = (chatID) => {
        dispatch({
            type: "SET_CURRENT_CHAT",
            chatID
        })
    }

    return (
        <div className="chats">
            <h2>Chats</h2>
            <div className="chat-list">
                {
                    chats.map(chat => (
                        <button className="chat__button" key={chat.id} onClick={() => handleClick(chat.id) }>{chat.name}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Chats;