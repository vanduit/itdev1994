import { toast } from 'react-toastify';
const initState = {
    users: [
        { id: '1', name: 'ABC' },
        { id: '2', name: 'ABCD' },
        { id: '3', name: 'DUITDEV' },
    ],
    editUser: []
}

const rootReducer = (state = initState, action) => {
    // state trạng thái ứng dụng , nơi lưu trữ data của redux
    // action từ phía react truyền action lên như thế nào

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>> run into delete user ', action)

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);

            return {
                ...state, users
            }
        case 'TITLE_EDIT':
            let dataEdit = action.payload;
            return {
                ...state, editUser: dataEdit
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        case 'EDIT_USER':
            let dataPayload = action.payload;
            let listUser = state.users;
            let listEditUser = state.editUser;
            let isChkEmty = Object.keys(listEditUser).length === 0;
            if (isChkEmty === false && listEditUser.id === dataPayload.id) {
                let listUserCopy = [...listUser];
                let objIndex = listUserCopy.findIndex((listEditUser => listEditUser.id === dataPayload.id));
                listUserCopy[objIndex].name = listEditUser.name;


                return {
                    ...state,
                    users: listUserCopy,
                    editUser: []
                }
            }
            return {
                ...state,
                editUser: dataPayload
            }
        default:
            return state;
    }
}



export default rootReducer;