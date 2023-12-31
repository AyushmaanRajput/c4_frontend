import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
    </Routes>
  );
};
