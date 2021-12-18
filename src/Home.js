import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img"
                src="https://live.staticflickr.com/65535/51658933079_4f9e8dadf7_k.jpg" alt="" />
                </div>
                <div className="home__row">
                <Product
                    id="12321341"
                    title="MacBook Pro"
                    price={999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/313CFbI-YjL._AC_SY400_.jpg" />
                <Product
                    id="12321341"
                    title="OnePlus 9"
                    price={699}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_SY400_.jpg" />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
                </div> 
                <div className="home__row">
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                </div> 
                <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                </div>
            </div> 
       )
}

export default Home
