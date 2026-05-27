import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../api/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        `${BASE_URL}/auth/login`,
        formData
      );

      console.log(res.data);

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert(res.data.message);

      // NAVIGATION
      if (res.data.user?.role === "admin") {

        navigate("/admin");

      } else {

        navigate("/");

      }

    } catch (error) {

      console.log(error);
      

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div className="min-h-[calc(100vh-5rem)] bg-gray-50 px-4 py-10">

      <form
        className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >

        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Login
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back. Please sign in.
        </p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-700"
        >
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;