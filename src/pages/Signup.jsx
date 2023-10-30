import axios from "axios";
import React, { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    age: 0,
    city: "",
    is_married: false,
  });
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    axios.post(`https://smiling-blue-hermit-crab.cyclic.app/users/register`, formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.token));
    }).catch(err=>console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(e) => (formData.name = e.target.value)} />
        <br />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => (formData.email = e.target.value)}
        />
        <br />
        <label>Gender</label>
        <input
          type="text"
          onChange={(e) => (formData.gender = e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => (formData.password = e.target.value)}
        />
        <br />
        <label>Age</label>
        <input type="text" onChange={(e) => (formData.age = +e.target.value)} />
        <br />
        <label>City</label>
        <input type="text" onChange={(e) => (formData.city = e.target.value)} />
        <br />
        <label>isMarried</label>
        <input
          type="checkbox"
          onChange={(e) => (formData.is_married = e.target.checked)}
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};
