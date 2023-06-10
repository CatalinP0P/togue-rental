import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-100 pt-8 pb-32">
      <div className="max-w-[1360px] grid grid-cols-4 gap-4 mx-auto">
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">TougueRental</label>
          <label className="mt-2 text-lg font-light">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </label>
          <label className="mt-2 flex flex-row items-center gap-4">
            <img src="/phone.svg" className="h-[16px]" /> (123) 456 789
          </label>
          <label className="flex flex-row items-center gap-4">
            <img src="/mail.svg" className="h-[16px]" /> rental@gmail.com
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">COMPANY</label>
          <label className="text-lg font-light">New York</label>
          <label className="text-lg font-light">Careers</label>
          <label className="text-lg font-light">Mobile</label>
          <label className="text-lg font-light">How we work</label>
          <label className="text-lg font-light">Blog</label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">Working Hours</label>
          <label className="mt-2 text-lg font-light">
            Mon - Fri: 9:00AM - 9:00PM
          </label>
          <label className="text-lg font-light">Sat: 9:00AM - 5:00PM</label>
          <label className="text-lg font-light">Sun: Closed</label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">SUBSCRIPTION</label>
          <label className="mt-2 text-lg font-light">
            Subscribe your Email address for latest news & updates.
          </label>
          <input
            placeholder="Enter Email Adress"
            className="p-4 bg-gray-200 text-black border-0 outline-none rounded-md"
          />
          <button className="bg-orange-400 text-white py-4 px-4 hover:bg-orange-500 font-bold text-xl" >Subscribe</button>
        </div>
      </div>
    </div>
  );
}
