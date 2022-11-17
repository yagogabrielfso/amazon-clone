import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/710kOB5LPqL._SX3000_.jpg"
          alt="ring of gods home"
        />
        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businnes Paperback"
            author="Eric Ries"
            price={11.96}
            previousPrice={"$14.99"}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
            price={239.99}
            previousPrice={"$269.99"}
            image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone"
            price={98.99}
            previousPrice={"$115.99"}
            image="https://m.media-amazon.com/images/I/61cSwIDSVbL._AC_SL1000_.jpg"
            rating={5}
          />

          <Product
            id={4}
            title="SAMSUNG Galaxy Watch (46mm, GPS, Bluetooth) – Silver/Black (US Version)"
            price={114.99}
            previousPrice={"$120.00"}
            image="https://m.media-amazon.com/images/I/81ZKNYBwYlL._AC_SL1500_.jpg"
            rating={5}
          />

          <Product
            id={5}
            title="The Organized Mind: Thinking Straight in the Age of Information Overload"
            author="Daniel J. Levitin and Roberto Grey"
            price={15.86}
            previousPrice={"$19.99"}
            image="https://m.media-amazon.com/images/P/B00G3L6KOA.01._SCLZZZZZZZ_SX500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Kindle Paperwhite Signature Edition Essentials Bundle including Kindle Paperwhite Signature Edition - Wifi, Without Ads, Amazon Leather Cover, and Wireless charging dock"
            price={99.99}
            previousPrice={"$126.99"}
            image="https://m.media-amazon.com/images/I/51MOtu7P04L._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
