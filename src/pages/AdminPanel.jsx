import { useEffect, useState } from "react";

import axios from "axios";

import BASE_URL from "../api/api";

import "./AdminPanel.css";

function AdminPanel() {

  const [formData, setFormData] = useState({

    name: "",
    price: "",
    image: "",
    description: "",
    stock: "",
    rating: "",
    reviews: "",
    category: "",
    productType: "bestSeller"

  });

  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS
  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const res =
        await axios.get(
          `${BASE_URL}/products`
        );

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  // ADD PRODUCT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res =
        await axios.post(

          `${BASE_URL}/products/add`,

          formData

        );

      alert(
        res.data.message
      );

      // RESET FORM
      setFormData({

        name: "",
        price: "",
        image: "",
        description: "",
        stock: "",
        rating: "",
        reviews: "",
        category: "",
        productType:
          "bestSeller"

      });

      // REFRESH PRODUCTS
      fetchProducts();

    } catch (error) {

      console.log(error);

      alert(
        "Error Adding Product"
      );

    }

  };

  return (

    <div className="admin-page">

      <div className="admin-container">

        <h1 className="admin-title">
          Add Product
        </h1>

        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={
              formData.description
            }
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="reviews"
            placeholder="Reviews"
            value={formData.reviews}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={
              formData.category
            }
            onChange={handleChange}
            required
          />

          {/* PRODUCT TYPE */}

          <select
            name="productType"
            value={
              formData.productType
            }
            onChange={handleChange}
          >

            <option value="bestSeller">
              Best Seller
            </option>

            <option value="new">
              New
            </option>

            <option value="trending">
              Trending
            </option>

          </select>

          <button
            type="submit"
            className="admin-btn"
          >
            Add Product
          </button>

        </form>

      </div>

      {/* ================= PRODUCTS ================= */}

      <div
        style={{
          width: "100%",
          marginTop: "40px"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          All Products
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >

          {
            products.map((product) => (

              <div
                key={product._id}
                style={{
                  width: "280px",
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow:
                    "0 0 10px rgba(0,0,0,0.1)",
                  position: "relative"
                }}
              >

                {/* PRODUCT TYPE */}

                <div
                  style={{

                    position: "absolute",

                    top: "15px",

                    left: "15px",

                    background:

                      product.productType ===
                      "bestSeller"

                        ? "#ff9800"

                        : product.productType ===
                          "new"

                        ? "#4caf50"

                        : "#2196f3",

                    color: "white",

                    padding: "5px 12px",

                    borderRadius: "20px",

                    fontSize: "12px",

                    fontWeight: "bold"

                  }}
                >

                  {
                    product.productType ===
                    "bestSeller"

                      ? "Best Seller"

                      : product.productType ===
                        "new"

                      ? "New"

                      : "Trending"
                  }

                </div>

                {/* IMAGE */}

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover"
                  }}
                />

                {/* DETAILS */}

                <div
                  style={{
                    padding: "15px"
                  }}
                >

                  <h2>
                    {product.name}
                  </h2>

                  <h3>
                    ₹{product.price}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <p>
                    Stock:
                    {product.stock}
                  </p>

                  <p>
                    ⭐
                    {product.rating}
                  </p>

                  <p>
                    Reviews:
                    {product.reviews}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default AdminPanel;