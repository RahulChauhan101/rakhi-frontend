import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import BASE_URL from "../api/api";

import "./Auth.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  // LOGIN
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res =
        await axios.post(

          `${BASE_URL}/auth/login`,

          formData

        );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      // SAVE ROLE
      localStorage.setItem(
        "role",
        res.data.role
      );

      alert(
        res.data.message
      );

      console.log(res.data);

      // ADMIN LOGIN
      if (
        res.data.role ===
        "admin"
      ) {

        navigate("/admin");

      }

      // USER LOGIN
      else {

        navigate("/dashboard");

      }

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data
          ?.message ||

        "Login Failed"

      );

    }

  };

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={
            formData.password
          }
          onChange={handleChange}
          required
        />

        <button type="submit">

          Login

        </button>

      </form>

    </div>

  );

}

export default Login;