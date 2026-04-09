import React, { useState } from "react";

function Profile() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", form);
  };

  return (
    <>
      <h2>Profile Page</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <br />

        <label>Gender:</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Profile;