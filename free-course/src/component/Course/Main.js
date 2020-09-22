import React, { useState } from "react";
import Cart from "../Cart/Cart";
import fakeData from "../fakeData/fakeData";
import Product from "../Product/Product";
import "./Main.css";
const Main = () => {
    const [cart, setCart] = useState([])
    const handleCart = (product) => {
        console.log('product added',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
//   console.log(fakeData);

  return (
    <div className="cardBody">
      <div className="card">
        {fakeData.map((course) => (
          <Product products={course} handleCart={handleCart}></Product>
        ))}
      </div>
      <div className="cart">
        <div>
            <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
