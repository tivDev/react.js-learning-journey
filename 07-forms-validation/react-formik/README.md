# react-formik

A React project created with Vite, using Formik and Yup for form validation.

---

## Setup Instructions

1. Create the project using Vite React template:

```bash
npm create vite@latest react-formik -- --template react
cd react-formik
````

2. Install required dependencies:

```bash
npm install formik yup
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`).

---

## Features

* Form handling with Formik
* Validation with Yup schema
* Real-time validation on blur
* Simple email and password fields

---

## Usage

Fill in the form fields. Validation errors will show below each input. On successful submit, the form data will be displayed in an alert.

---

## Example Code (src/App.jsx)

```jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>React Formik Validation</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red", marginTop: "0.25rem" }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password:</label><br />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red", marginTop: "0.25rem" }}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
```
