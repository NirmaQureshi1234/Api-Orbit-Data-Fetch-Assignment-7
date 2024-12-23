import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-medium">
          Created with by🖤{" "}
          <span className=" text-indigo-400 font-semibold">Nirma Qureshi</span>
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/NirmaQureshi1234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/nirma-qureshi-28b91a311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Nirma Qureshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
