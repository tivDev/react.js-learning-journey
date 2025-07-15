import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Validate on every input change
  });

  // Just watch form data to show it live if you want
  const formData = watch();

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Live Validation with React Hook Form</h2>
      <form>
        {/* Name Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name:</label><br />
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        {/* Age Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="age">Age:</label><br />
          <input
            id="age"
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "You must be at least 18" },
              max: { value: 99, message: "Age must be less than 100" },
            })}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>
      </form>

      <pre style={{ background: "#f4f4f4", padding: "1rem" }}>
        <strong>Form data:</strong> {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}
