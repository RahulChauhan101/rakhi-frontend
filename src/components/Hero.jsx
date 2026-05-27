function Hero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold tracking-wide text-pink-700">
            FESTIVE COLLECTION
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Premium Jewelry Collection
          </h1>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Discover elegant and modern jewelry for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-xl bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Shop Now
            </button>
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>

  );

}

export default Hero;