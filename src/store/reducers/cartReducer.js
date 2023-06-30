const initialState = {
    items: [],
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Xử lý logic thêm sản phẩm vào giỏ hàng
            console.log('===item===', state)
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price,
            };
        case 'REMOVE_FROM_CART':
            // Xử lý logic xóa sản phẩm khỏi giỏ hàng
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price,
            };
        case 'CLEAR_CART':
            // Xử lý logic xóa toàn bộ giỏ hàng
            return initialState;
        default:
            return state;
    }
};

export default cartReducer;