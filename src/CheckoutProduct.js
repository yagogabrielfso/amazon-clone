import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";



function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  

  return (        
    <>         
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" alt="" src={image}></img>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <small>$</small>
          <strong>{price}</strong>
          <p className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </p>
          <button
            onClick={removeFromBasket}
            className="checkoutProduct__remove">
            Remove from Basket
          </button>
        </div>
      </div>         
    </>    
      
  );
}

export default CheckoutProduct;
