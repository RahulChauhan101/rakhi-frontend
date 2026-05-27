import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
        `${BASE_URL}/auth/register`,
        formData
      );

      alert(res.data.message);

      console.log(res.data);

      // MOVE TO HOME PAGE
      navigate("/");

    } catch (error) {

      console.log(error);

      alert(error.response.data.message);

    }

  };

  return (

    <div className="min-h-[calc(100vh-5rem)] bg-gray-50 px-4 py-10">

      <form
        className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >

        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Register
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Create your account to start shopping.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none ring-pink-600 focus:border-pink-600 focus:ring-2"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-700"
        >
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;