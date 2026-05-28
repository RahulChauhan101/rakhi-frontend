function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 px-4">
      
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
        
        <div className="text-7xl">
          🎉
        </div>

        <h1 className="mt-4 text-4xl font-extrabold text-pink-600">
          Order Placed!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with Rakhi Store ❤️
        </p>

        <button
          onClick={() => window.location.href = "/"}
          className="mt-8 w-full rounded-2xl bg-pink-600 py-3 text-lg font-bold text-white transition hover:bg-pink-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Success;