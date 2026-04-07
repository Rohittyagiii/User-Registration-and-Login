import React, { useState } from "react";

function Register({ setUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    // age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


//  const handleSubmit = (e) => {
//   console.log("my-data",form);
//     e.preventDefault();
//     setUser(form);

//     setForm({
//       name: "",
//       email: "",
//       // age: "",
//     });
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/addusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("My Api response",res,data);
    if (!res.ok) {
      throw new Error(data.msg || "Failed to add user");
    }

    console.log("User added:", data);

    // update UI (optional)
    setUser(data.user || form);

    // reset form
    setForm({
      name: "",
      email: "",
    });

  } catch (err) {
    console.error("Error:", err.message);
  }
};

  return (
    <>
     <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br />
        <label htmlFor="">Email:</label>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br />
        {/* <label htmlFor="">Age:</label>
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
        <br /> */}
        <button type="submit" >Register</button>
      </form>
    </div>
    </>
  );
}

export default Register;