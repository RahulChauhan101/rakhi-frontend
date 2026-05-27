function ProductCard({ product, handleAddToCart }) {
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
    <div className="relative w-full max-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div
        className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold text-white ${badgeClass}`}
      >
        {badgeLabel}
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop";
        }}
      />

      <div className="p-5">
        <h2 className="text-base font-semibold text-gray-900">{product.name}</h2>
        <h3 className="mt-1 text-lg font-bold text-gray-900">₹{product.price}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 text-sm text-gray-700">Stock: {product.stock}</p>
        <p className="text-sm text-gray-700">Rating: ⭐ {product.rating}</p>
        <p className="text-sm text-gray-700">Reviews: {product.reviews}</p>
        <p className="text-sm text-gray-700">Category: {product.category}</p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
          className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
