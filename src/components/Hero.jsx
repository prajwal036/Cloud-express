import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="w-[80%] h-auto flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row justify-center bg-white mx-auto">
          <div className="py-10">
            <h1 className="text-6xl font-extrabold leading-normal">
              Send large files and documents{" "}
              <span className="text-gray-400"> quickly and securely</span>
            </h1>
          </div>
          <div className="flex items-center py-16">
            <p className="text-xl">
              Sending hefty files just got smarter. Cloud Express guarantees
              speedy and protected deliveries. Share large documents without a
              hitch – start enjoying hassle-free transfers today!
            </p>
          </div>
        </div>
        <div className="border-2"></div>
        <div className="flex flex-col items-center md:flex-row pt-4 md:py-16">
          <div className="flex flex-col h-80vh items-center gap-10 pt-2 md:pt-14">
            <h1 className="text-6xl font-extrabold leading-normal">
              Sending Files
            </h1>
            <p className="text-xl">
              Transferring files with Cloud Express is insanely easy:
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <FaCheck className="text-[#F28026] text-4xl" />
                <p className="text-xl">
                  Click on the hand icon and select the files you want to
                  transfer.
                </p>
              </div>
              <div className="flex gap-4">
                <FaCheck className="text-[#F28026] text-4xl" />
                <p className="text-xl">
                  Enter the recipient’s email and your email address
                </p>
              </div>
              <div className="flex gap-4">
                <FaCheck className="text-[#F28026] text-4xl" />
                <p className="text-xl">
                  Click on the ‘Send’ button and transfer your files to them -
                  free up to 10GB.
                </p>
              </div>
              <div className="flex pt-6">
                <button
                  type="button"
                  class="px-6 py-3.5 text-base font-medium text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-center dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-300"
                >
                  Transfer Now <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <img src="../img/send_files.png" alt="send files" />
          </div>
        </div>
        <div className="border-2"></div>
        <div className="flex justify-center mt-14 gap-x-10 items-center flex-col md:flex-row py-10 md:py-18">
          <div>
            <img
              className="w-full h-auto object-fill pb-4"
              src="../img/Image.png"
              alt="image share"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-[50%]">
            <h1 className="text-7xl font-extrabold">Why Use Cloud Express?</h1>
            <p className="text-xl">
              Whether it’s day-to-day or business-related, Cloud Express is your
              answer for secure file transfers. Our platform accommodates both
              individuals and professionals, offering a safe space for large
              file sharing.
            </p>

            <div className="flex gap-4">
              <FaCheck className="text-[#F28026] text-4xl" />
              <p className="text-xl">
                Click on the hand icon and select the files you want to
                transfer.
              </p>
            </div>
            <div className="flex gap-4">
              <FaCheck className="text-[#F28026] text-4xl" />
              <p className="text-xl">
                Enter the recipient’s email and your email address
              </p>
            </div>
            <div className="flex gap-4">
              <FaCheck className="text-[#F28026] text-4xl" />
              <p className="text-xl">
                Click on the ‘Send’ button and transfer your files to them -
                free up to 10GB.
              </p>
            </div>
          </div>
        </div>
        <div className="border-2"></div>
        <div className="flex flex-col md:flex-row pt-4 md:py-16  mx-auto">
          <div className="flex mx-auto flex-col h-80vh items-center gap-10 pt-2 md:pt-14 w-full md:w-[50%]">
            <h1 className="text-6xl font-extrabold leading-normal">
              Security For Your Files
            </h1>
            <p className="text-xl">
              At Cloud Express, we prioritize the security of your valuable data
              above all else. We understand the importance of safeguarding your
              information during every step of the transfer process.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <FaCheck className="text-[#F28026] text-4xl" />
                <p className="text-xl">
                  Click on the hand icon and select the files you want to
                  transfer.
                </p>
              </div>
              <div className="flex gap-4">
                <FaCheck className="text-[#F28026] text-4xl" />
                <p className="text-xl">
                  Enter the recipient’s email and your email address
                </p>
              </div>
              <div className="flex gap-4">
                <FaCheck className="text-[#F28026] text-4xl" />
                <p className="text-xl">
                  Click on the ‘Send’ button and transfer your files to them -
                  free up to 10GB.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 w-full mx-auto md:my-auto bg-[#d2c8c0] rounded-lg md:w-[50%] h-[50%] overflow-hidden my-10">
            <img
              className="mx-auto m-2"
              src="../img/Security.png"
              alt="security"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh] bg-[#F28026] flex">
        <div className="w-[80%] flex gap-2 md:gap-4 lg:gap-6 items-center mx-auto">
          <img
            className="object-contain h-[20vh] p-4"
            src="../img/Security.png"
            alt="prices"
          />
          <h1 className="text-xl md:text-4xl lg:text-7xl text-white font-extrabold">
            Hasselfree <br /> Pricing
          </h1>
          <div className="flex flex-col gap-y-2 md:gap-y-2">
            <p className="font-extralight text-sm md:text-xl text-white">
              With CloudExpress, you can transfer files of up to 10GB completely
              free. For larger files, we charge a nominal fee of €0.0005 cents
              per MB.
            </p>
            <div className="pt-1 md:pt-2 lg:pt-4">
              <button
                type="button"
                class="px-2 py-1 md:px-8 md:py-5 text-base font-medium text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-center dark:bg-gray-800 dark:hover:bg-orange-700 dark:focus:ring-orange-300"
              >
                Transfer Now <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
