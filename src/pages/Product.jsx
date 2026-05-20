import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";


function Products() {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    fetchProducts();

  }, []);

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
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

    // NAVBAR CART COUNT UPDATE
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Product Added To Cart");

  };

  // PRODUCT DETAILS PAGE
  const handleProductClick = (id) => {

    navigate(`/product/${id}`);

  };

  return (

    <div
      style={{
        padding: "50px",
        background: "#f5f5f5"
      }}
    >

      <h1>All Products</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {
          products.map((product) => (

            <div key={product._id}>

              <div
                onClick={() =>
                  handleProductClick(product._id)
                }
                style={{
                  cursor: "pointer"
                }}
              >

                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Products;