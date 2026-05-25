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

import "./Navbar.css";

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

    <nav className="navbar">

      {/* =========================
          LEFT
      ========================= */}

      <div className="navbar-left">

        <button

          className="icon-btn"

          onClick={handleMenu}

        >

          <Menu className="menu-icon" />

        </button>

        <div className="logo">

          Rakhi

        </div>

      </div>

      {/* =========================
          CENTER
      ========================= */}

      <div className="navbar-center">

        <input

          type="text"

          placeholder="Search for products..."

          value={search}

          onChange={(e) =>

            setSearch(e.target.value)

          }

          onKeyDown={handleKeyDown}

        />

        <button

          className="search-btn"

          onClick={handleSearch}

        >

          <Search className="search-icon" />

        </button>

      </div>

      {/* =========================
          RIGHT
      ========================= */}

      <div className="navbar-right">

        {/* HOME */}

        <Link

          to="/"

          className="nav-item"

        >

          <Home />

          <span>Home</span>

        </Link>

        {/* PRODUCTS */}

        <Link

          to="/products"

          className="nav-item"

        >

          <ShoppingCart />

          <span>Products</span>

        </Link>

        {/* WISHLIST */}

        <Link

          to="/wishlist"

          className="nav-item"

        >

          <Heart />

          <span>Wishlist</span>

        </Link>

        {/* CART */}

        <Link

          to="/cart"

          className="nav-item cart-link"

        >

          <ShoppingCart />

          <span>Cart</span>

          <span className="cart-count">

            {cartCount}

          </span>

        </Link>

        {/* ADMIN */}

        {

          user?.role === "admin" && (

            <Link

              to="/admin"

              className="nav-item"

            >

              <User />

              <span>Admin</span>

            </Link>

          )

        }

        {/* LOGIN */}

        <Link

          to="/login"

          className="nav-item"

        >

          <User />

          <span>

            {

              user
                ? user.name
                : "Login"

            }

          </span>

        </Link>

      </div>

    </nav>

  );

}

export default Navbar;