import React, { useState } from "react";
import "./Profile.css";

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
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-title">Profile Page</h2>

        <form className="profile-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstname" value={form.firstname} onChange={handleChange} />

          <label>Last Name:</label>
          <input type="text" name="lastname" value={form.lastname} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />

          <label>Age:</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} />

          <label>Gender:</label>
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;