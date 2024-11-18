import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import AddCarForm from "./AddCarForm"; // Import the AddCarForm component

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAddCarForm, setShowAddCarForm] = useState(false); // State to show/hide AddCarForm

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAddCarForm = () => {
    setShowAddCarForm(!showAddCarForm); // Toggle AddCarForm visibility
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />

      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`md:flex md:space-x-8 ${
          isMenuOpen ? "block" : "hidden"
        } absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
      >
        <Link
          to="/"
          className="block md:inline hover:text-gray-400 mb-2 md:mb-0"
        >
          Home
        </Link>
        <Link
          to="/company"
          className="block md:inline hover:text-gray-400 mb-2 md:mb-0"
        >
          Company
        </Link>
        <Link
          to="/features"
          className="block md:inline hover:text-gray-400 mb-2 md:mb-0"
        >
          Features
        </Link>
        <Link
          to="/team"
          className="block md:inline hover:text-gray-400 mb-2 md:mb-0"
        >
          Team
        </Link>
        <Link
          to="/contact"
          className="block md:inline hover:text-gray-400 mb-4 md:mb-0"
        >
          Contact
        </Link>

        {/* Show SignIn button when user is signed out */}
        <SignedOut>
          <div className="block md:hidden mb-2">
            <SignInButton>
              <button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 w-full text-center">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        {/* Show SignOut button and AddCarForm when user is signed in */}
        <SignedIn>
          <div className="block md:hidden mb-2">
            <SignOutButton>
              <button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 w-full text-center">
                Sign Out
              </button>
            </SignOutButton>
          </div>

          {/* Add Car button */}
          <div className="block md:hidden mb-2">
            <button
              onClick={toggleAddCarForm}
              className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 w-full text-center"
            >
              Add Car
            </button>
          </div>

          {/* Conditional rendering of AddCarForm */}
          {showAddCarForm && (
            <div className="absolute top-16 left-0 w-full bg-gray-800 p-4">
              <AddCarForm />
            </div>
          )}
        </SignedIn>
      </div>

      <div className="hidden md:block relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none"
        />
        <span className="absolute left-3 top-2 text-gray-400">🔍</span>
      </div>

      <div className="hidden md:flex space-x-4">
        {/* Show SignIn button when user is signed out */}
        <SignedOut>
          <SignInButton>
            <button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        {/* Show SignOut button and AddCar button when user is signed in */}
        <SignedIn>
          <SignOutButton>
            <button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Out
            </button>
          </SignOutButton>

          {/* Add Car button */}
          <Link to="/addCar">
            <button className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">
              Add Car
            </button>
          </Link>
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
