import { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import BASE_URL from "../api/api";

function BestSeller() {

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    fetchProducts();

    // LOAD WISHLIST
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);

  }, []);

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        `${BASE_URL}/products`
      );

      setProducts(
        Array.isArray(res.data)
          ? res.data
          : res.data.products || []
      );

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

  // TOGGLE WISHLIST
  const toggleWishlist = (product) => {

    let updatedWishlist = [...wishlist];

    const exists = updatedWishlist.find(
      (item) => item._id === product._id
    );

    if (exists) {

      updatedWishlist = updatedWishlist.filter(
        (item) => item._id !== product._id
      );

    } else {

      updatedWishlist.push(product);

    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    // UPDATE NAVBAR
    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

  };

  return (

    <section className="bg-gray-50 py-8 sm:py-10 lg:py-14">

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6">

          <div>

            <p className="text-[10px] sm:text-xs font-semibold tracking-[3px] text-pink-700 uppercase">
              Signature Collection
            </p>

            <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Festive Best Sellers
            </h1>

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">

          {
            products
              .filter(
                (product) =>

                  product.productType ===
                  "bestSeller"

                  ||

                  !product.productType
              )
              .map((product) => {

                // CHECK WISHLIST
                const isWishlisted =
                  wishlist.find(
                    (item) =>
                      item._id === product._id
                  );

                return (

                  <div
                    key={product._id}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-2 sm:p-3 lg:p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >

                    {/* TAG */}
                    <div className="absolute left-2 top-2 sm:left-4 sm:top-4 z-10 rounded-full bg-pink-600 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold tracking-wider text-white">
                      BESTSELLER
                    </div>

                    {/* HEART BUTTON */}
                    <button
                      onClick={() =>
                        toggleWishlist(product)
                      }
                      className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-md"
                    >

                      <Heart
                        size={18}
                        fill={
                          isWishlisted
                            ? "red"
                            : "white"
                        }
                        className={`transition-all duration-300 ${
                          isWishlisted
                            ? "text-red-500 scale-110"
                            : "text-gray-400"
                        }`}
                      />

                    </button>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-lg sm:rounded-xl">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-36 sm:h-44 md:h-52 lg:h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="mt-3 sm:mt-4">

                      <h2 className="line-clamp-1 text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                        {product.name}
                      </h2>

                      <div className="mt-2 flex items-center justify-between">

                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                          ₹{product.price}
                        </h3>

                        <p className="text-xs sm:text-sm font-medium text-yellow-500">
                          ⭐ {product.rating || 4.5}
                        </p>

                      </div>

                      {/* BUTTON */}
                      <button
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        className="mt-3 sm:mt-4 w-full rounded-lg sm:rounded-xl bg-gray-900 px-3 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-black active:scale-95"
                      >
                        Add To Cart
                      </button>

                    </div>

                  </div>

                );

              })
          }

        </div>

      </div>

    </section>

  );

}

export default BestSeller;