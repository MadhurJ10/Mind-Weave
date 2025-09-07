import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";


const Login = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
  const { isUserValid, setIsUserValid } = useContext(userContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleGoogleLogin = () => {
    window.location.href = `${baseUrl}/auth/google`;
  };

  useEffect(() => {
      console.log("Full URL:", location.pathname + location.search);
    const query = new URLSearchParams(location.search);
    const token = query.get("token");

    if (token) {
      localStorage.setItem("Token", token);
      navigate("/");
    }
  }, [location, navigate]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.token) {
        localStorage.setItem("Token", result.token);
        navigate("/");
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
   {/* Left Side */}
<div className="md:w-1/2 h-[24rem] bg-black text-white flex flex-col justify-center items-center p-8 md:p-10 ">
  <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2 text-red-500">
    MindWeave
  </h1>
  <p className="text-base md:text-lg text-gray-400 text-center max-w-md">
    Welcome back, where ideas take shape. Keep exploring, keep creating,
    and keep pushing forward until you weave the future you dream of.
  </p>
</div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full bg-[#0f0f0f] flex flex-col justify-center items-center p-8 md:p-10">
        <div className="w-full max-w-md bg-black p-6 md:p-8 rounded-xl shadow-lg border border-red-500/20">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Welcome Back!
          </h2>

          {/* Manual Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-left text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none focus:border-red-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="block text-left text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                placeholder="your password"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none focus:border-red-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Reset Password */}
            <div className="text-right mb-6">
              <a
                href="#"
                className="text-sm text-red-400 hover:text-red-500 hover:underline"
              >
                Reset password
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition disabled:opacity-50"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-700"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-800 transition"
          >
            <i className="ri-google-fill text-xl text-red-500"></i> Continue with
            Google
          </button>

          {/* Sign Up */}
          <p className="mt-6 text-gray-400 text-sm text-center">
            Don’t have an account?{" "}
            <a href="/register" className="text-red-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
