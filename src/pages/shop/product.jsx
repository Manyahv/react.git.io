import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, name, price, productImage,type,color,gender,quantity } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b> Name:{name}</b>
        </p>
        <p> Price: {price}</p>
        <p>  Type:{type}</p>
        <p> Gender:{gender}</p>
        <p> color:{color}</p>
        <p> Quantity{quantity}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
