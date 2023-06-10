import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-100 py-6 border-b border-gray-200">
      <div className="container flex flex-row justify-between items-center">
        <label className="text-3xl font-semibold">
          Togue<span className="text-orange-400">Rentals</span>
        </label>
        <div className="hidden lg:flex gap-8 font-semibold" >
            <a>Home</a>
            <a>About</a>
            <a>Our Fleet</a>
            <a>Testimonials</a>
            <a>Contact</a>
        </div>
        <div className="hidden md:flex flex-row gap-8 font-semibold">
          <button className="text-gray-600 hover:text-orange-400 transition-all">
            Sign in
          </button>
          <button className="bg-orange-400 text-gray-100 py-4 px-8 rounded-full hover:bg-orange-600 hover:text-gray-200 transition-all">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
