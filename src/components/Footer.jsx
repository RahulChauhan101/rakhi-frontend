function Footer() {

  return (

    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 py-8 sm:py-12 lg:py-14 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}

        <div>
          <h1 className="text-lg sm:text-xl font-bold tracking-wide text-gray-900">
            Rakhi
          </h1>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-gray-600">
            Celebrating bonds with premium festive gifting experiences worldwide.
          </p>

        </div>

        {/* SHOP */}

        <div>
          <h2 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Shop
          </h2>

          <div className="mt-3 sm:mt-4 grid gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Rakhi Collection</a>
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Gift Hampers</a>
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Premium Gifts</a>
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Best Sellers</a>
          </div>

        </div>

        {/* SUPPORT */}

        <div>
          <h2 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Support
          </h2>

          <div className="mt-3 sm:mt-4 grid gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Contact Us</a>
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Shipping</a>
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Returns</a>
            <a className="text-gray-600 hover:text-gray-900 transition" href="/">Privacy Policy</a>
          </div>

        </div>

        {/* NEWSLETTER */}

        <div>
          <h2 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Newsletter
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            Subscribe for festive offers and exclusive launches.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2.5 sm:mt-4 w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <button
            type="button"
            className="mt-2 sm:mt-3 w-full rounded-lg sm:rounded-xl bg-pink-600 px-3 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-pink-700 transition"
          >
            Subscribe
          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-gray-200 pt-4 sm:pt-6">
        <p className="text-xs sm:text-sm text-gray-500">
          © 2026 Rakhi. All Rights Reserved.
        </p>

      </div>
      </div>

    </footer>

  );

}

export default Footer;