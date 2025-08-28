import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleGoogleRegister = () => {
        window.location.href = "http://localhost:3000/auth/google"; // backend OAuth route
    };

    useEffect(() => {
        // ✅ Same token handling as login
        const query = new URLSearchParams(location.search);
        const token = query.get("token");

        if (token) {
            localStorage.setItem("Token", token);
            navigate("/"); // redirect after saving
        }
    }, [ location, navigate ]);

    const onSubmit = async (data) => {
        try {
            // console.log("Register data:", data);
            // Example: Send register request to backend
            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (result.token) {
                localStorage.setItem("Token", result.token);
                navigate("/");
            } else {
                alert(result.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 bg-[#0f0f0f] flex justify-center items-center p-6">
                <div className="w-full max-w-md bg-black p-8 rounded-xl shadow-lg border border-red-500/20">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">
                        Create Account
                    </h2>

                    {/* Register Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-left text-sm text-gray-400">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none focus:border-red-500"
                                {...register("name", { required: "Full name is required" })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-left text-sm text-gray-400">Email</label>
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
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-left text-sm text-gray-400">Password</label>
                            <input
                                type="password"
                                placeholder="Create a password"
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
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition disabled:opacity-50"
                        >
                            {isSubmitting ? "Creating Account..." : "Sign Up"}
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
                        onClick={handleGoogleRegister}
                        className="w-full flex items-center justify-center gap-3 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-800 transition"
                    >
                        <i className="ri-google-fill text-xl text-red-500"></i> Sign up with Google
                    </button>

                    {/* Already have an account */}
                    <p className="mt-6 text-gray-400 text-sm text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-red-500 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>

            {/* Right Side - Branding */}
            <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
                <h1 className="text-4xl font-bold mb-4 flex items-center gap-2 text-red-500">
                    MindWeave
                </h1>
                <p className="text-lg text-gray-400 text-center max-w-md">
                    Begin your journey with MindWeave. Share your thoughts, connect ideas, and start weaving the future today.
                </p>
            </div>
        </div>
    );
};

export default Register;
