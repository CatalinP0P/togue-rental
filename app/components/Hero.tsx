"use client";
import React, { useEffect, useState } from "react";

export function getCars() {
  console.log("data fetched");
  return [
    {
      Title: "Toyota Supra MKIV",
      Image: "/supra.png",
      Stats: {
        hp: 640,
        nm: 550,
        doors: 2,
        seats: 4,
        gearbox: "Manual",
        model: "Coupe",
      },
    },
    {
      Title: "Nissan 240sx S15",
      Image: "/s15.png",
      Stats: {
        hp: 420,
        nm: 350,
        doors: 2,
        seats: 2,
        gearbox: "Manual",
        model: "Coupe",
      },
    },
    {
      Title: "Nissan R33 Skyline GTR",
      Image: "/r33.png",
      Stats: {
        hp: 540,
        nm: 750,
        doors: 2,
        seats: 2,
        gearbox: "Manual",
        model: "Coupe",
      },
    },
    {
      Title: "Mazda MX-5 Turbo ",
      Image: "/mx5.png",
      Stats: {
        hp: 440,
        nm: 550,
        doors: 2,
        seats: 2,
        gearbox: "Manual",
        model: "Cabrio",
      },
    },
    {
      Title: "Nissan 350z",
      Image: "/350.png",
      Stats: {
        hp: 310,
        nm: 490,
        doors: 2,
        seats: 2,
        gearbox: "Manual",
        model: "Coupe",
      },
    },
    {
      Title: "Nissan R35 GTR",
      Image: "/r35.png",
      Stats: {
        hp: 700,
        nm: 900,
        doors: 2,
        seats: 4,
        gearbox: "Automatic",
        model: "Coupe",
      },
    },
  ];
}

export default function Hero() {
  const [cars, setCars] = useState<any>();
  const [states, setStates] = useState([
    "Arizona",
    "Vermont",
    "Texas",
    "Oregon",
    "Kentucky",
  ]);

  useEffect(() => {
    const x = getCars();
    setCars(x);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 pb-24 md:pb-32">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-8 items-center h-[105vh] mt-[-155px]">
        <div className="flex flex-col text-4xl lg:text-6xl font-bold pt-8 w-full px-4 xl:px-0 text-gray-900">
          <label className="text-2xl font-semibold">Plan your trip now!</label>
          <label>
            Drive Your <span className="text-orange-400">Dream</span> Car?
          </label>
          <label>We got You Covered</label>
          <p className="text-sm lg:text-lg font-medium pt-2 max-w-[500px] mx-auto lg:mx-0 lg:max-w-none">
            Experience the adrenaline of JDM legends. Choose from our fleet of
            exotic Japanese cars and embark on a thrilling cinematic adventure.
          </p>
          <div className="flex flex-row gap-4 mt-8 justify-center lg:justify-normal">
            <button className="bg-orange-400 text-white rounded-md px-8 py-4 text-lg font-semibold hover:bg-orange-600 transition-all">
              Book now
            </button>
            <button className="bg-gray-900 text-white rounded-md px-8 py-4 text-lg font-semibold">
              Learn more
            </button>
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover h-0 pb-[60%] hidden lg:block"
          style={{ backgroundImage: "url(/gtr.png)" }}
        ></div>
      </div>

      <div className="max-w-[1360px] p-8 bg-white shadow-md flex flex-col gap-8 mx-4 md:mx-auto">
        <label className="text-orange-400 font-bold text-3xl">Book a car</label>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4 font-semibold">
          <div className="flex flex-col gap-2">
            <label>Car</label>
            <select className={inputClass}>
              <option>Select Your Car</option>
              {cars?.map((car: any) => {
                return <option key={car.title}>{car.Title}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>From Location</label>
            <select className={inputClass}>
              <option>Select Pick-up location</option>
              {states.map((state: any) => {
                return <option key={state}>{state}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>To Location</label>
            <select className={inputClass}>
              <option>Select Your Drop-of Location</option>
              {states.map((state: any) => {
                return <option key={state}>{state}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>Pick-up Date</label>
            <input
              className={inputClass}
              placeholder="Select Pick-up Date"
              type="date"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Drop-of Date</label>
            <input
              className={inputClass}
              placeholder="Select Drop-of Date"
              type="date"
            />
          </div>
          <button className="mt-8 p-2 bg-orange-400 font-semibold text-white rounded-md">
            Book Car
          </button>
        </div>
      </div>
    </div>
  );
}

const inputClass = "p-2 border border-gray-200 rounded-md";
