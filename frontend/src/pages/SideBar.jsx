import React, { useState } from "react";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineEventAvailable, MdOutlineLogout } from "react-icons/md";
import { CgArrangeFront } from "react-icons/cg";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <FaHome className="text-3xl" />, path: "/main/dashboard" },
  { name: "Rezervations", icon: <FaRegCalendarAlt className="text-3xl" />, path: "/main/rezervation" },
  { name: "Rooms", icon: <LuBedDouble className="text-3xl" />, path: "/main/rooms" },
  { name: "Management", icon: <CgArrangeFront className="text-3xl" />, path: "/main/management" },
  { name: "Availability", icon: <MdOutlineEventAvailable className="text-3xl" />, path: "/main/availability" },
  { name: "Log out", icon: <MdOutlineLogout className="text-3xl" />, path: "/" },
];

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            className={`text-[#363740] text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-[#363740] focus:outline-none ${
              !open && "hidden"
            }`}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="pt-2">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FCC400] hover:text-[#363740] rounded-md mt-10"
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span
                className={`text-base text-[#f4f6fb] font-medium flex-1 ${
                  !open && "hidden"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
