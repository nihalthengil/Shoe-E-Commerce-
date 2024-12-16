import { Formik, useFormik, Form, Field } from "formik";
import React from "react";
import { SignUpValidation } from "./SignUpValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cart: [],
  role:"user",
  confirm_password: "",
};





const SignUp = () => {
  const Navigate =useNavigate();
  const handleSubmit = async (value, { resetForm }) => {
  try {
    const response = await axios.post("http://localhost:3000/users", value);
    alert("Registration Successful");
    resetForm();
    Navigate("/login")
  } catch (error) {
    console.error(
      "Error during submission:",
      error.response?.data || error.message
    );

    alert("Failed to register.Please try again later.");
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg  mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registration
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.name && touched.name && (
                  <small className="text-red-500 text-sm">{errors.name}</small>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <small className="text-red-500 text-sm">{errors.email}</small>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                {errors.password && touched.password && (
                  <small className="text-red-500 text-sm">
                    {errors.password}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirm_password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                />
                {errors.confirm_password && touched.confirm_password && (
                  <small className="text-red-500 text-sm">
                    {errors.confirm_password}
                  </small>
                )}
              </div>
                <p className="text-sm">Already have a account?<Link className="hover:text-blue-700" to="/login">Login</Link></p>
              <button
                type="submit"
              
                className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
