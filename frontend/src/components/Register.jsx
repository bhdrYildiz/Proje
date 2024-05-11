import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex bg-[#363740] flex-col min-h-screen items-center justify-around py-12 lg:px-8">
        <div className="sm:w-full sm:max-w-md mt-10">
          <h2 className="text-center text-3xl font-bold mt-20 text-[#C9D0E0]">
            Register
          </h2>
        </div>
        <Formik
          initialValues={{ fullname: "", email: "", password: "", country: "" }}
          validationSchema={Yup.object().shape({
            fullname: Yup.string().required("Fullname is required"),
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
            <div className="mb-28 sm:w-full sm:max-w-md">
              <Form className="space-y-8" action="#" method="POST">
                <div className="mb-2">
                  <Field
                    type="text"
                    name="fullname"
                    placeholder="Fullname :"
                    className="w-full text-[#F4F6FB] py-2 my-2 bg-transparent border-b border-[#FCC400] outline-none focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="p-4 mb-4 text-sm text-[#FCC400] font-semibold rounded-lg bg-[#C9D0E0] dark:bg-[#C9D0E0] dark:text-red-400"
                  role="alert"
                />
                <div className="mt-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail :"
                    className="w-full text-[#F4F6FB] py-2 my-2 bg-transparent border-b border-[#FCC400] outline-none focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="p-4 mb-4 text-sm text-[#FCC400] font-semibold rounded-lg bg-[#C9D0E0] dark:bg-[#C9D0E0] dark:text-red-400"
                  role="alert"
                />
                <div className="mt-2">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password :"
                    className="w-full text-[#F4F6FB] py-2 my-2 bg-transparent border-b border-[#FCC400] outline-none focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="p-4 mb-4 text-sm text-[#FCC400] font-semibold rounded-lg bg-[#C9D0E0] dark:bg-[#C9D0E0] dark:text-red-400"
                  role="alert"
                />
                <div className="mt-2">
                  <Field
                    type="text"
                    name="country"
                    placeholder="City :"
                    className="w-full text-[#F4F6FB] py-2 my-2 bg-transparent border-b border-[#FCC400] outline-none focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="p-4 mb-4 text-sm text-[#FCC400] font-semibold rounded-lg bg-[#C9D0E0] dark:bg-[#C9D0E0] dark:text-red-400"
                  role="alert"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-[#f5f5f5] my-2 font-semibold bg-[#FCC400] rounded-md p-4 text-center flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#F4F6FB] hover:text-[#363740]"
                >
                  Register
                </button>
                <p
                  className="mt-10 text-center text-m text-[#C9D0E0] cursor-pointer hover:text-[#FCC400]"
                  onClick={() => navigate("/")}
                >
                  Already have an account?
                </p>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
