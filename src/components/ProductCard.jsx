function ProductCard({ product, handleAddToCart }) {

  return (

    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        background: "white",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        transition: "0.3s"
      }}
    >

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "20px" }}>

        <h2>{product.name}</h2>

        <h3>₹{product.price}</h3>

        <p>{product.description}</p>

        <p>
          Stock: {product.stock}
        </p>

        <p>
          Rating: ⭐ {product.rating}
        </p>

        <p>
          Reviews: {product.reviews}
        </p>

        <p>
          Category: {product.category}
        </p>

        <button
          onClick={(e) => {

            // STOP PRODUCT PAGE NAVIGATION
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