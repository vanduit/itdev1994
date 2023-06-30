import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = ({ cartItems, total }) => {
    if (!cartItems || cartItems.length === 0) {
        return (
            <div>
                <h2>Cart</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <p>Total: {total}</p>
            <button>Checkout</button>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: state.items || [], // Kiểm tra nếu items không tồn tại, gán một mảng rỗng làm giá trị mặc định
    total: state.total,
});

export default connect(mapStateToProps)(Cart);