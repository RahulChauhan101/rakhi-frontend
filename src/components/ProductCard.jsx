function ProductCard({
  product,
  handleAddToCart
}) {

  return (

    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        background: "white",
        boxShadow:
          "0px 0px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        position: "relative"
      }}
    >

      {/* PRODUCT TYPE BADGE */}

      <div
        style={{

          position: "absolute",

          top: "15px",

          left: "15px",

          background:

            product.productType ===
            "bestSeller"

              ? "#ed1818"

              : product.productType ===
                "new"

              ? "#4caf50"

              : "#2196f3",

          color: "white",

          padding: "6px 14px",

          borderRadius: "20px",

          fontSize: "13px",

          fontWeight: "bold",

          zIndex: 10

        }}
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

      {/* PRODUCT IMAGE */}

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover"
        }}
      />

      {/* PRODUCT DETAILS */}

      <div
        style={{
          padding: "20px"
        }}
      >

        <h2>{product.name}</h2>

        <h3>
          ₹{product.price}
        </h3>

        <p>
          {product.description}
        </p>

        <p>
          Stock: {product.stock}
        </p>

        <p>
          Rating:
          ⭐ {product.rating}
        </p>

        <p>
          Reviews:
          {product.reviews}
        </p>

        <p>
          Category:
          {product.category}
        </p>

        {/* ADD TO CART */}

        <button
          onClick={(e) => {

            // STOP PAGE NAVIGATION
            e.stopPropagation();

            handleAddToCart(product);

          }}
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
            borderRadius: "5px"
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>

  );

}

export default ProductCard;