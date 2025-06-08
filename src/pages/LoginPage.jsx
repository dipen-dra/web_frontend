import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {

  let navigate = useNavigate()
  const eventChangePage = (event) => {
    event.preventDefault();
    navigate("/register")
  }

  return (
    <div>
      <div>Login Page</div>
      <Link to="/register">Link to Page</Link>
      <NavLink to="/register">Navlink to Page</NavLink>
      <button onClick={eventChangePage}>Event based </button>
      <button onClick={
        (event) => {
          eventChangePage(event)
        }
      }>Event based with call back </button>

      <div>
        <LoginForm />
      </div>
    </div>
  )
}



// import React, { useState } from 'react';
// import { Mail, Lock, Facebook, Instagram } from 'lucide-react'; // Importing necessary icons

// // --- Start: Simulated Auth Service (formerly src/services/authServices.js) ---
// /**
//  * Simulates a login API call.
//  * @param {string} email - The user's email.
//  * @param {string} password - The user's password.
//  * @returns {Promise<Object>} - A promise that resolves with user data or rejects with an error.
//  */
// const loginService = async (email, password) => {
//   return new Promise((resolve, reject) => {
//     // Simulate network delay
//     setTimeout(() => {
//       if (email === 'user@example.com' && password === 'password123') {
//         // Simulate successful login
//         resolve({
//           message: 'Login successful!',
//           user: { email: email, name: 'Demo User', userId: '12345' },
//         });
//       } else {
//         // Simulate failed login
//         reject({ message: 'Invalid email or password.' });
//       }
//     }, 1000); // 1 second delay
//   });
// };
// // --- End: Simulated Auth Service ---

// // --- Start: Custom Login Hook (formerly src/hooks/useLoginUser.js) ---
// const useLoginUser = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await loginService(email, password);
//       console.log('Login successful:', response);
//       setIsLoggedIn(true); // Set login status to true
//       // In a real app, you would store tokens/user data in local storage or context
//       // For now, using alert for demo purposes as `confirm()` is not allowed.
//       // In a production app, you would use a custom modal or toast notification.
//       alert('Login successful!');
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'An unexpected error occurred during login.');
//       setIsLoggedIn(false); // Ensure login status is false on error
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     error,
//     loading,
//     isLoggedIn,
//     handleLogin,
//   };
// };
// // --- End: Custom Login Hook ---

// // --- Start: LoginForm Component (formerly src/components/auth/LoginForm.jsx) ---
// // This component now resides directly within App.jsx
// const LoginForm = ({
//   email,
//   setEmail,
//   password,
//   setPassword,
//   error,
//   loading,
//   handleLogin,
// }) => {
//   return (
//     <form onSubmit={handleLogin} className="space-y-6">
//       {error && (
//         <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center text-sm font-medium animate-pulse mb-6">
//           {error}
//         </p>
//       )}

//       <div>
//         <div className="relative">
//           <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="email"
//             id="login-email"
//             className="w-full pl-10 pr-3 py-3 border border-gray-500 rounded-lg bg-[#314856] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//       </div>

//       <div>
//         <div className="relative">
//           <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="password"
//             id="login-password"
//             className="w-full pl-10 pr-3 py-3 border border-gray-500 rounded-lg bg-[#314856] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="button"
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//           >
//             {/* Password visibility toggle icon can be added here if needed */}
//           </button>
//         </div>
//         <div className="flex justify-end mt-2">
//           <button
//             type="button"
//             className="text-gray-300 text-sm hover:underline"
//           >
//             Forget Password ?
//           </button>
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
//         disabled={loading} // Disable button when loading
//       >
//         {loading ? (
//           <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//           </svg>
//         ) : (
//           'SIGN IN'
//         )}
//       </button>
//     </form>
//   );
// };
// // --- End: LoginForm Component ---


// // --- Main App Component (formerly LoginPage.jsx and App.jsx combined) ---
// const App = () => {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     error,
//     loading,
//     isLoggedIn,
//     handleLogin,
//   } = useLoginUser();

