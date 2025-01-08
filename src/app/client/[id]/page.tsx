"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0); // Cart count state
  const [showPopup, setShowPopup] = useState(false); // Popup state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred while fetching the product.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); 
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto p-4">
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : product ? (
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col sm:flex-row">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={400}
                  className="w-full sm:w-1/3 object-contain p-4 bg-gray-700 rounded-lg"
                />
                <div className="flex flex-col flex-grow p-4">
                  <h1 className="text-2xl font-bold text-indigo-400">
                    {product.title}
                  </h1>
                  <p className="mt-4 text-gray-300">{product.description}</p>
                  <p className="mt-2 text-lg text-indigo-400 font-bold">
                    Category: {product.category}
                  </p>
                  <p className="text-xl font-bold mt-4 text-indigo-500">
                    ${product.price}
                  </p>
                  <button
                    onClick={handleAddToCart}
                    className="mt-6 bg-indigo-500 py-2 px-4 rounded text-white hover:bg-indigo-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">
              Product not found. Please try again.
            </p>
          )}
          {showPopup && (
            <div className="fixed top-20 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              Product added to cart!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
