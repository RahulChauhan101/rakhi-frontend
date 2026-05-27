import { useEffect, useState } from "react";

import axios from "axios";

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

    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-pink-700">
              SIGNATURE COLLECTION
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Festive Best Sellers
            </h1>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                key={product._id}
              >

                <div className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-[11px] font-semibold tracking-wider text-white">
                  BESTSELLER
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full rounded-xl object-cover"
                />

                <h2 className="mt-4 line-clamp-1 text-base font-semibold text-gray-900">
                  {product.name}
                </h2>

                <div className="mt-1 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                  </h3>
                  <p className="text-sm font-medium text-gray-700">
                    ⭐ {product.rating}
                  </p>
                </div>

                <button
                  onClick={() =>
                    handleAddToCart(product)
                  }
                  className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black"
                >
                  Add To Cart
                </button>

              </div>

            ))
        }

      </div>
      </div>
    </section>

  );

}

export default BestSeller;