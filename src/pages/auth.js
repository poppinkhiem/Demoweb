import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../style/Login.css";
const schema = yup.object().shape({
  username: yup.string().min(4).max(12).required(),
  password: yup.string().min(8).max(20).required(),
});

const Auth = ({ authenticate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    if (
      username === localStorage.getItem("username") &&
      password === localStorage.getItem("password")
    ) {
      authenticate();
      navigate("home");
    } else {
      console.log("Wrong");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignup(e) {
    var pass = localStorage.setItem("password", "Aa123456");
    var user = localStorage.setItem("username", "khiem");
  }

  function Logout() {
    localStorage.clear();
  }
  const onSubmit = (data) => console.log(data);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <form onSubmit={handleSubmit(onClick)}>
        <input
          placeholder="Username"
          {...register("username", { required: true })}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>{errors.username?.message}</p>
        <input
          placeholder="Password"
          type={passwordShown ? "text" : "password"}
          {...register("password", { required: true })}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errors.password?.message}</p>
        <br />
        <input type="submit" className="button" value="Log In"/>
        <br />
        <button onClick={handleSignup}>
          {" "}
          <span>Sign Up</span>
        </button>
        <br />
        <button onClick={Logout}>
          <span>Clear</span>
        </button>
        <br />
        <button onClick={togglePassword}>
          <span>Show Password</span>
        </button>
      </form>
    </>
  );
};
export default Auth;
