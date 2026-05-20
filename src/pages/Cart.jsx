import { useEffect, useState } from "react";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    const updatedItems = items.map((item) => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCartItems(updatedItems);

  }, []);

  // INCREASE QUANTITY
  const increaseQty = (index) => {

    const updatedCart = [...cartItems];

    updatedCart[index].quantity += 1;

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // NAVBAR UPDATE
    window.dispatchEvent(
      new Event("cartUpdated")
    );

  };

  // DECREASE QUANTITY
  const decreaseQty = (index) => {

    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {

      updatedCart[index].quantity -= 1;

    }

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // NAVBAR UPDATE
    window.dispatchEvent(
      new Event("cartUpdated")
    );

  };

  // REMOVE PRODUCT
  const removeItem = (index) => {

    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // NAVBAR UPDATE
    window.dispatchEvent(
      new Event("cartUpdated")
    );

  };

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );

  return (

    <div
      style={{
        padding: "50px",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          marginBottom: "30px"
        }}
      >
        Cart Page 🛒
      </h1>

      {
        cartItems.length === 0 ? (

          <h2>Cart Empty</h2>

        ) : (

          <>

            {
              cartItems.map((item, index) => (

                <div
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    background: "white"
                  }}
                >

                  <h2>{item.name}</h2>

                  <h3>₹{item.price}</h3>

                  <h3>
                    Quantity: {item.quantity}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "15px"
                    }}
                  >

                    <button
                      onClick={() =>
                        increaseQty(index)
                      }
                      style={{
                        padding: "10px 15px",
                        cursor: "pointer"
                      }}
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        decreaseQty(index)
                      }
                      style={{
                        padding: "10px 15px",
                        cursor: "pointer"
                      }}
                    >
                      -
                    </button>

                    <button
                      onClick={() =>
                        removeItem(index)
                      }
                      style={{
                        padding: "10px 15px",
                        background: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                      }}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

            <h2>
              Total Price: ₹{totalPrice}
            </h2>

          </>

        )
      }

    </div>

  );

}

export default Cart;