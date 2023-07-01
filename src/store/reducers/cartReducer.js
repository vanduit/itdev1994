const initialState = {
    items: [],
    total: 0,
    products: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            // Xử lý logic thêm sản phẩm vào giỏ hàng
            // console.log('ADD_TO_CART', newItem)
            return {
                ...state,
                items: [...state.items, newItem],
                total: state.total + newItem.price,
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