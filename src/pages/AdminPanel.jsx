import {

  useEffect,
  useState

} from "react";

import axios from "axios";

import BASE_URL from "../api/api";

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
        const reader = new FileReader();

        reader.onloadend = () => {
          const imageData = reader.result;

          setFormData({
            ...formData,
            image: imageData
          });

          setImagePreview(imageData);
        };

        reader.readAsDataURL(file);

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

    <div className="min-h-[calc(100vh-5rem)] bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-12">

          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                All Admins
              </h3>

  {
    admins.map((admin) => (

<div
  key={admin._id}
className={`mt-4 rounded-xl border px-4 py-3 ${
  admin.isActive
    ? "border-green-200 bg-green-50"
    : "border-gray-200 bg-white"
}`}
>
        <h4>{admin.name}</h4>

        <p>{admin.email}</p>

      </div>

    ))
  }

</div>
          </aside>

      {/* LEFT SIDE */}

      <main className="lg:col-span-5">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        {/* ADMIN INFO */}

        <div className="flex items-center justify-between">

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

        <h1 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
          Add Product
        </h1>

        {/* FORM */}

        <form
          className="mt-5 grid gap-3"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm"
          />

          {
            imagePreview && (

              <img
                src={imagePreview}
                alt="Preview"
                className="h-40 w-full rounded-xl object-cover"
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
            className="min-h-28 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <input
            type="number"
            name="reviews"
            placeholder="Reviews"
            value={formData.reviews}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <select
            name="productType"
            value={
              formData.productType
            }
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
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
            className="mt-2 w-full rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-700"
          >

            Add Product

          </button>

        </form>

      </div>
      </main>

      {/* RIGHT SIDE */}

      <section className="lg:col-span-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-lg font-bold tracking-tight text-gray-900">
          All Products
        </h1>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

          {
            products.map((product) => (

              <div
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4"
                key={product._id}
              >

                <div
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold ${
                    product.productType === "bestSeller"
                      ? "bg-pink-600 text-white"
                      : product.productType === "new"
                        ? "bg-blue-600 text-white"
                        : "bg-amber-500 text-white"
                  }`}
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
                  className="h-40 w-full rounded-xl object-cover"
                />

                <div className="mt-4">

                  <h2>
                    {product.name}
                  </h2>

                  <h3>
                    ₹{product.price}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {product.description}
                  </p>

                  <p className="mt-3 text-sm text-gray-700">
                    Stock:
                    {product.stock}
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    ⭐
                    {product.rating}
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    Reviews:
                    {product.reviews}
                  </p>

                </div>

              </div>

            ))
          }

        </div>
        </div>
      </section>

        </div>
      </div>
    </div>

  );

}

export default AdminPanel;