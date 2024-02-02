import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center pt-16 h-[50%] md:h-[50%] overflow-hidden">
        <div className="w-full h-[50%] absolute z-10 bg-[#242424]"></div>
        <div className="w-[30%] h-[50%] absolute bg-[#0EE5CA] z-20 right-0">
          <div className="w-[850px] h-[400px] absolute bg-[#F28026] right-[-10%] bottom-0 rounded-tl-full rounded-tr-full z-50"></div>
        </div>

        <div className="h-[90%] flex justify-center items-center gap-2 md:gap-3 lg:gap-6 z-30">
          <div className="w-[50%] text-left flex flex-col gap-y-2 md:gap-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-white">
              Ready to send large files securely?
            </h1>
            <p className="text-sm md:text-2xl lg:text-3xl text-white">
              We built CloudExpress to make file tranfers effortless. Regardless
              of the size or file type, with CloudExpress, your files will
              always reach their destination.
            </p>
          </div>
          <div className="flex gap-4 flex-col justify-center items-center">
            <button
              type="button"
              class="px-2 py-2 md:px-8 md:py-5 text-base font-medium text-gray-600 bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none  rounded-lg text-center"
            >
              Transfer Now <FaAngleRight />
            </button>
            <p className="text-white text-sm md:text-lg lg:text-xl">
              Upto 10GB Free
            </p>
          </div>
        </div>
      </div>
      <div className="flex py-2 text-center text-black relative mt-20 bottom-0 h-[10%] bg-white z-40">
        <div className="w-[50%] mx-auto">
          <p className="text-2xl font-extralight">
            © 2023 Cloud Express. All Rights Reserved
          </p>
        </div>
        <div className="w-[50%]">
          <p className="text-2xl font-extralight">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
