import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Dashboard = ({ setSelectedReservation }) => {
  return (
    <div className="flex bg-[#C9D0E0] min-h-screen">
      <SideBar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-1 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
