
import { useNavigate } from "react-router-dom";



import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
 username: yup.string().min(8).max(12).required(),
  password: yup.number().min(4).max(8).required(),
}); 



const Auth = ({ authenticate }) => {
  const navigate = useNavigate(); 

  const onClick = () => {
    authenticate();
    navigate("home");
  };
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });



  function handleSignup(e) {
    
    const pass = localStorage.setItem("password", 'khiem');
    const user = localStorage.setItem("username", 8888888);
  }



 function Logout()
 {
   localStorage.clear();
 }
  const onSubmit = (data) => console.log(data);



  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} style={{float: 'right'}}>
      <input placeholder="Username" {...register('username', { required: true } )} />
      <p>{errors.username?.message}</p>
      <input  name="password"
        type="password" placeholder="Password "{...register('password', { required: true } )} />
      <p>{errors.password?.message}</p>
 
      <input type="submit" />
      <button onClick={handleSignup}> Sign Up</button>
      <button onClick={Logout}> Logout</button>
         


    </form>

    </>
  );
}
export default Auth;
