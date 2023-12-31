import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [login, setLogin] = useState(localStorage.getItem("token") || null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get(`https://smiling-blue-hermit-crab.cyclic.app/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>{data.length} Posts</h1>
      <div>
        {!login ? (
          <Link to="/login">Login</Link>
        ) : (
          data.length > 0 &&
          data.map((el, i) => {
            return (
              <div key={i}>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
