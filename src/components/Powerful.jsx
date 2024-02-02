import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const Powerful = () => {
  return (
    <div className="w-[80%] p-20 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">Powerful Features</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <img
              className="mx-auto p-4"
              src="../img/secure-shield.png"
              alt="secure"
            />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 text-center">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <FaRegPaperPlane className="text-8xl mx-auto text-[#F28026] p-4" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 text-center">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <img
              className="mx-auto p-4"
              src="../img/briefcase.png"
              alt="briefcase"
            />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 text-center">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <img className="mx-auto p-4" src="../img/Fast.png" alt="secure" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 text-center">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <img className="mx-auto p-4" src="../img/videos.png" alt="secure" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 text-center">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <img
              className="mx-auto p-4"
              src="../img/quality.png"
              alt="secure"
            />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 text-center">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Powerful;
