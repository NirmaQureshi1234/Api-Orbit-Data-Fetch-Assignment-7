"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { FaReact, FaServer, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-900 transition-all">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold  text-indigo-400 mb-6">
          Welcome to the Data Fetching Assignment
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore how to fetch data dynamically from both client-side and
          server-side APIs with real-time animations and interactive UI.
        </p>

        <div className="space-x-6 flex justify-center items-center">
          <motion.button
            className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all flex items-center"
            onClick={() => router.push("/client")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaReact className="inline-block mr-2" /> Go to Client-Side Data
          </motion.button>

          <motion.button
            className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all flex items-center"
            onClick={() => router.push("/server")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaServer className="inline-block mr-2" /> Go to Server-Side Data
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        className="container px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="bg-gray-800 dark:bg-gray-700 text-white shadow-lg rounded-lg p-6 hover:scale-105 transition transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <FaReact className="text-blue-500 mr-2" /> Client-Side Fetching
          </h3>
          <p className="text-gray-300 mt-4">
            Dynamically fetch data on the client side using React hooks,
            providing a seamless user experience.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 dark:bg-gray-700 text-white shadow-lg rounded-lg p-6 hover:scale-105 transition transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <FaServer className="text-green-500 mr-2" /> Server-Side Fetching
          </h3>
          <p className="text-gray-300 mt-4">
            Pre-fetch data on the server side to improve performance, SEO
            optimization, and load time.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 dark:bg-gray-700 text-white shadow-lg rounded-lg p-6 hover:scale-105 transition transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <FaLightbulb className="text-yellow-500 mr-2" /> Why It Matters
          </h3>
          <p className="text-gray-300 mt-4">
            Learn the key differences between client-side and server-side
            fetching and choose the best approach for your project.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Page;
