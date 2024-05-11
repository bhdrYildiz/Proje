import React from "react";
import IMAGE from "../assets/LogoSon.png";
import GOOGLE from "../assets/google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="w-full h-full flex items-center justify-center bg-[#F4F6FB]">
          <img
            src={IMAGE}
            className="flex flex-col items-center justify-center rounded-xl border-2 border-[#FCC400]"
          ></img>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#363740] flex flex-col p-20 justify-between items-center">
        <h1 className="w-full max-w-[550px] mx-auto text-xl text-[#F4F6FB] font-semibold mr-auto"></h1>

        <div className="w-full flex flex-col max-w-[550px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2 text-[#F4F6FB]">
              Login
            </h3>
            <p className="text-base mb-2 text-[#F4F6FB] ">
              Welcome back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="E-mail :"
              className="w-full text-white py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password :"
              className="w-full text-white py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="text-sm mt-4 font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-[#F4F6FB]">
              Forgot Password?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button 
            onClick={() => navigate("/dashboard")}
            className="w-full text-[#f5f5f5] my-2 font-semibold bg-[#FCC400] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Log in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-full text-[#363740] my-2 font-semibold bg-[#F4F6FB] border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="text-lg absolute text-black/80 bg-[#F4F6FB] p-1 rounded-md">
              or
            </p>
          </div>

          <div className="w-full text-[#363740] my-5 font-semibold bg-[#F4F6FB] border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={GOOGLE} className="h-6 mr-2"></img>
            Sign in with Google
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#F4F6FB]">
            Not a member?
            <button
              onClick={() => navigate("/register")}
              className="rounded-md bg-[#FCC400] px-5 py-2 text-sm font-semibold text-[#F4F6FB] shadow-sm hover:bg-[#F4F6FB] hover:text-[#363740] ml-5"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
