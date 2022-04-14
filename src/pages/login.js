import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(12).required(),
}); 



export default function Login({logout}) {
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
    <form onSubmit={handleSubmit(onSubmit)} style={{float: 'right'}}>
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