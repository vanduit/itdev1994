import axios from "axios";
const initSate = {
    listUserData: [],
    listEditData: {}
}

const rootReducerNew = async (state = initSate, action) => {
    switch (action.type) {
        case 'SET_USER_LIST':
            return {
                ...state,
                listUserData: action.payload,
            };
        case 'DELETE_USER':
            let updatedList = state.listUserData.filter(
                (userId) => userId.id !== action.payload
            );
            return {
                ...state,
                listUserData: updatedList || [],
            }
        default:
            return state
    }
}

export default rootReducerNew;