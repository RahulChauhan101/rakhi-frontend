import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaCreditCard,
  FaGooglePay,
  FaGift,
} from "react-icons/fa";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        
        {/* Left Side */}
        <div className="lg:col-span-2">
          
          {/* Rakhi Logo Header */}
          <div className="mb-8 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 p-6 text-white shadow-2xl">
            
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              
              {/* Logo */}
              <div className="flex items-center gap-4">
                
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-lg">
                  🎁
                </div>

                <div>
                  <h1 className="text-4xl font-extrabold tracking-wide">
                    Rakhi Store
                  </h1>

                  <p className="mt-1 text-sm text-pink-100">
                    Celebrate Love & Tradition ✨
                  </p>
                </div>
              </div>

              {/* Secure */}
              <div className="rounded-2xl bg-white/20 px-5 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold">
                  🔒 100% Secure Checkout
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Shipping Address 🚚
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              
              <input
                type="text"
                placeholder="👤 Full Name"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />

              <input
                type="text"
                placeholder="📞 Phone Number"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />

              <input
                type="email"
                placeholder="📧 Email Address"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 sm:col-span-2"
              />

              <input
                type="text"
                placeholder="🏙️ City"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />

              <input
                type="text"
                placeholder="🌍 State"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />

              <input
                type="text"
                placeholder="📮 Pincode"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />

              <textarea
                rows="4"
                placeholder="🏠 Full Address"
                className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 sm:col-span-2"
              ></textarea>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-xl">
            
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Payment Method 💳
            </h2>

            <div className="space-y-4">
              
              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition hover:border-pink-500 hover:bg-pink-50">
                <input type="radio" name="payment" defaultChecked />

                <span className="flex items-center gap-3 font-semibold">
                  <FaMoneyBillWave className="text-2xl text-green-600" />
                  Cash on Delivery
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition hover:border-pink-500 hover:bg-pink-50">
                <input type="radio" name="payment" />

                <span className="flex items-center gap-3 font-semibold">
                  <FaGooglePay className="text-2xl text-blue-600" />
                  UPI Payment
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition hover:border-pink-500 hover:bg-pink-50">
                <input type="radio" name="payment" />

                <span className="flex items-center gap-3 font-semibold">
                  <FaCreditCard className="text-2xl text-pink-600" />
                  Credit / Debit Card
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="h-fit rounded-3xl bg-white p-6 shadow-2xl">
          
          <h2 className="text-3xl font-bold text-gray-900">
            Order Summary 🛒
          </h2>

          <div className="mt-6 space-y-5">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border-b pb-4"
              >
                
                {/* Image */}
                <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>

                    <p className="mt-2 text-pink-600 font-semibold">
                      ₹{item.price}
                    </p>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-6 space-y-4 border-t pt-5">
            
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-green-600">
                Free
              </span>
            </div>

            <div className="flex justify-between text-2xl font-bold text-gray-900">
              <span>Total</span>
              <span className="text-pink-600">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Button */}
<button
  onClick={() => navigate("/order")}
  className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-2xl"
>
  <FaGift className="text-2xl" />

  Place Order Now 🎉
</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;