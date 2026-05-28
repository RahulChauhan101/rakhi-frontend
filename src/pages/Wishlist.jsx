import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(items);
  }, []);

  const saveWishlist = (updatedWishlist) => {
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item._id !== productId
    );
    saveWishlist(updatedWishlist);
  };

  const addToCart = (product) => {
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

  return (
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-gray-50 px-3 sm:px-6 py-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          My Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="mt-8 text-center">
            <Heart className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-300" />
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Your wishlist is empty. Start adding your favorite products!
            </p>
          </div>
        ) : (
          <>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""}
            </p>

            <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
              {wishlistItems.map((item) => (
                <div
                  key={item._id}
                  className="relative w-full h-full flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(item._id)}
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-red-50 transition"
                  >
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 fill-red-600 text-red-600" />
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 sm:h-48 w-full object-cover flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop";
                    }}
                  />

                  <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-grow">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
                      {item.name}
                    </h2>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-gray-900">
                      ₹{item.price}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm text-gray-600 flex-grow">
                      {item.description}
                    </p>
                    <div className="mt-2 space-y-0.5 text-xs sm:text-sm text-gray-700">
                      <p>Stock: {item.stock}</p>
                      <p>Rating: ⭐ {item.rating}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="mt-3 sm:mt-4 w-full rounded-lg sm:rounded-xl bg-gray-900 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-black flex-shrink-0"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
