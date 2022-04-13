import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";
const Auth = ({ authenticate }) => {
  const navigate = useNavigate();

<Login/>
  const onClick = () => {
    authenticate();
    navigate("profile");
  };
  return (
    <div>
      <h2> Click here to Login </h2>
      <button onClick={onClick}>Login</button>
      
    </div>
  );
};



export default Auth;
