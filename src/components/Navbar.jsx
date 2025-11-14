import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 bg-white/60 backdrop-blur-xl border-b border-gray-200 flex justify-between items-center fixed top-0 z-50">
      
      {/* Logo / Name */}
      <h1 className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent 
                     bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
        Laiba.
      </h1>

      {/* Nav Links */}
      <div className="flex gap-6 items-center">
        <a href="#hero" className="hover:text-teal-400 transition">Home</a>
        <a href="#benefits" className="hover:text-pink-400 transition">What to Expect</a>
        <button className="px-4 py-2 rounded-full border border-teal-400 text-teal-500 hover:bg-teal-100 transition">
          Portfolio
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
