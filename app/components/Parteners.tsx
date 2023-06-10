import React from "react";

export default function Parteners() {
  return (
    <div className="bg-gray-100 py-16 flex flex-col gap-8">
      <label className="block text-5xl font-bold text-center">
        Meet our Parteners
      </label>
      <div className="mx-auto w-[50px] h-[4px] bg-orange-400"></div>

      <p className="text-lg font-light text-gray-700 text-center px-4 mx-auto max-w-[1360px]">
        To contribute to positive change and achieve our sustainability goals,
        we partner with many extraordinary organizations around the world. Their
        expertise enables us to do far more than we could alone, and their
        passion and talent inspire us. It is our pleasure to introduce you to a
        handful of the organizations whose accomplishments and commitments are
        representative of all the organizations we are fortunate to call our
        partners.
      </p>
      <div className="flex flex-row mx-auto gap-4 max-w-[1000px] w-full flex-wrap justify-around mt-16 items-center">
        <img src="/parteners/enkei.png" className="h-[100px]" />
        <img src="/parteners/toyo.png" className="h-[64px]" />
        <img src="/parteners/nissan.png" className="h-[98px]" />
        <img src="/parteners/motul.png" className="h-[128px]" />
      </div>
    </div>
  );
}

