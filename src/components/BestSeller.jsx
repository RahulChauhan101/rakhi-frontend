// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./BestSeller.css";

// function BestSeller() {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     fetchProducts();

//   }, []);

//   const fetchProducts = async () => {

//     try {

//       const res = await axios.get(
//         "http://localhost:5000/api/products"
//       );

//       setProducts(res.data);

//     } catch (error) {

//       console.log(error);

//     }

//   };

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
//         quantity: 1
//       });

//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(cart)
//     );

//     alert("Product Added To Cart");

//   };

//   return (

//     <section className="bestSeller">

//       <div className="bestSeller-top">

//         <div>

//           <p>Signature Collection</p>

//           <h1>Festive Best Sellers</h1>

//         </div>

//       </div>

//       <div className="bestSeller-container">

//         {
//           products.map((product) => (

//             <div
//               className="bestSeller-card"
//               key={product._id}
//             >
//                   <div className="bestSeller-badge">
//     BESTSELLER
//   </div>


//               <img
//                 src={product.image}
//                 alt={product.name}
//               />

//               <h2>{product.name}</h2>

//               <h3>₹{product.price}</h3>

//               <p>
//                 ⭐ {product.rating}
//               </p>

//               <button
//                 onClick={() =>
//                   handleAddToCart(product)
//                 }
//               >
//                 Add To Cart
//               </button>

//             </div>

//           ))
//         }

//       </div>

//     </section>

//   );

// }

// export default BestSeller;


import { useEffect, useState } from "react";
import "./BestSeller.css";

function BestSeller() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const demoProducts = [
      {
        _id: "1",
        name: "The Royal Heritage Box",
        price: 6999,
        image:
          "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1170&auto=format&fit=crop",
        description: "Premium Rakhi, Sweets, Dry Fruits",
        stock: 10,
        rating: 4.9,
        reviews: 124,
        category: "Luxury Hamper",
      },
      {
        _id: "2",
        name: "Golden Bond Hamper",
        price: 4999,
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1170&auto=format&fit=crop",
        description: "Luxury Chocolates & Rakhi",
        stock: 15,
        rating: 4.8,
        reviews: 89,
        category: "Gift Basket",
      },
      {
        _id: "3",
        name: "Sister Delight Box",
        price: 7999,
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1170&auto=format&fit=crop",
        description: "Perfume, Gourmet Treats",
        stock: 8,
        rating: 5,
        reviews: 42,
        category: "Premium Gift",
      },
    ];

    setProducts(demoProducts);

  }, []);

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
        quantity: 1,
      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Product Added To Cart");

  };

  return (

    <section className="bestSeller">

      <div className="bestSeller-top">

        <div>

          <p>Signature Collection</p>

          <h1>Festive Best Sellers</h1>

        </div>

      </div>

      <div className="bestSeller-container">

        {products.map((product) => (

          <div
            className="bestSeller-card"
            key={product._id}
          >

            <div className="bestSeller-badge">
              BESTSELLER
            </div>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <h3>₹{product.price}</h3>

            <p>
              ⭐ {product.rating}
            </p>

            <button
              onClick={() =>
                handleAddToCart(product)
              }
            >
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default BestSeller;