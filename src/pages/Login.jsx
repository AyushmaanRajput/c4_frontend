import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    axios
      .post(`https://smiling-blue-hermit-crab.cyclic.app/users/login`, formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => (formData.email = e.target.value)}
        />

        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => (formData.password = e.target.value)}
        />

        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
