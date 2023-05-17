import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import RedErrorMessage from "./RedErrorMessage";

function FormicForm() {
  //   const [data, setData] = useState({});

  const newValidations = yup.object({
    name: yup.string().required("Name is required."),
    email: yup.string().email().required("Email is required."),
    password: yup.string().min(5).max(50).required("Password must greater than 10 & less than 50."),
  });

  return (
    <>
      <Formik
        validationSchema={newValidations}
        initialValues={{
          name: "",
          email: "",
          password: "",
          hobb: "",
          gender: "",
          msg: "",
          Country: "",
        }}
        onSubmit={(values) => {
          //   setData(values);
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="fname">Your Name :</label>
          <Field
            style={{ marginLeft: "10px" }}
            id="fname"
            type="text"
            name="name"
          />
          <RedErrorMessage name='name' />
          <br /> <label htmlFor="email"> Email : </label>
          <Field
            style={{ marginLeft: "10px" }}
            id="email"
            type="text"
            name="email"
          />
          <RedErrorMessage name='email' />
          <br /> <label htmlFor="pass">Password :</label>
          <Field
            style={{ marginLeft: "10px" }}
            id="pass"
            type="password"
            name="password"
          />
          <RedErrorMessage name='password' />
          <br></br>
          <label htmlFor="gender">Gender : &nbsp; </label>&nbsp;
          <Field type="radio" name="gender" value="Male"></Field>
          <label htmlFor="gender">&nbsp;Male &nbsp; </label>
          <Field type="radio" name="gender" value="Female"></Field>
          <label htmlFor="gender">Female &nbsp; </label>
          <br></br>
          <label htmlFor="message">Your message : </label>
          <Field as="textarea" name="msg" row="10" />
          <br></br>
          &nbsp; &nbsp;
          <label htmlFor="Hobbies"> Hobbies:</label>
          &nbsp; &nbsp;
          
          <Field type="checkbox" name="hobb" value="Writing"></Field>
          <label htmlFor="Hobbies">Sleeping</label> &nbsp;
          <Field type="checkbox" name="hobb" value="Reading"></Field>
          <label htmlFor="Hobbies">Reading</label> &nbsp;
          <Field type="checkbox" name="hobb" value="Sleeping"></Field>
          <label htmlFor="Hobbies">Travelling</label>&nbsp;
        
          <br /> <label htmlFor="Country">Country : </label>
          <Field name="Country" as="select">
            <option value="canada">Canada</option>
            <option value="Malysia">Malaysia</option>
          </Field>
          <br></br>
          <button type="submit">Submit </button>
        </Form>
      </Formik>

      {/* <div>
        <p>Welcome {data.name}</p>
      </div> */}
    </>
  );
}

export default FormicForm;
