import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";






function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/32/br-events/2018/giftfinder/gridnarrow1500x180_2._CB473297076_.jpg"
          alt=""
        />
        <strong>{user ? "Hello, " + user.email : " Hello, guest"}</strong>
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>          
            {basket.map((item) => (   
                <CheckoutProduct
                id={item?.id}
                title={item?.title}
                rating={item?.rating}
                image={item?.image}
                price={item?.price}
                />                                         
            ))}                  
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
