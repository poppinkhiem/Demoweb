
import { useNavigate } from "react-router-dom";



import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(12).required(),
}); 



const Auth = ({ authenticate }) => {
  const navigate = useNavigate(); 

  const onClick = () => {
    authenticate();
    navigate("home");
  };
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  function handleSignup(e) {
    
    const pass = localStorage.setItem("password", 'khiem');
    const user = localStorage.setItem("username", 8888888);
  }

  const onSubmit = (data) => console.log(data);



  return (
    <>
    <form onSubmit={handleSubmit(onClick)} style={{float: 'right'}}>
      <input {...register('email')} type="email" />
      <p>{errors.email?.message}</p>
      <input {...register('password', { required: true })} />
      {errors.email && <p>email name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      <p>{errors.password?.message}</p>
      <input type="submit" />
      <button onClick={handleSignup}> Sign Up</button>
         


    </form>

    </>
  );
}
export default Auth;
