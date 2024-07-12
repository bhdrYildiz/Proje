import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#f4f6fb] flex justify-between w-full max-h-32 h-24">
      <div className="flex items-center h-auto justify-end w-3/4 text-xl mr-8">
        <MdOutlineEmail className="w-10 h-10 text-[#363740] mr-4" />
        <PiBellSimpleRingingBold className="w-10 h-10 text-[#363740] ml-4" />
        <hr className="w-1 h-10 bg-[#363740] text-[#363740] ml-4"></hr>
      </div>

      <div className="flex w-96 h-20 mt-2 justify-between bg-[#FCC400] p-4 rounded-s-3xl">
        <button className="flex items-center justify-center">
          <FaRegUserCircle className="w-12 h-12 text-[#363740] ml-6" />
        </button>
        <div className="flex flex-col items-start justify-end mr-12">
          <h1 className="">Kaan Furkan Çakıroğlu</h1>
          <h3 className="">kaan@gmail.com</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
