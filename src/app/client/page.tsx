"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image"; // Import the Image component from next/image

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        // Check if the error is an instance of Error and handle it accordingly
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred while fetching products.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-400">
            Client-side Fetched Products
          </h1>
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}  
                    height={300}
                    className="w-full h-48 object-contain p-4 bg-gray-700 rounded-t-lg"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold text-indigo-300">
                      {product.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-3 overflow-hidden">
                      {product.description}
                    </p>
                    <p className="text-indigo-400 font-bold mt-auto text-lg">
                      ${product.price}
                    </p>
                    <button className="mt-4 w-full bg-indigo-500 py-2 px-4 rounded text-white hover:bg-indigo-600 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
