import React from "react";

export default function Testimonials() {
  return (
    <div className="mt-16 py-24 flex flex-col gap-8 bg-white px-8 lg:px-0">
      <label className="block text-center text-5xl font-bold">
        Testimonials
      </label>
      <div className="w-[50px] bg-orange-400 h-[4px] mx-auto"></div>
      <label className="max-w-[1000px] mx-auto text-xl text-gray-700 font-light text-center">
        Our clients have experienced our service and results, and they're eager
        to share their positive experiences with you.
      </label>
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-4"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1360px] gap-8 mx-auto">
        <div className="bg-gray-100 shadow-2xl p-16 flex flex-col gap-8 h-full justify-between">
          <p className="text-xl font-semibold">
            "Renting a fast JDM car was an unforgettable experience. The power
            and performance were mind-blowing, and the staff made the process
            seamless. Driving the car was a thrilling adventure, with
            lightning-fast acceleration and precise handling. It was an
            adrenaline rush that made me feel like a professional racer."
          </p>
          <div className="flex flex-row w-full justify-between items-end">
            <div className="flex flex-row gap-4">
              <img
                className="rounded-full w-[96px] h-[96px] object-cover border border-gray-200"
                src="/smokey.jpeg"
              />
              <div className="flex flex-col h-ful justify-center gap-2">
                <label className="font-bold text-2xl">Smokey Nagata</label>
                <label className="text-xl font-medium">Toyota Supra</label>
              </div>
            </div>
            <img className="w-[96px]" src="/quote.svg" />
          </div>
        </div>

        <div className="bg-gray-100 shadow-2xl p-16 flex flex-col gap-8 h-full justify-between">
          <p className="text-xl font-semibold">
            "I had the time of my life renting a fast JDM car. The sleek design
            and raw power were absolutely incredible. The rental agency's
            knowledgeable staff made everything easy, and the driving experience
            was a thrilling rush. It's an adventure I'll never forget, and I
            can't wait to do it again."
          </p>
          <div className="flex flex-row w-full justify-between items-end">
            <div className="flex flex-row gap-4">
              <img
                className="rounded-full w-[96px] h-[96px] object-cover border border-gray-200"
                src="/jdm.jpeg"
              />
              <div className="flex flex-col h-ful justify-center gap-2">
                <label className="font-bold text-2xl">Khang Zoe</label>
                <label className="text-xl font-medium">Lancer Evolution</label>
              </div>
            </div>
            <img className="w-[96px]" src="/quote.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
