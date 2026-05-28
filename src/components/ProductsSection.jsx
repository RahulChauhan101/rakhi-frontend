import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import BASE_URL from "../api/api";

function ProductsSection({ title = "Products", limit, viewAllLabel = "View All Products" }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/products`);
      setProducts(
        Array.isArray(res.data)
          ? res.data
          : res.data.products || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Product Added To Cart");
  };

  const typeFilter = searchParams.get("type")?.trim();
  const categoryFilter = searchParams.get("category")?.trim();
  const searchQuery = searchParams.get("search")?.trim().toLowerCase() || "";

  const filteredProducts = products.filter((product) => {
    const matchesType = !typeFilter || product.productType === typeFilter;
    const matchesCategory = !categoryFilter || product.category?.toLowerCase() === categoryFilter.toLowerCase();
    const text = `${product.name} ${product.description} ${product.category} ${product.brand}`.toLowerCase();
    const matchesSearch = !searchQuery || text.includes(searchQuery);
    return matchesType && matchesCategory && matchesSearch;
  });

  const displayedProducts = typeof limit === "number" ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="bg-gray-50 py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
            <p className="mt-1 text-sm text-gray-500">Browse products available in the store.</p>
          </div>
          {limit && (
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="inline-flex items-center justify-center rounded-2xl bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              {viewAllLabel}
            </button>
          )}
        </div>

        <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProducts.map((product) => (
            <div key={product._id} className="cursor-pointer h-full" onClick={() => navigate(`/product/${product._id}`)}>
              <ProductCard product={product} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
