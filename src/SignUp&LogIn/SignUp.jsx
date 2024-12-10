import { Formik, useFormik, Form, Field } from "formik";
import React from "react";
import { SignUpValidation } from "./SignUpValidation";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cart: [],
  confirm_password: "",
};

const handleSubmit = async (value, { resetForm }) => {
  try {
   const response = await axios.post("http://localhost:3000/users", value);
   alert("Registration Successful");
   resetForm();
  } catch (error) {
    console.error("Error during submission:", error.response?.data || error.message);
  
    alert("Failed to register.Please try again later.")
  }
};

const SignUp = () => {
  return (
    <div>
      <h2>Registration</h2>
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpValidation}
          onSubmit={handleSubmit}
        >
          {({ errors,touched }) => (
            <Form>
              <label htmlFor="name">Full Name</label>
              <br />
              <Field type="text" name="name" />
              <br />
              {errors.name && touched.name && <small>{errors.name}</small>}
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <Field type="email" name="email" />
              <br />
              {errors.email && touched.email && <small>{errors.email}</small>}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <Field type="password" name="password" />
              <br />
              {errors.password && touched.password && <small>{errors.password}</small>}
              <br />
              <label htmlFor="confirm password">Confirm Password</label>
              <br />
              <Field type="password" name="confirm_password" />
              <br />
              {errors.confirm_password && touched.confirm_password &&(
                <small>{errors.confirm_password}</small>
              )}
              <br />
              <button type="submit">SignUp</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
