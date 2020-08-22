import React, { useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./CreateUser.module.scss";
import { Redirect } from "react-router-dom";

const ChengeUser = ({ addUser, requestUsers }) => {
  const [isUser, setUser] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        requestUsers();
      }, 1000);
    };
  }, []);

  if (isUser) {
    return <Redirect to={"/users"} />;
  }
  return (
    <Formik
      initialValues={{ name: "", surname: "", desc: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        surname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        desc: Yup.string()
          .min(15, "Must be at least 15 characters long.")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        addUser(values);
        setSubmitting(false);
        setUser(true);
      }}
    >
      <Form className={classes.form}>
        <label htmlFor="name">First Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <label htmlFor="surname">Surname</label>
        <Field name="surname" type="text" />
        <ErrorMessage name="surname" />
        <label htmlFor="desc">Description</label>
        <Field name="desc" as="textarea" className="form-input" />
        <ErrorMessage name="desc" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ChengeUser;
