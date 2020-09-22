import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.Product)
    return (
        <div className="cardBlock">
            <div className="cardElement">
                <img src={props.products.img} alt=""/>
                <h3>{props.products.name}</h3>
                <p>{props.products.description}</p>
                <p>Price: {props.products.price}</p>
                <button onClick={() => props.handleCart(props.products) }>Add To cart</button>
            </div>
        </div>
    );
};

export default Product;