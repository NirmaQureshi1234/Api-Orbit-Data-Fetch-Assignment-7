import React from "react";
import Navbar from "@/app/components/Navbar";

type Book = {
  id: number;
  name: string;
  author: string;
  available: boolean;
};

const Books = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books/");
  const books: Book[] = await res.json();

  return (
    <>
      <Navbar cartCount={0} />
      <div className="w-full p-0 bg-gray-900 min-h-screen overflow-x-hidden">
        <h1 className="text-4xl font-extrabold mb-8 text-center  text-indigo-400">
          Server-Side Fetched Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-indigo-400">
                  {book.name}
                </h2>
                <p className="text-gray-300">Author: {book.author}</p>
                <p
                  className={`mt-2 ${
                    book.available
                      ? " text-indigo-500 font-semibold"
                      : "text-red-500 font-semibold"
                  }`}
                >
                  {book.available ? "Available" : "Not Available"}
                </p>
                {/* Add an interactive button */}
                <button
                  className={`mt-4 w-full py-2 px-4 rounded ${
                    book.available
                      ? " bg-indigo-400 hover:bg-indigo-400"
                      : "bg-red-500 cursor-not-allowed"
                  } text-white transition duration-300`}
                  disabled={!book.available}
                >
                  {book.available ? "Reserve Now" : "Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;

 




 








 