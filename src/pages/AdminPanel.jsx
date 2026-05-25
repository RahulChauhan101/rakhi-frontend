import {

  useEffect,
  useState

} from "react";

import axios from "axios";

import BASE_URL from "../api/api";

import "./AdminPanel.css";

function AdminPanel() {

  // =========================
  // SAFE USER
  // =========================

  const [admins, setAdmins] = useState([]);

  const storedUser =
    localStorage.getItem(
      "user"
    );

  let user = {};

  try {

    user = storedUser
      ? JSON.parse(
          storedUser
        )
      : {};

  } catch (error) {

    user = {};

  }

  // =========================
  // FORM DATA
  // =========================

  const [formData,
    setFormData] =
      useState({

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

  // =========================
  // IMAGE PREVIEW
  // =========================

  const [imagePreview,
    setImagePreview] =
      useState("");

  // =========================
  // PRODUCTS
  // =========================

  const [products,
    setProducts] =
      useState([]);

  // =========================
  // FETCH PRODUCTS
  // =========================

useEffect(() => {

  fetchProducts();

  fetchAdmins();

}, []);

  const fetchProducts =
    async () => {

      try {

        const res =
          await axios.get(

            `${BASE_URL}/products`

          );

        setProducts(
          res.data
        );

      } catch (error) {

        console.log(
          error
        );

      }

    };

    const fetchAdmins = async () => {

  try {

    const res = await axios.get(
      `${BASE_URL}/auth/admins`
    );

    setAdmins(res.data);

  } catch (error) {

    console.log(error);

  }

};

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value

      });

    };

  // =========================
  // IMAGE SELECT
  // =========================

  const handleImageChange =
    (e) => {

      const file =
        e.target.files[0];

      if (file) {

        const imageURL =
          URL.createObjectURL(
            file
          );

        setFormData({

          ...formData,

          image: imageURL

        });

        setImagePreview(
          imageURL
        );

      }

    };

  // =========================
  // ADD PRODUCT
  // =========================

  const handleSubmit =
    async (e) => {

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

        // RESET
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

        setImagePreview("");

        // REFRESH
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

      <div className="all-admins">

  <h3>All Admins</h3>

  {
    admins.map((admin) => (

<div
  key={admin._id}
className={`admin-user ${
  admin.isActive
    ? "active"
    : ""
}`}
>
        <h4>{admin.name}</h4>

        <p>{admin.email}</p>

      </div>

    ))
  }

</div>

      {/* LEFT SIDE */}

      <div className="admin-container">

        {/* ADMIN INFO */}

        <div className="admin-top">

          <div>

            <h2>
              {user?.name || "Admin"}
            </h2>

            <p>
              Welcome Back 👋
            </p>

          </div>

        </div>

        {/* TITLE */}

        <h1 className="admin-title">
          Add Product
        </h1>

        {/* FORM */}

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
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
            required
          />

          {
            imagePreview && (

              <img
                src={imagePreview}
                alt="Preview"
                className="preview-image"
              />

            )
          }

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

      {/* RIGHT SIDE */}

      <div className="products-section">

        <h1 className="products-title">
          All Products
        </h1>

        <div className="products-grid">

          {
            products.map((product) => (

              <div
                className="product-card"
                key={product._id}
              >

                <div
                  className={`product-badge ${product.productType}`}
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

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="product-details">

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