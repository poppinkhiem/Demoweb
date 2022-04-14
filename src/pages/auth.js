import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";
const Auth = ({ authenticate }) => {
  const navigate = useNavigate(); 

  const onClick = () => {
    authenticate();
    navigate("home");
  };

  return (
    <div style={{float: 'right'}}>
      <h2> Click here to Login </h2>
      <button onClick={onClick}>Login</button>
      
    </div>
  );
};



export default Auth;
