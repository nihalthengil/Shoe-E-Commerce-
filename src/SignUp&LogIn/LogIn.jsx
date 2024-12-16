import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import toast, { Toaster } from "react-hot-toast";

const LogIn = () => {
  const navigate = useNavigate();
  const { userId, setUserId, username, setUserName } = useContext(Context);
  const initialValues = {
    email: "",
    password: "",
  };

  const SignUpValidation = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (formData) => {
    const response = await axios.get(
      `http://localhost:3000/users?email=${formData.email}`
    );
    const users = response.data[0];

    if (users) {
      if (users.password === formData.password) {
        toast.success("Succuss Login");
        setUserId(users.id);
        setUserName(users.name);
        localStorage.setItem("userId", users.id);
        localStorage.setItem("username", users.name);
        navigate("/");
      } else {
        alert("incorrect password");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center">
          <div>
            <img src="/Img/KixSpace-icon.png" alt="icon" className="h-10" />
          </div>
          <div>
            <img src="/Img/KixSpace_logo.png" alt="icon" className="h-20 " />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 text-left mb-6">
          Log In
        </h2>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <p>
                Don't you have account yet?{" "}
                <Link className="text-blue-800 hover:border-b-2" to="/signup">
                  SignUp
                </Link>
              </p>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md text-lg font-semibold hover:bg-gray-600 transition duration-300"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default LogIn;
