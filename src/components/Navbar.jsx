import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Heart,
  Home,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  CreditCard,
  Truck,
  LayoutDashboard,
} from "lucide-react";

function Navbar() {

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    // CART COUNT
    const updateCartCount = () => {

      const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setCartCount(totalQuantity);

    };

    // WISHLIST COUNT
    const updateWishlistCount = () => {

      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      setWishlistCount(wishlist.length);

    };

    updateCartCount();
    updateWishlistCount();

    setUser(
      JSON.parse(localStorage.getItem("user"))
    );

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    window.addEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );

    return () => {

      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

      window.removeEventListener(
        "wishlistUpdated",
        updateWishlistCount
      );

    };

  }, []);

  const handleSearch = () => {

    if (search.trim()) {

      navigate(
        `/products?search=${search}`
      );

    }

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      handleSearch();

    }

  };

  // ACTIVE LINK STYLE
  const activeClass =
    "bg-pink-100 text-pink-700 underline underline-offset-8";

  const normalClass =
    "text-gray-700 hover:bg-white/70";

  return (

    <>
    
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-pink-100 bg-gradient-to-r from-white via-rose-50 to-pink-50 shadow-sm backdrop-blur">

        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8">

          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">

            <button
              type="button"
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl text-gray-700 hover:bg-white/70"
              onClick={() => setMenuOpen(true)}
            >

              <Menu className="h-4 sm:h-5 w-4 sm:w-5" />

            </button>

            <Link
              to="/"
              className="flex items-center gap-2 text-base sm:text-xl font-extrabold tracking-wide text-pink-700"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-rose-200 text-white shadow-lg">
                🎀
              </div>

              <span>
                Rakhi 
              </span>

            </Link>

          </div>

          {/* SEARCH */}
          <div className="hidden flex-1 px-2 sm:px-3 md:block">

            <div className="relative">

              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 pr-11 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-pink-500 focus:border-pink-500 focus:ring-2"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                onKeyDown={handleKeyDown}
              />

              <button
                type="button"
                className="absolute right-1 top-1 inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
                onClick={handleSearch}
              >

                <Search className="h-4 w-4" />

              </button>

            </div>

          </div>

          {/* NAVIGATION */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">

            {/* HOME */}
            <Link
              to="/"
              className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium transition ${
                location.pathname === "/"
                  ? activeClass
                  : normalClass
              }`}
            >

              <Home className="h-4 sm:h-5 w-4 sm:w-5" />

              <span>
                Home
              </span>

            </Link>

            {/* PRODUCTS */}
            <Link
              to="/products"
              className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium transition ${
                location.pathname === "/products"
                  ? activeClass
                  : normalClass
              }`}
            >

              <ShoppingCart className="h-4 sm:h-5 w-4 sm:w-5" />

              <span>
                Products
              </span>

            </Link>

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium transition ${
                location.pathname === "/wishlist"
                  ? activeClass
                  : normalClass
              }`}
            >

              <Heart className="h-4 sm:h-5 w-4 sm:w-5" />

              <span>
                Wishlist
              </span>

              <span className="absolute right-1 top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {wishlistCount}
              </span>

            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium transition ${
                location.pathname === "/cart"
                  ? activeClass
                  : normalClass
              }`}
            >

              <ShoppingCart className="h-4 sm:h-5 w-4 sm:w-5" />

              <span>
                Cart
              </span>

              <span className="absolute right-0.5 top-0.5 inline-flex min-w-5 items-center justify-center rounded-full bg-pink-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {cartCount}
              </span>

            </Link>

            {/* LOGIN */}
            <Link
              to="/login"
              className="flex flex-col items-center justify-center gap-1 rounded-xl bg-pink-600 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white hover:bg-pink-700"
            >

              <User className="h-4 sm:h-5 w-4 sm:w-5" />

              <span>
                {
                  user
                    ? user.name.split(" ")[0]
                    : "Login"
                }
              </span>

            </Link>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {
        menuOpen && (

          <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm">

            <div className="absolute left-0 top-0 h-full w-72 bg-white p-6 shadow-2xl">

              {/* HEADER */}
              <div className="flex items-center justify-between border-b pb-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-rose-200 text-2xl text-white shadow-lg">
                    🎀
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-pink-600">
                      Rakhi Store
                    </h2>

                    <p className="text-xs text-gray-500">
                      Celebrate Love ❤️
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-pink-100 p-2 text-pink-600 hover:bg-pink-200"
                >

                  <X className="h-5 w-5" />

                </button>

              </div>

              {/* MENU LINKS */}
              <div className="mt-8 flex flex-col gap-3">

                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>

                <Link
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Products
                </Link>

                <Link
                  to="/wishlist"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                >

                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </div>

                  <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                    {wishlistCount}
                  </span>

                </Link>

                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                >

                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-5 w-5" />
                    Cart
                  </div>

                  <span className="rounded-full bg-pink-600 px-2 py-1 text-xs text-white">
                    {cartCount}
                  </span>

                </Link>

                <Link
                  to="/checkout"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                >
                  <CreditCard className="h-5 w-5" />
                  Checkout
                </Link>

                <Link
                  to="/order"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                >
                  <Truck className="h-5 w-5" />
                  Track Order
                </Link>

                {
                  user?.role === "admin" && (

                    <Link
                      to="/admin"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-lg font-semibold text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      Admin Panel
                    </Link>

                  )
                }

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-3 text-center text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]"
                >

                  👤 {
                    user
                      ? user.name.split(" ")[0]
                      : "Login"
                  }

                </Link>

              </div>

            </div>

          </div>

        )
      }

    </>

  );

}

export default Navbar;