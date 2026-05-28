import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Success from "./pages/Success";
import Order from "./pages/Order";

import AdminPanel from "./pages/AdminPanel";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="pt-16 sm:pt-20">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/admin"
            element={<AdminPanel />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/products"
            element={<Product />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/success"
            element={<Success />}
          />

          <Route
            path="/order"
            element={<Order />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;