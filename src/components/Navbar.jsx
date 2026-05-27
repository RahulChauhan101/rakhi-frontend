import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, Home, Menu, Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalQuantity);
    };

    updateCartCount();
    setUser(JSON.parse(localStorage.getItem("user")));
    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const handleSearch = () => {
    if (search.trim()) navigate(`/products?search=${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-pink-100 bg-gradient-to-r from-white via-rose-50 to-pink-50 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-white/70"
            onClick={() => alert("Menu Open")}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="text-xl font-extrabold tracking-wide text-pink-700">
            Rakhi
          </Link>
        </div>

        <div className="hidden flex-1 px-3 md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 pr-11 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-pink-500 focus:border-pink-500 focus:ring-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Link to="/" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70">
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link to="/products" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Products</span>
          </Link>

          <Link to="/wishlist" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70">
            <Heart className="h-5 w-5" />
            <span className="hidden sm:inline">Wishlist</span>
          </Link>

          <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-pink-600 px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
              {cartCount}
            </span>
          </Link>

          {user?.role === "admin" && (
            <Link to="/admin" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          )}

          <Link to="/login" className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-700">
            <User className="h-5 w-5" />
            <span className="hidden sm:inline">{user ? user.name : "Login"}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;