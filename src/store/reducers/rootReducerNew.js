
const initSate = {
    listUserData: [],
    listEditData: {}
}

const rootReducerNew = (state = initSate, action) => {
    switch (action.type) {
        case 'SET_USER_LIST':
            return {
                ...state,
                listUserData: action.payload,
            };
        case 'DELETE_USER':
            let filteredUsers = state.listUserData.filter(listUserData => listUserData.id !== action.payload.id);
            return {
                ...state,
                listUserData: filteredUsers
            };
        default:
            return state
    }
}

export default rootReducerNew;