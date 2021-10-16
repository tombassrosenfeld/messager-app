
const updateChats = (state, { chats, messages }) => {
    return { 
        ...state,
        chats,
        messages,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER": return { ...state, user: action.user }
        case "UPDATE_USERS": return { ...state, users: action.users };
        
        case "UPDATE_CHATS": return updateChats(state, action);

        default: return state;
    }
}

export default reducer;