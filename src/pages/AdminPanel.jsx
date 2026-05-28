import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import BASE_URL from "../api/api";

function AdminPanel() {

  // =========================
  // STATES
  // =========================

  const [admins, setAdmins] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  const [imagePreview,
    setImagePreview] =
      useState([]);

  // UPDATE POPUP
  const [isUpdateOpen,
    setIsUpdateOpen] =
      useState(false);

  const [editId, setEditId] =
    useState(null);

  // =========================
  // USER
  // =========================

  const storedUser =
    localStorage.getItem("user");

  let user = {};

  try {

    user = storedUser
      ? JSON.parse(storedUser)
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

        description: "",

        price: "",

        discountPrice: "",

        brand: "",

        category: "",

        subCategory: "",

        stock: "",

        reviews: "",

        images: [],

        productType:
          "bestSeller"

      });

  // =========================
  // FETCH
  // =========================

  useEffect(() => {

    fetchProducts();

    fetchAdmins();

  }, []);

  // =========================
  // FETCH PRODUCTS
  // =========================

  const fetchProducts =
    async () => {

      try {

        const res =
          await axios.get(

            `${BASE_URL}/products`

          );

        setProducts(

          Array.isArray(
            res.data
          )

            ? res.data

            : res.data.products || []

        );

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // FETCH ADMINS
  // =========================

  const fetchAdmins =
    async () => {

      try {

        const res =
          await axios.get(

            `${BASE_URL}/auth/admins`

          );

        setAdmins(

          Array.isArray(
            res.data
          )

            ? res.data

            : res.data.admins || []

        );

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // INPUT
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
  // MULTIPLE IMAGE
  // =========================

  const handleImageChange =
    (e) => {

      const files =
        Array.from(
          e.target.files
        );

      const imageArray = [];

      const previewArray = [];

      files.forEach((file) => {

        const reader =
          new FileReader();

        reader.onloadend = () => {

          imageArray.push(
            reader.result
          );

          previewArray.push(
            reader.result
          );

          if (
            imageArray.length ===
            files.length
          ) {

            setFormData({

              ...formData,

              images:
                imageArray

            });

            setImagePreview(
              previewArray
            );

          }

        };

        reader.readAsDataURL(
          file
        );

      });

    };

  // =========================
  // RESET
  // =========================

  const resetForm = () => {

    setEditId(null);

    setFormData({

      name: "",

      description: "",

      price: "",

      discountPrice: "",

      brand: "",

      category: "",

      subCategory: "",

      stock: "",

      reviews: "",

      images: [],

      productType:
        "bestSeller"

    });

    setImagePreview([]);

  };

  // =========================
  // ADD PRODUCT
  // =========================

  const handleAddProduct =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(

          `${BASE_URL}/products/add`,

          formData

        );

        alert(
          "Product Added"
        );

        resetForm();

        fetchProducts();

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // UPDATE PRODUCT
  // =========================

  const handleUpdateProduct =
    async (e) => {

      e.preventDefault();

      try {

        await axios.put(

          `${BASE_URL}/products/${editId}`,

          formData

        );

        alert(
          "Product Updated"
        );

        setIsUpdateOpen(
          false
        );

        resetForm();

        fetchProducts();

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // DELETE
  // =========================

  const handleDelete =
    async (id) => {

      const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );

      if (!confirmed) {
        return;
      }

      try {

        await axios.delete(

          `${BASE_URL}/products/${id}`

        );

        alert(
          "Product Deleted"
        );

        fetchProducts();

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // EDIT
  // =========================

  const handleEdit =
    (product) => {

      setEditId(product._id);

      setIsUpdateOpen(true);

      setFormData({

        name:
          product.name || "",

        description:
          product.description || "",

        price:
          product.price || "",

        discountPrice:
          product.discountPrice || "",

        brand:
          product.brand || "",

        category:
          product.category || "",

        subCategory:
          product.subCategory || "",

        stock:
          product.stock || "",

        reviews:
          product.reviews || "",

        images:
          product.images || [],

        productType:
          product.productType || "bestSeller"

      });

      setImagePreview(
        product.images || []
      );

    };

  return (

    <div className="min-h-screen bg-gray-100 pt-[90px] sm:pt-[100px]">

      <div className="mx-auto max-w-7xl p-3 sm:p-4">

        {/* TOP */}

        <div className="mb-5 rounded-3xl bg-white p-4 shadow-md">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}

            <div>

              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">

                Admin Dashboard

              </h1>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <p>Welcome {user?.name || "Admin"}</p>
                {user?.name && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    Logged in
                  </span>
                )}
              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-wrap items-center gap-3">

              {

                admins.map((admin) => (

                  <div
                    key={admin._id}
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm ${
                      admin.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >

                    {admin.name}

                  </div>

                ))

              }

              <div className="rounded-2xl bg-pink-100 px-5 py-2 text-sm font-bold text-pink-700 shadow-sm">

                {products.length} Products

              </div>

            </div>

          </div>

        </div>

        {/* MAIN */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[420px_1fr]">

          {/* LEFT */}

          <div className="lg:sticky lg:top-24 h-fit">

            <div className="rounded-3xl bg-white p-5 shadow-md">

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editId ? "Update Product" : "Add Product"}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {editId
                      ? "Edit the selected product details and save changes."
                      : "Add a new product to the catalog."}
                  </p>
                </div>

                <div className="rounded-xl bg-pink-100 px-4 py-2 text-xs font-semibold text-pink-700">

                  {editId ? "Editing" : "New Product"}

                </div>

              </div>

              {/* FORM */}

              <form
                onSubmit={
                  editId
                    ? handleUpdateProduct
                    : handleAddProduct
                }
                className="space-y-4"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                />

                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                />

                {/* PRICE */}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                  />

                  <input
                    type="number"
                    name="discountPrice"
                    placeholder="Discount"
                    value={formData.discountPrice}
                    onChange={handleChange}
                    className="rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                  />

                </div>

                {/* STOCK */}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                  />

                  <input
                    type="number"
                    name="reviews"
                    placeholder="Reviews"
                    value={formData.reviews}
                    onChange={handleChange}
                    className="rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                  />

                </div>

                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                />

                {/* CATEGORY */}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                  />

                  <input
                    type="text"
                    name="subCategory"
                    placeholder="Sub Category"
                    value={formData.subCategory}
                    onChange={handleChange}
                    className="rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
                  />

                </div>

                {/* MULTIPLE IMAGE */}

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm"
                />

                {/* PREVIEW */}

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                  {

                    imagePreview.map((img, index) => (

                      <img
                        key={index}
                        src={img}
                        alt=""
                        className="h-24 w-full rounded-2xl object-cover"
                      />

                    ))

                  }

                </div>

                {/* TYPE */}

                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:border-pink-500"
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

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-pink-600 p-3 text-sm font-bold text-white transition hover:bg-pink-700"
                  >
                    {editId ? "Update Product" : "Add Product"}
                  </button>

                  {editId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

              </form>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-gray-900">

                All Products

              </h2>

              <div className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-sm">

                {products.length} Products

              </div>

            </div>

            {/* PRODUCT GRID */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">

              {

                products.map((product) => (

                  <div
                    key={product._id}
                    className="overflow-hidden rounded-3xl bg-white shadow-md"
                  >

                    {/* IMAGE */}

                    <div className="relative">

                      <img
                        src={
                          product.images?.[0] ||
                          "https://via.placeholder.com/300"
                        }
                        alt={product.name}
                        className={`h-60 w-full object-cover ${
                          product.stock <= 0
                            ? "blur-[2px] grayscale"
                            : ""
                        }`}
                      />

                      {

                        product.stock <= 0 && (

                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">

                            <span className="rounded-2xl bg-red-600 px-5 py-2 text-sm font-bold text-white">

                              OUT OF STOCK

                            </span>

                          </div>

                        )

                      }

                    </div>

                    {/* CONTENT */}

                    <div className="p-4">

                      <h3 className="line-clamp-1 text-lg font-bold text-gray-900">

                        {product.name}

                      </h3>

                      <div className="mt-2 flex items-center gap-2">

                        <p className="text-lg font-bold text-pink-600">

                          ₹{product.price}

                        </p>

                        {

                          product.discountPrice > 0 && (

                            <p className="text-sm text-gray-400 line-through">

                              ₹{product.discountPrice}

                            </p>

                          )

                        }

                      </div>

                      <p className="mt-2 line-clamp-2 text-sm text-gray-600">

                        {product.description}

                      </p>

                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        <span className="rounded-xl bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                          Stock: {product.stock}
                        </span>
                        <span className="rounded-xl bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          Reviews: {product.reviews || 0}
                        </span>
                        <span className="rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                          Brand: {product.brand || "—"}
                        </span>
                        <span className="rounded-xl bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Category: {product.category || "—"}
                        </span>
                      </div>

                      {/* BUTTONS */}

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        <button
                          onClick={() =>
                            handleEdit(product)
                          }
                          className="w-full rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >

                          Edit

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(product._id)
                          }
                          className="w-full rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                        >

                          Delete

                        </button>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminPanel;