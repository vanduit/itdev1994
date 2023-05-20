const initState = {
    users: [
        { id: '1', name: 'ABC' },
        { id: '2', name: 'ABCD' },
        { id: '3', name: 'DUITDEV' },
    ]
}

const rootReducer = (state = initState, action) => {
    // state trạng thái ứng dụng , nơi lưu trữ data của redux
    // action từ phía react truyền action lên như thế nào

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>> run into delete user ', action)
            break;
        default:
            return state;
    }
}

export default rootReducer;