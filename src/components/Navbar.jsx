import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  let Links = [
    { name: "Send Files", link: "/" },
    { name: "Receive Files", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact Us", link: "#" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="shadow-md z-20 w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#242424] py-6 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <img src="../img/logo.png" alt="logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden z-50"
        >
          {open ? <MdClose /> : <FiMenu />}
        </div>
        <ul
          className={`md:flex rounded-lg p-4 md:items-center md:pb-0 lg:pb-4 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-600 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
