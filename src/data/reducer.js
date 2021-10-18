
const updateChats = (state, { chats, messages }) => {
    return { 
        ...state,
        chats,
        messages,
    }
}

const addMessage = (state, { message }) => {
    return {
        ...state, 
        messages: [
            ...state.messages,
            message,
        ]
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER": return { ...state, user: action.user }
        case "SET_CURRENT_CHAT": return { ...state, currentChat: action.chatID }
        case "UPDATE_USERS": return { ...state, users: action.users };
        case "UPDATE_CHATS": return updateChats(state, action);
        case "ADD_MESSAGE": return addMessage(state, action)

        default: return state;
    }
}

export default reducer;