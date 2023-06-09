import { toast } from 'react-toastify';
const initState = {
    users: [
        { id: '1', name: 'Hoa Hồng', price: 35000, image: 'D:/reactjsbasic/itdev1994/src/assets/images/hoa-hong.jpg' },
        { id: '2', name: 'Hoa Lan', price: 50000, image: 'D:/reactjsbasic/itdev1994/src/assets/images/hoa-hong.jpg' },
        { id: '3', name: 'Hoa Cúc', price: 60000, image: 'D:/reactjsbasic/itdev1994/src/assets/images/hoa-hong.jpg' },
    ],
    editUser: []
}

const rootReducer = (state = initState, action) => {
    // state trạng thái ứng dụng , nơi lưu trữ data của redux
    // action từ phía react truyền action lên như thế nào

    switch (action.type) {
        case 'DELETE_USER':

            let users = state.users;

            users = users.filter(item => item.id !== action.payload.id);
            console.log('>> run into delete user ', users);
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