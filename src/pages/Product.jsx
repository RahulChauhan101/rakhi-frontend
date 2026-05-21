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

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        // "http://localhost:5000/api/products"
        `${BASE_URL}/api/products`
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

    // NAVBAR CART COUNT UPDATE
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Product Added To Cart");

  };

  // PRODUCT DETAILS PAGE
  const handleProductClick = (id) => {

    navigate(`/product/${id}`);

  };

  return (

    <div
      style={{
        padding: "50px",
        background: "#f5f5f5"
      }}
    >

      <h1>All Products</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {
          products.map((product) => (

            <div key={product._id}>

              <div
                onClick={() =>
                  handleProductClick(product._id)
                }
                style={{
                  cursor: "pointer"
                }}
              >

                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Products;

// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import { useNavigate } from "react-router-dom";

// function Products() {

//   const [products, setProducts] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {

//     const demoProducts = [
//       {
//         _id: "1",
//         name: "The Royal Heritage Box",
//         price: 6999,
//         image:
//           "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1170&auto=format&fit=crop",
//         description: "Premium Rakhi, Sweets, Dry Fruits",
//         stock: 10,
//         rating: 4.9,
//         reviews: 124,
//         category: "Luxury Hamper",
//       },
//       {
//         _id: "2",
//         name: "Golden Bond Hamper",
//         price: 4999,
//         image:
//           "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1170&auto=format&fit=crop",
//         description: "Luxury Chocolates & Rakhi",
//         stock: 15,
//         rating: 4.8,
//         reviews: 89,
//         category: "Gift Basket",
//       },
//       {
//         _id: "3",
//         name: "Sister Delight Box",
//         price: 7999,
//         image:
//           "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1170&auto=format&fit=crop",
//         description: "Perfume, Gourmet Treats",
//         stock: 8,
//         rating: 5,
//         reviews: 42,
//         category: "Premium Gift",
//       },
//     ];

//     setProducts(demoProducts);

//   }, []);

//   // ADD TO CART
//   const handleAddToCart = (product) => {

//     let cart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const existingProduct = cart.find(
//       (item) => item._id === product._id
//     );

//     if (existingProduct) {

//       existingProduct.quantity += 1;

//     } else {

//       cart.push({
//         ...product,
//         quantity: 1,
//       });

//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(cart)
//     );

//     window.dispatchEvent(
//       new Event("cartUpdated")
//     );

//     alert("Product Added To Cart");

//   };

//   // PRODUCT DETAILS PAGE
//   const handleProductClick = (id) => {

//     navigate(`/product/${id}`);

//   };

//   return (

//     <div
//       style={{
//         padding: "50px",
//         background: "#f5f5f5",
//       }}
//     >

//       <h1>All Products</h1>

//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >

//         {products.map((product) => (

//           <div key={product._id}>

//             <div
//               onClick={() =>
//                 handleProductClick(product._id)
//               }
//               style={{
//                 cursor: "pointer",
//               }}
//             >

//               <ProductCard
//                 product={product}
//                 handleAddToCart={handleAddToCart}
//               />

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>

//   );

// }

// export default Products;