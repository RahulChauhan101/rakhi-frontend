import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

function ProductCard({ product, handleAddToCart }) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(wishlist.some((item) => item._id === product._id));

    const handleWishlistUpdate = () => {
      const updated = JSON.parse(localStorage.getItem("wishlist")) || [];
      setIsInWishlist(updated.some((item) => item._id === product._id));
    };

    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    return () => window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
  }, [product._id]);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const index = wishlist.findIndex((item) => item._id === product._id);

    if (index > -1) {
      wishlist.splice(index, 1);
      setIsInWishlist(false);
    } else {
      wishlist.push(product);
      setIsInWishlist(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const badgeClass =
    product.productType === "bestSeller"
      ? "bg-pink-600"
      : product.productType === "new"
        ? "bg-green-600"
        : "bg-blue-600";

  const badgeLabel =
    product.productType === "bestSeller"
      ? "Best Seller"
      : product.productType === "new"
        ? "New"
        : "Trending";

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div
        className={`absolute left-2 sm:left-4 top-2 sm:top-4 z-10 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-white ${badgeClass}`}
      >
        {badgeLabel}
      </div>

      <button
        type="button"
        onClick={toggleWishlist}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-red-50 transition"
      >
        <Heart
          className={`h-5 w-5 sm:h-6 sm:w-6 transition ${
            isInWishlist
              ? "fill-red-600 text-red-600"
              : "text-gray-400 hover:text-red-400"
          }`}
        />
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="h-40 sm:h-48 w-full object-cover flex-shrink-0"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop";
        }}
      />

      <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-grow">
        <h2 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">{product.name}</h2>
        <h3 className="mt-1 text-base sm:text-lg font-bold text-gray-900">₹{product.price}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm text-gray-600 flex-grow">{product.description}</p>
        <div className="mt-2 space-y-0.5 text-xs sm:text-sm text-gray-700">
          <p>Stock: {product.stock}</p>
          <p>Rating: ⭐ {product.rating}</p>
          <p>Reviews: {product.reviews}</p>
          <p>Category: {product.category}</p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
          className="mt-3 sm:mt-4 w-full rounded-lg sm:rounded-xl bg-gray-900 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-black flex-shrink-0"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
