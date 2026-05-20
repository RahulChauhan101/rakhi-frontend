import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {

    updateCartCount();

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

  const updateCartCount = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const totalQuantity = cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

    setCartCount(totalQuantity);

  };

  return (

    <nav className="navbar">

      <div className="logo">
        Rakhi
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li className="cart-link">

          <Link to="/cart">

            Cart

            <span className="cart-count">
              {cartCount}
            </span>

          </Link>

        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

      </ul>

    </nav>

  );

}

export default Navbar;