import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/input/passwordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="w-full max-w-sm border border-line rounded-[10px] bg-white px-8 py-10 card-shadow">
        <div className="flex items-center gap-2.5 justify-center mb-8">
        </div>

        <form onSubmit={handleSubmit}>
          <h4 className="font-display text-2xl mb-7 text-center text-ink">Log in</h4>

          <input
            type="email"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {error && <p className="text-secondary text-xs pb-1">{error}</p>}

          <button type="submit" className="btn-primary">
            Log in
          </button>

          <p className="text-sm text-center mt-4 text-graphite">
            Not registered yet?{" "}
            <Link to="/signup" className="font-medium text-primary underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;