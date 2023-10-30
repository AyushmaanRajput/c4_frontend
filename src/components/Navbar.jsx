import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  function logoutHandler() {
    axios
      .post(`https://smiling-blue-hermit-crab.cyclic.app/logout`)
      .then((res) => {
        localStorage.removeItem("logout");
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/posts">Posts</Link>
      <Link onClick={logoutHandler}>Logout</Link>
    </div>
  );
};
