import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

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
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-gray-50 px-3 sm:px-6 py-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          Cart Page 🛒
        </h1>

        {cartItems.length === 0 ? (
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">Cart is empty.</p>
        ) : (
          <>
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg sm:rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 lg:p-5 shadow-sm"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-words">{item.name}</h2>
                      <p className="mt-1 text-sm sm:text-base text-gray-700">₹{item.price}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm sm:text-base font-bold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => increaseQty(index)}
                      className="flex-1 sm:flex-none rounded-lg border border-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-gray-50"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => decreaseQty(index)}
                      className="flex-1 sm:flex-none rounded-lg border border-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-gray-50"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="flex-1 sm:flex-none rounded-lg bg-red-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 rounded-lg sm:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Total: ₹{totalPrice.toFixed(2)}
              </h2>
              <button className="mt-4 sm:mt-6 w-full rounded-lg sm:rounded-xl bg-pink-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-pink-700">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
