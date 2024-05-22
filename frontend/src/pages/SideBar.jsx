import React from "react";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { CgArrangeFront } from "react-icons/cg";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div
        className={`bg-[#363740] h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180 "
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-[#FCC400] text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white ml-3 mt-2 origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            AmsterdamSoft
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-slate-100 mt-6 py-2 ${
            !open ? "px-4" : "px-2.5"
          }`}
        >
          <BsSearch
            className={`text-black text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-black focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-black rounded-md mt-10">
            <FaHome
              className="text-3xl"
              onClick={() => navigate("/dashboard")}
            />
            <button
              onClick={() => navigate("/dashboard")}
              className={`text-base text-[#f4f6fb] font-medium ${
                !open && "hidden"
              }`}
            >
              Dashboard
            </button>
          </li>
          <li className="text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-black rounded-md mt-10 ">
            <FaRegCalendarAlt
              className="text-3xl"
              onClick={() => navigate("/dashboard/rezervation")}
            />
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              onClick={() => navigate("/dashboard/rezervation")}
            >
              Rezervation
            </span>
          </li>
          <li className="text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-black rounded-md mt-10 ">
            <LuBedDouble
              className="text-3xl"
              onClick={() => navigate("/dashboard/rooms")}
            />
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              onClick={() => navigate("/dashboard/rooms")}
            >
              Room
            </span>
          </li>
          <li className="text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-black rounded-md mt-10 ">
            <CgArrangeFront
              className="text-3xl"
              onClick={() => navigate("/dashboard/management")}
            />
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
              onClick={() => navigate("/dashboard/management")}
            >
              Management
            </span>
          </li>
          <li className="text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-black rounded-md mt-10 ">
            <MdOutlineEventAvailable
              className="text-3xl"
              onClick={() => navigate("/dashboard/availability")}
            />
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              onClick={() => navigate("/dashboard/availability")}
            >
              Availability
            </span>
          </li>
          <li className="text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-black rounded-md mt-10 ">
            <MdOutlineLogout className="text-3xl" />
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
            >
              Log out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
