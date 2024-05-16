import React from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function AdminAdd() {
  return (
    <>
      <Helmet>
        <title>Admin Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Formik
        initialValues={{ name: "", desc: "", price: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          desc: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch("http://localhost:3000/products", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="desc">Description:</label>
          <Field name="desc" type="text" />
          <ErrorMessage name="desc" />

          <label htmlFor="price">Price:</label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default AdminAdd;
