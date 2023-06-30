import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartAction';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    );
};

export default connect(null, { removeFromCart })(CartItem);