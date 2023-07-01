export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const removeFromCart = item => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});