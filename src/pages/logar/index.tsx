import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useAuth } from '../../context/auth';

interface Inputs {
  email: string;
  password: string;
}

const Logar: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  let history = useHistory();
  
  const { handleLogar} = useAuth();

  const handleLogin = useCallback(async(data: Inputs) => {
    try {
      await handleLogar({
        email: data.email,
        password: data.password
      });
      // console.log(data);
      history.push('/dashboard');
    } catch (err) {

    }

  },[history, handleLogar]);



  return (
    <>
      <h1>Logar</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="email" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      
      {/* <input type="submit" /> */}
      <button type="submit">Logar</button>
    </form>


      {/* °<button onClick={handleLogin}>Logar</button> */}
    </>
  )
}

export default Logar;