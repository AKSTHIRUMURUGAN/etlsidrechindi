"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null); // For displaying errors
  const router = useRouter(); // To handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setErrorMessage(null); // Reset any previous errors

    try {
      const response = await axios.post("/api/signin", formData); // Send data to backend

      if (response.status === 200) {
        const { user } = response.data; 
        console.log(user);// Get the user ID from the response
        localStorage.setItem("id", user._id); // Set the user ID to localStorage

        router.push("/assessment"); // Redirect to a protected page or dashboard on success
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error); // Show error from the backend
      } else {
        setErrorMessage("An unexpected error occurred."); // General error message
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 container mx-auto flex items-center justify-center min-h-screen">
      <div className="w-full bg-white rounded-lg shadow dark:border dark:border-gray-700 lg:w-3/4 xl:w-1/2 dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign In
          </h1>
          {errorMessage && <div className="text-red-600">{errorMessage}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w/full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w/full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
            
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Create one here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SigninForm;
