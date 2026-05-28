import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/products`);
      setProducts(res.data);
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

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-gray-50 px-3 sm:px-6 py-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          All Products
        </h1>

        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {products.map((product) => (
            <div key={product._id} className="cursor-pointer h-full" onClick={() => handleProductClick(product._id)}>
              <ProductCard product={product} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
