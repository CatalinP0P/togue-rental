import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-orange-400 text-white font-semibold grid grid-cols-1 lg:grid-cols-2 gap-4 my-32 py-16 items-center px-8 md:px-32 text-center lg:text-start">
      <div className="flex flex-col">
        <label className="uppercase text-2xl 2xl:text-4xl">sign up for amazing offers</label>
        <label className="text-lg 2xl:text-2xl text-stone-400">
          EXCLUSIVE ACCESS FOR OFFERS AND PROMOTIONS
        </label>
      </div>
      <div className="flex flex-row justify-end w-full">
        <input className="p-4 w-full text-black outline-none rounded-l-xl" placeholder="Your email" />
        <button className="py-4 bg-gray-100 text-orange-400 rounded-r-xl px-8" >Subscribe</button>
      </div>
    </div>
  );
}
