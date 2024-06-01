import React from "react";
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  return (
    <div className="w-3/4 h-4/6">
      <div className="w-3/4  mx-auto my-10 bg-[#f4f6fb] rounded-lg shadow-md p-5">
        <div className="flex items-center justify-center">
          <RxAvatar className="text-3xl w-52 h-52 rounded-full text-[#363740]" />
        </div>
        <div className="mt-10 flex flex-col gap-8 text-[#363740] mb-2">
          <span className="text-l font-semibold ">Name : Bahadır Yıldız</span>
          <span className="text-l font-semibold ">Email : bahadiryildiz137@gmail.com</span>
          <span className="text-l font-semibold ">Password : 9045029304</span>
          <span className="text-l font-semibold">City : Istanbul</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
