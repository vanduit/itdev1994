import axios from "axios";

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
            let users = state.listUserData;
            users = users.filter(users => users.id !== action.payload.id);
            console.log('TEST DELETE_USER', users);
            axios.get("https://reqres.in/api/users?page=2")
                .then(response => {
                    const data = response.data;
                    return {
                        ...state,
                        listUserData: data
                    };
                })
                .catch(error => {
                    console.log(error);
                    return state;
                });
        case 'CREATE_USER':
            console.log('CREATE_USER', action.payload)
        default:
            return state
    }
}

export default rootReducerNew;