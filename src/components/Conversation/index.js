import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Conversation.css';

import axios from "../../data/axios";

const Conversation = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");

    const currentChat = useSelector(state => state.currentChat)
    const userID = useSelector(state => state.user.id)

    const messages = useSelector(state => state.messages).filter(message => message.chat_id === currentChat);

    const handleChange = (e) => {
        setMessage(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        axios.post('messages', {
            content: message,
            chat_id: currentChat,
            user_id: userID,
        }).then(({data}) => dispatch({
            type: "ADD_MESSAGE",
            message: data
        }))
    }

    return (
        <div className="conversation">
            <div className="conversation__message-wrapper" >
                {
                    messages.map(message => (
                        <div key={message.id} className="message">
                            <p>{ message.content }</p>
                        </div>
                    ))
                }
            </div>
            {
                currentChat === null ? null :
                <form className="conversation__input" onSubmit={handleSubmit} action="">
                    <label className="conversation__input-label"  htmlFor="message">message</label>
                    <input id="message" className="conversation__text-area" value={message} onChange={handleChange} />
                    <input className="conversation__submit" type="submit" />
                </form>
            }
        </div>
    )
}

export default Conversation;