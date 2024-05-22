import React from "react";
import IMAGE from "../assets/LogoSon.png";
import GOOGLE from "../assets/google.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full flex flex-col">
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail :"
                  className="w-full text-white py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm mt-1 text-red-500"
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password :"
                  className="w-full text-white py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm mt-1 text-red-500"
                />
                <div className="w-full flex items-center justify-between my-2">
                  <p className="text-sm mt-4 font-medium whitespace-nowrap underline underline-offset-2 text-[#C9D0E0] cursor-pointer hover:text-[#FCC400]">
                    Forgot Password?
                  </p>
                </div>

                <button
                  type="submit"
                  onClick={() => navigate("/dashboard")}
                  disabled={isSubmitting}
                  className="w-full text-[#f5f5f5] my-2 font-semibold bg-[#FCC400] rounded-md p-4 text-center flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#F4F6FB] hover:text-[#363740]"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="w-full text-[#363740] my-2 font-semibold bg-[#F4F6FB] border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#FCC400] hover:text-[#F4F6FB]"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>

          <div className="w-full flex flex-col my-4"></div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="text-lg absolute text-black/80 bg-[#F4F6FB] p-1 rounded-md">
              or
            </p>
          </div>

          <div className="w-full text-[#363740] mt-5 font-semibold bg-[#F4F6FB] border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={GOOGLE} className="h-6 mr-2"></img>
            Sign in with Google
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#C9D0E0]">
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
