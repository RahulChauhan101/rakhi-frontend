import { useEffect, useState } from "react";

import axios from "axios";

import "./BestSeller.css";

import BASE_URL from "../api/api";

function BestSeller() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        `${BASE_URL}/products`
      );

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  // ADD TO CART
  const handleAddToCart = (product) => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item._id === product._id
    );

    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      cart.push({
        ...product,
        quantity: 1
      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    // UPDATE NAVBAR CART
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Product Added To Cart");

  };

  return (

    <section className="bestSeller">

      <div className="bestSeller-top">

        <div>

          <p>Signature Collection</p>

          <h1>Festive Best Sellers</h1>

        </div>

      </div>

      <div className="bestSeller-container">

        {
          products
            .filter(
              (product) =>

                product.productType ===
                "bestSeller"

                ||

                !product.productType
            )
            .map((product) => (

              <div
                className="bestSeller-card"
                key={product._id}
              >

                <div className="bestSeller-badge">
                  BESTSELLER
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h2>{product.name}</h2>

                <h3>
                  ₹{product.price}
                </h3>

                <p>
                  ⭐ {product.rating}
                </p>

                <button
                  onClick={() =>
                    handleAddToCart(product)
                  }
                >
                  Add To Cart
                </button>

              </div>

            ))
        }

      </div>

    </section>

  );

}

export default BestSeller;