import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
 const navigate =useNavigate();

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
    // console.log("🚀 ~ handleSubmit ~ response:", response.data)
    const users = response.data[0];
    if (users) {
      if (users.password === formData.password) {
        navigate("/");
      } else {
        alert("incorrect password");
      }
    }
  };
  return (
    <div>
      <h2>Log In</h2>
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidation}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <br />
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogIn;
