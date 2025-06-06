import React, { useState } from "react";

export default function LoginManage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage("Please provide information.");
        } else if (email === "messi@gmail.com") {
            setMessage("GOAT");
        } else if (email === "ronaldo@gmail.com" && password === "7") {
            setMessage("Login Successful");
        } else {
            setMessage("Invalid credentials");
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm transform transition-all duration-300 hover:scale-105"
            >
                <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
                    Welcome Back!
                </h2>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out text-lg"
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out text-lg"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    Sign In
                </button>

                {message && (
                    <div className="mt-6 text-center text-md font-medium text-gray-700 p-3 bg-gray-100 rounded-md">
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}