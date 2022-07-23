import React from "react";
import { useGlobalContext } from "../../Context/Context";

const FoodItem = (item) => {
  const { id, category, name, desc, imgurl, price } = item;
  const { cart, dispatch } = useGlobalContext();

  return (
    <article className="item-container">
      <img className="food-img" alt={name} src={imgurl} />
      <div className="food-info">
        <header className="heading">
          <span className="name">{name}</span>
          <span className="price">Rs.{price}</span>
        </header>
        <p>{desc}</p>
        {cart.some((p) => p.id === id) ? (
          <button
            style={{ backgroundColor: "white", color:"black" }}
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default FoodItem;