//   // You can redirect the user if they are already logged in
//   if (isLoggedIn) {
//     console.log('User is logged in! Redirecting...');
//     // In a full application, you would typically use React Router or a similar solution
//     // to navigate to a dashboard or home page. For this demo, we'll just log it.
//     // Example: return <DashboardPage />;
//   }

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4 font-sans bg-[#314856] text-white"
//     >
//       <div className="relative bg-transparent p-8 rounded-xl w-full max-w-md">
//         {/* MotoFix Logo/Title */}
//         <div className="flex flex-col items-center mb-8">
//           <svg
//             xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTth0gx3Dco0TDOLCFmZWCe-Aoq1sluOca7PA&s"
//             className="h-20 w-20 text-gray-200 mb-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={1.5}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//             />
//           </svg>
//           <h1 className="text-4xl font-extrabold text-gray-100 mb-6">
//             MotoFix
//           </h1>
//         </div>

//         {/* Sign In Section */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-100">Sign in</h2>
//           <p className="text-gray-300 text-sm mt-2">
//             Please Sign in with your account
//           </p>
//         </div>

//         {/* LoginForm component */}
//         <LoginForm
//           email={email}
//           setEmail={setEmail}
//           password={password}
//           setPassword={setPassword}
//           error={error}
//           loading={loading}
//           handleLogin={handleLogin}
//         />

//         {/* Or Sign in with section */}
//         <div className="text-center my-8 text-gray-400 before:content-[''] before:block before:h-[1px] before:bg-gray-500 before:w-5/12 before:inline-block after:content-[''] after:block after:h-[1px] after:bg-gray-500 after:w-5/12 after:inline-block">
//           <span className="mx-2 bg-[#314856] px-2">Or Sign in with</span>
//         </div>

//         {/* Social Login Buttons */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           <button
//             type="button"
//             className="flex-1 flex items-center justify-center p-3 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 transition-all duration-300 shadow-md"
//           >
//             <Facebook className="w-5 h-5 mr-2" /> Facebook
//           </button>
//           <button
//             type="button"
//             className="flex-1 flex items-center justify-center p-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-all duration-300 shadow-md"
//           >
//             {/* Using an inline SVG for Google icon */}
//             <svg
//               className="w-5 h-5 mr-2"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12.24 10.284V14.4H17.476C17.279 15.672 16.529 17.159 15.228 18.067C13.926 18.976 12.015 19.5 12.24 19.5C11.96 19.5 10.375 19.462 8.948 18.995C7.458 18.508 6.136 17.514 5.253 16.143C4.37 14.772 3.882 13.064 3.882 11.233C3.882 9.402 4.37 7.694 5.253 6.323C6.136 4.952 7.458 3.959 8.948 3.472C10.375 3.005 11.96 2.967 12.24 2.967C13.993 2.967 15.352 3.654 16.549 4.887L19.431 2.005C17.545 0.771 15.111 0 12.24 0C9.697 0 7.203 0.655 5.093 1.956C2.983 3.256 1.341 5.074 0.384 7.288C-0.573 9.502 -0.169 11.834 0.384 14.048C1.341 16.262 2.983 18.08 5.093 19.381C7.203 20.681 9.697 21.336 12.24 21.336C15.111 21.336 17.545 20.565 19.431 19.331C21.317 18.097 22.015 16.425 22.015 14.378C22.015 13.144 21.782 11.91 21.383 10.676H12.24Z" />
//             </svg>
//             Google
//           </button>
//         </div>

//         {/* Don't have an account link */}
//         <p className="text-center text-gray-300 text-sm mb-8">
//           Don't have an account ?{' '}
//           <button
//             type="button"
//             className="text-blue-400 hover:underline font-medium"
//             onClick={() => alert('Navigate to signup page (simulated)')} // Placeholder for navigation
//           >
//             Sign up Here
//           </button>
//         </p>

//         {/* Contact Us section */}
//         <div className="text-center">
//           <p className="text-gray-300 text-sm mb-4">Contact Us</p>
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
//               <Instagram size={30} />
//             </a>
//             <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
//               <Facebook size={30} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;