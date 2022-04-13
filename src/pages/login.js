
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//validate YUP
const schema = yup.object().shape({
  username: yup.string().min(2).required(),
  password: yup.string().min(8).max(32).required(),
});

function Login() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");


  const {
    register,

    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });



function handleSubmit(){
  if (username==="khiem" && password ==="88888888")
  {Navigate("profile")}
}
  function handleSignup(e) {
    e.preventDefault();
    const pass = localStorage.setItem("password", 'khiem');
    const user = localStorage.setItem("username", 8888888);
  }
  const handleLogout = () => {
    setUsername("");
    setPassword("");
    localStorage.clear();
  };
  return (
    <div>
     (
        <form onSubmit={ handleSubmit()} style={{display: 'flex', flexDirection: 'column', width: '50vh', alignItems: 'center', float: 'right'}}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Username</label>


            <input
          
              {...register("usrename")}
              placeholder="username"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
        <p>{errors.email?.message}</p>
            <br />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
            
              {...register("password")}
              placeholder="password"
              type="password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          <p>{errors.password?.message}</p>
      <br />

          </div>
          <button onClick={handleSignup}> Sign Up</button>
          <button onClick={handleLogout}> Log out</button>
          <button type="submit">Login</button>


        </form>
  
    </div>
  );
}

export default Login;
