
const initState = {
    users: [
        { id: '1', name: 'ABC' },
        { id: '2', name: 'ABCD' },
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;