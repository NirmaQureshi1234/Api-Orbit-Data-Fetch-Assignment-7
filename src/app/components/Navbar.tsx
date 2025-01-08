"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaShoppingCart } from "react-icons/fa";
import { FaHome, FaBox, FaBook } from "react-icons/fa";

const Navbar = ({ cartCount }: { cartCount: number }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">Pro Assignment</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              <FaHome className="inline-block mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/client" className="hover:text-gray-300 transition">
              <FaBox className="inline-block mr-2" /> Products
            </Link>
          </li>
          <li>
            <Link href="/server" className="hover:text-gray-300 transition">
              <FaBook className="inline-block mr-2" /> Books
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart size={24} className="hover:text-gray-300 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </div>
          <Link
            href="https://github.com/NirmaQureshi1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="hover:text-gray-300 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nirma-qureshi-28b91a311"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-gray-300 transition" />
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800 text-white p-4 absolute top-0 left-0 w-full shadow-lg`}
      >
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block hover:text-gray-300 transition">
              <FaHome className="inline-block mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/client"
              className="block hover:text-gray-300 transition"
            >
              <FaBox className="inline-block mr-2" /> Products
            </Link>
          </li>
          <li>
            <Link
              href="/server"
              className="block hover:text-gray-300 transition"
            >
              <FaBook className="inline-block mr-2" /> Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
