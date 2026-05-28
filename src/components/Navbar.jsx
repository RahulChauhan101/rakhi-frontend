import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Heart,
  Home,
  Menu,
  Search,
  ShoppingCart,
  User
} from "lucide-react";

function Navbar() {

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

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

    <nav className="fixed inset-x-0 top-0 z-50 border-b border-pink-100 bg-gradient-to-r from-white via-rose-50 to-pink-50 shadow-sm backdrop-blur">

      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <div className="flex items-center gap-2 sm:gap-3">

          <button
            type="button"
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl text-gray-700 hover:bg-white/70"
            onClick={() => alert("Menu Open")}
          >

            <Menu className="h-4 sm:h-5 w-4 sm:w-5" />

          </button>

          <Link
            to="/"
            className="text-base sm:text-xl font-extrabold tracking-wide text-pink-700"
          >
            Rakhi
          </Link>

        </div>

        {/* SEARCH */}
        <div className="hidden flex-1 px-2 sm:px-3 md:block">

          <div className="relative">

            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg sm:rounded-xl border border-pink-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 pr-9 sm:pr-11 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-pink-500 focus:border-pink-500 focus:ring-2"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button
              type="button"
              className="absolute right-1 top-1.5 sm:top-1 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={handleSearch}
            >

              <Search className="h-3.5 sm:h-4 w-3.5 sm:w-4" />

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

            {/* COUNT */}
            <span className="absolute right-1 top-1 inline-flex min-w-4 sm:min-w-5 items-center justify-center rounded-full bg-red-500 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold leading-none text-white">
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

            {/* COUNT */}
            <span className="absolute right-0.5 top-0.5 inline-flex min-w-4 sm:min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 sm:px-1.5 py-0.5  text-[9px] sm:text-[10px] font-semibold leading-none text-white">
              {cartCount}
            </span>

          </Link>

          {/* ADMIN */}
          {
            user?.role === "admin" && (

              <Link
                to="/admin"
                className={`hidden md:flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition ${
                  location.pathname === "/admin"
                    ? activeClass
                    : normalClass
                }`}
              >

                <User className="h-5 w-5" />

                <span>
                  Admin
                </span>

              </Link>

            )
          }

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

  );

}

export default Navbar;