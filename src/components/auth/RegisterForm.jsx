import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation

// Mock implementation of useRegisterUserTan hook for demonstration purposes.
// In a real application, this would interact with your backend (e.g., using TanStack Query).
const useRegisterUserTan = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const mutate = (values) => {
        setIsPending(true);
        setIsSuccess(false);
        setIsError(false);
        setError(null);
        setData(null);

        // Simulate an API call
        setTimeout(() => {
            if (values.email === 'test@example.com') {
                // Simulate a registration error (e.g., email already exists)
                setError({ message: 'Email already registered!' });
                setIsError(true);
                setIsPending(false);
            } else {
                // Simulate successful registration
                setData({ message: 'Registration successful!', user: values });
                setIsSuccess(true);
                setIsPending(false);
                // Optionally reset form after success
                // formik.resetForm();
            }
        }, 1500); // Simulate network delay
    };

    return { mutate, data, error, isPending, isSuccess, isError };
};

// Main App component to render the RegisterForm
export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
            <RegisterForm />
        </div>
    );
}

function RegisterForm() {
    // Destructure states from the mock useRegisterUserTan hook
    const { mutate, data, error, isPending, isSuccess, isError } = useRegisterUserTan();

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(20, "Username must be at most 20 characters")
            .required("Username is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
            .required("Password is required"),
        firstName: Yup.string()
            .required("First Name is required"),
        lastName: Yup.string()
            .required("Last Name is required"),
    });

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
            firstName: "",
            lastName: ""
        },
        validationSchema: validationSchema, // Apply the validation schema
        onSubmit: (values) => {
            mutate(values); // Call the mutation function on submit
        }
    });

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register Account</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                            formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        autoComplete="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    ) : null}
                </div>

                {/* Username Input */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Choose a unique username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                            formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'
                        }`}
                        autoComplete="username"
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.username}</p>
                    ) : null}
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Secure password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                            formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        autoComplete="new-password"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                    ) : null}
                </div>

                {/* First Name Input */}
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Your first name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                            formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        autoComplete="given-name"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.firstName}</p>
                    ) : null}
                </div>

                {/* Last Name Input */}
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Your last name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                            formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        autoComplete="family-name"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.lastName}</p>
                    ) : null}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending || !formik.isValid} // Disable if pending or form is invalid
                    className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-300 ${
                        isPending || !formik.isValid
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    }`}
                >
                    {isPending ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Registering...
                        </span>
                    ) : (
                        'Register'
                    )}
                </button>

                {/* Feedback Messages */}
                {isError && error && (
                    <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-200">
                        {error.message}
                    </div>
                )}
                {isSuccess && data && (
                    <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md border border-green-200">
                        {data.message}
                    </div>
                )}
            </form>
        </div>
    );
}