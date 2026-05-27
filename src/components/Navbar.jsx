import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import {

  Menu,
  Search,
  Heart,
  ShoppingCart,
  User,
  Home

} from "lucide-react";

function Navbar() {

  // =========================
  // STATES
  // =========================

  const [cartCount, setCartCount] =
    useState(0);

  const [search, setSearch] =
    useState("");

  const [user, setUser] =
    useState(null);

  const navigate = useNavigate();

  // =========================
  // USE EFFECT
  // =========================

  useEffect(() => {

    updateCartCount();

    // GET USER
    const storedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    setUser(storedUser);

    // CART EVENT
    window.addEventListener(

      "cartUpdated",

      updateCartCount

    );

    return () => {

      window.removeEventListener(

        "cartUpdated",

        updateCartCount

      );

    };

  }, []);

  // =========================
  // UPDATE CART COUNT
  // =========================

  const updateCartCount = () => {

    const cart =

      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    const totalQuantity =

      cart.reduce(

        (total, item) =>

          total + item.quantity,

        0

      );

    setCartCount(totalQuantity);

  };

  // =========================
  // SEARCH PRODUCTS
  // =========================

  const handleSearch = () => {

    if (search.trim() !== "") {

      navigate(

        `/products?search=${search}`

      );

    }

  };

  // =========================
  // ENTER SEARCH
  // =========================

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      handleSearch();

    }

  };

  // =========================
  // MENU
  // =========================

  const handleMenu = () => {

    alert("Menu Open");

  };

  return (

    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">

      {/* =========================
          LEFT
      ========================= */}

      <div className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">

        <button

          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 active:bg-gray-200"

          onClick={handleMenu}

        >

          <Menu className="h-5 w-5" />

        </button>

        <Link
          to="/"
          className="text-lg font-bold tracking-wide text-gray-900"
        >

          Rakhi

        </Link>

        </div>

      {/* =========================
          CENTER
      ========================= */}

      <div className="hidden flex-1 px-3 md:block">
        <div className="relative">

        <input

          type="text"

          placeholder="Search for products..."
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 pr-11 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"

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

      {/* =========================
          RIGHT
      ========================= */}

      <div className="ml-auto flex items-center gap-1 sm:gap-2">

        {/* HOME */}

        <Link

          to="/"

          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"

        >

          <Home className="h-5 w-5" />

          <span className="hidden sm:inline">Home</span>

        </Link>

        {/* PRODUCTS */}

        <Link

          to="/products"

          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"

        >

          <ShoppingCart className="h-5 w-5" />

          <span className="hidden sm:inline">Products</span>

        </Link>

        {/* WISHLIST */}

        <Link

          to="/wishlist"

          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"

        >

          <Heart className="h-5 w-5" />

          <span className="hidden sm:inline">Wishlist</span>

        </Link>

        {/* CART */}

        <Link

          to="/cart"

          className="relative inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"

        >

          <ShoppingCart className="h-5 w-5" />

          <span className="hidden sm:inline">Cart</span>

          <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-pink-600 px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
            {cartCount}
          </span>

        </Link>

        {/* ADMIN */}

        {

          user?.role === "admin" && (

            <Link

              to="/admin"

              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"

            >

              <User className="h-5 w-5" />

              <span className="hidden sm:inline">Admin</span>

            </Link>

          )

        }

        {/* LOGIN */}

        <Link

          to="/login"

          className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-700"

        >

          <User className="h-5 w-5" />

          <span className="hidden sm:inline">

            {

              user
                ? user.name
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