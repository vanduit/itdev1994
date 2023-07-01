import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartAction';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.cartProduct.products, // Assuming you have a list of products in your Redux store
});

export default connect(mapStateToProps, { addToCart })(ProductList);