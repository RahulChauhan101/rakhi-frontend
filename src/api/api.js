const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://rakhi-backend-c5b4.onrender.com/api";

export default BASE_URL;