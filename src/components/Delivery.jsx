function Delivery() {

  return (

    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:gap-12 px-3 sm:px-6 py-8 sm:py-12 lg:py-14 lg:grid-cols-2 lg:px-8">

      {/* LEFT IMAGE */}

      <div
        className="relative overflow-hidden rounded-2xl bg-gray-900 min-h-[300px] sm:min-h-[350px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520975958225-65663c57d75b?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
        <div className="relative p-4 sm:p-6 lg:p-8">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Miles Away,{" "}
            <span className="block text-white/90">
              Hearts Together.
            </span>
          </h1>

          <p className="mt-2 sm:mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-white/80">
            Distance shouldn't dim the joy of celebration.
            Our curated hampers deliver your love worldwide.
          </p>

          <div className="mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm font-semibold text-white/90">
              Send love anywhere, anytime.
            </p>
          </div>

        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-16 lg:h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* RIGHT CONTENT */}

      <div className="flex flex-col justify-center">
        <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-pink-700 uppercase">
          GLOBAL DELIVERY
        </p>

        <h1 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          Seamless Gifting, Worldwide.
        </h1>

        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
          <div className="rounded-lg sm:rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-4 lg:p-5">
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              ✈ Express Global Shipping
            </h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
              Delivering to USA, UK, Canada, Australia and 50+ countries.
            </p>
          </div>

          <div className="rounded-lg sm:rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-4 lg:p-5">
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              🎁 Guaranteed Delivery
            </h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
              Safe festive packaging with premium quality assurance.
            </p>
          </div>
        </div>
      </div>

      </div>
    </section>

  );

}

export default Delivery;
