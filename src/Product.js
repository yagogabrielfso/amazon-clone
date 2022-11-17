import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({
  id,
  title,
  image,
  price,
  priceFraction,
  previousPrice,
  rating,
  author,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        author: author,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>{author}</small>
        <p className="product__price">
          <span className="product__pricesymbolfraction">$</span>
          <span className="product__pricevalue">{price}</span>
          <small className="product__previousprice">{previousPrice}</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img alt="" src={image}></img>
      <button onClick={addToBasket} className="product__button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
