import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaTruck,
  FaHome,
  FaBoxOpen,
} from "react-icons/fa";

function Order() {
  const navigate = useNavigate();

  const orderId = "RK" + Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-200 px-4 py-10">
      
      <div className="mx-auto max-w-3xl">
        
        {/* Success Card */}
        <div className="rounded-[35px] bg-white p-8 shadow-2xl">
          
          {/* Top Icon */}
          <div className="flex justify-center">
            
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100 shadow-lg">
              <FaCheckCircle className="text-6xl text-green-500" />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            
            <h1 className="text-5xl font-extrabold text-pink-600">
              Order Confirmed!
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Your Rakhi order has been placed successfully 🎉
            </p>

            <div className="mt-5 inline-block rounded-2xl bg-pink-100 px-6 py-3">
              <p className="font-bold text-pink-700">
                Order ID : {orderId}
              </p>
            </div>
          </div>

          {/* Tracking */}
          <div className="mt-12">
            
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Track Your Order 🚚
            </h2>

            {/* Timeline */}
            <div className="relative">
              
              {/* Line */}
              <div className="absolute left-7 top-0 h-full w-1 rounded bg-pink-200"></div>

              {/* Step 1 */}
              <div className="relative mb-10 flex items-start gap-5">
                
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                  <FaCheckCircle className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Order Confirmed
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Your order has been confirmed successfully.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-10 flex items-start gap-5">
                
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-white shadow-lg">
                  <FaBoxOpen className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Packaging
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Your Rakhi gift is being packed carefully 🎁
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-10 flex items-start gap-5">
                
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                  <FaTruck className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Out for Delivery
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Expected delivery in 2-4 days 🚀
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-5">
                
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg">
                  <FaHome className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Delivered
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Your order will arrive at your doorstep ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            
            <button
              onClick={() => navigate("/")}
              className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Continue Shopping
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="flex-1 rounded-2xl border-2 border-pink-500 py-4 text-lg font-bold text-pink-600 transition hover:bg-pink-50"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;