import { useState } from "react";

function Checkout() {

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  const [address, setAddress] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {

    if (!address) {

      alert("Please Enter Address");

      return;

    }

    alert("Order Placed Successfully ✅");

    localStorage.removeItem("cart");

    window.location.href = "/";

  };

  return (

    <div
      style={{
        padding: "50px"
      }}
    >

      <h1>Checkout Page</h1>

      {
        cartItems.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "20px",
              marginBottom: "20px"
            }}
          >

            <h2>{item.name}</h2>

            <h3>₹{item.price}</h3>

            <h3>Qty: {item.quantity}</h3>

          </div>

        ))
      }

      <h2>Total: ₹{totalPrice}</h2>

      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          width: "100%",
          height: "100px",
          marginTop: "20px"
        }}
      />

      <br /><br />

      <button onClick={handleOrder}>
        Place Order
      </button>

    </div>

  );

}

export default Checkout;