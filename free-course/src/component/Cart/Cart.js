import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    // const total = cart.reduce((total , products) => total + (products.price), 0);
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        console.log(product.price)
        total = total + parseInt(product.price);
    }
    return (
        <div>
             <h2>cart Summery</h2>
             <p>Total course : {cart.length}</p>
             <p>Total Amount : {total}</p>
        </div>
    );
};

export default Cart;