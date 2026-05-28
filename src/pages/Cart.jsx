import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedItems = items.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(updatedItems);
  }, []);

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    saveCart(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      saveCart(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    saveCart(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Shopping Cart 🛒
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add products to cart
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-4 shadow-md transition hover:shadow-xl"
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    
                    {/* Product Image */}
                    <div className="h-40 w-full overflow-hidden rounded-2xl sm:w-40">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h2>

                        <p className="mt-2 text-lg font-semibold text-pink-600">
                          ₹{item.price}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="mt-4 flex flex-wrap gap-3">
                        
                        <button
                          onClick={() => decreaseQty(index)}
                          className="rounded-xl border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100"
                        >
                          -
                        </button>

                        <button
                          onClick={() => increaseQty(index)}
                          className="rounded-xl border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100"
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeItem(index)}
                          className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex items-start justify-end">
                      <h2 className="text-xl font-bold text-gray-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-3xl bg-white p-6 shadow-md">
              
              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 flex items-center justify-between border-b pb-4">
                <span className="text-gray-600">
                  Total Items
                </span>

                <span className="font-semibold">
                  {cartItems.length}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">
                  Total Price
                </span>

                <span className="text-2xl font-bold text-pink-600">
                  ₹{totalPrice.toFixed(2)}
                </span>
              </div>

<button
  onClick={() => navigate("/checkout")}
  className="mt-8 w-full rounded-2xl bg-pink-600 py-3 text-lg font-semibold text-white transition hover:bg-pink-700"
>
  Proceed to Checkout
</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;