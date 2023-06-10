"use client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { FC, use, useEffect, useState } from "react";
import supra from "../../public/logo.png";

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

const Fleet = () => {
  const [cars, setCars] = useState<any>();
  const [selectedCar, setCar] = useState<any>();

  useEffect(() => {
    const carslist = getCars();
    setCars(carslist);
    setCar(carslist[0]);
  }, []);

  return (
    <div className="mx-4 md:mx-auto mb-64">
      <div className="max-w-[1360px] mx-auto">
        <label className="text-gray-900 font-bold text-6xl block text-center">
          Our Car Fleet
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 text-gray-500 font-semibold pt-16 items-center">
          <div className="h-full col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex flex-col gap-[4px] h-full justify-center">
              {cars?.map((car: any) => {
                return (
                  <label
                    onClick={() => {
                      setCar(car);
                    }}
                    className={
                      "px-4 py-4 w-full text-start cursor-pointer text-xl " +
                      (selectedCar?.Title === car.Title
                        ? " bg-orange-400  text-white"
                        : " hover:bg-orange-200 bg-stone-200")
                    }
                    key={car.Title}
                  >
                    {car.Title}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="relative md:h-full h-0 md:pb-0 pb-[60%] col-span-2 ">
            <img
              src={selectedCar?.Image}
              alt={selectedCar?.Title}
              className="absolute left-0 top-0 w-full h-full object-contain transition-all"
            />
          </div>

          <div className="h-fit col-span-2 md:col-span-1 grid grid-cols-5">
            <div className="flex flex-row col-span-5 text-center bg-orange-400 py-4 text-white font-bold text-2xl mb-4 justify-around w-full rounded-md">
              <label>45€</label>
              <label>/</label>
              <label>Per day</label>
            </div>
            <label className="col-span-2 p-4 border border-gray-400 h-full">
              Model
            </label>
            <label className="col-span-3 p-4 border border-gray-400 h-full">
              {selectedCar?.Stats.model}
            </label>
            <label className="col-span-2 p-4 border border-gray-400 h-full">
              Power (Hp)
            </label>
            <label className="col-span-3 p-4 border border-gray-400 h-full">
              {selectedCar?.Stats.hp}
            </label>
            <label className="col-span-2 p-4 border border-gray-400 h-full">
              Torque (NM)
            </label>
            <label className="col-span-3 p-4 border border-gray-400 h-full">
              {selectedCar?.Stats.nm}
            </label>
            <label className="col-span-2 p-4 border border-gray-400 h-full">
              Doors
            </label>
            <label className="col-span-3 p-4 border border-gray-400 h-full">
              {selectedCar?.Stats.doors}
            </label>
            <label className="col-span-2 p-4 border border-gray-400 h-full">
              Seats
            </label>
            <label className="col-span-3 p-4 border border-gray-400 h-full">
              {selectedCar?.Stats.seats}
            </label>
            <label className="col-span-2 p-4 border border-gray-400 h-full">
              Gearbox
            </label>
            <label className="col-span-3 p-4 border border-gray-400 h-full">
              {selectedCar?.Stats.gearbox}
            </label>
            <button className="col-span-5 bg-orange-400 rounded-md hover:bg-orange-500 mt-2 py-2 text-2xl font-semibold text-white">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
