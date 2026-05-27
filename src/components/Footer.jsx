function Footer() {

  return (

    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">

        {/* BRAND */}

        <div>
          <h1 className="text-xl font-bold tracking-wide text-gray-900">
            Rakhi
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Celebrating bonds with premium festive gifting experiences worldwide.
          </p>

        </div>

        {/* SHOP */}

        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Shop
          </h2>

          <div className="mt-4 grid gap-2 text-sm">
            <a className="text-gray-600 hover:text-gray-900" href="/">Rakhi Collection</a>
            <a className="text-gray-600 hover:text-gray-900" href="/">Gift Hampers</a>
            <a className="text-gray-600 hover:text-gray-900" href="/">Premium Gifts</a>
            <a className="text-gray-600 hover:text-gray-900" href="/">Best Sellers</a>
          </div>

        </div>

        {/* SUPPORT */}

        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Support
          </h2>

          <div className="mt-4 grid gap-2 text-sm">
            <a className="text-gray-600 hover:text-gray-900" href="/">Contact Us</a>
            <a className="text-gray-600 hover:text-gray-900" href="/">Shipping</a>
            <a className="text-gray-600 hover:text-gray-900" href="/">Returns</a>
            <a className="text-gray-600 hover:text-gray-900" href="/">Privacy Policy</a>
          </div>

        </div>

        {/* NEWSLETTER */}

        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Newsletter
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Subscribe for festive offers and exclusive launches.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
          />

          <button
            type="button"
            className="mt-3 w-full rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-700"
          >
            Subscribe
          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="mt-12 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-500">
          © 2026 Rakhi. All Rights Reserved.
        </p>

      </div>
      </div>

    </footer>

  );

}

export default Footer;