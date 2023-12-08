// LoginForm.jsx
import React, { useState } from 'react';
import './Login.css';
import useForm from '../../hooks/useForm'
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler,{
    [LoginFormKyes.Email]: '',
    [LoginFormKyes.Password]: '',
});

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   if (!email || !password) {
  //     setError('Please enter both email and password');
  //     return;
  //   }

    // Additional validation logic if needed

    // Clear error on successful login
    // setError('');

    // console.log('Email:', email);
    // console.log('Password:', password);
  

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        {/* <label>Email:</label>
        <input
          type="email"
          name="email"
          value={LoginFormKyes.Email}
          onChange={onChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={LoginFormKyes.Password}
          onChange={onChange}
        /> */}

        {/* {error && <p className="error-message">{error}</p>} */}

        {/* <h1>Login</h1> */}
             <label htmlFor="email">Email:</label>
    {/* //         <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" /> */}
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Sokka@gmail.com"
                onChange={onChange}
                value={values.email}
            />

            <label htmlFor="login-pass">Password:</label>
            {/* <input type="password" id="login-password" name="password" /> */}
            <input
                type="password"
                id="login-password"
                name="password"
                onChange={onChange}
                value={values.password}
            />
            {/* <input type="submit" className="btn submit" value="Login" /> */}

         <button type="button" onClick={onSubmit}>
          Login
        </button>
      </form>
    </div>

    
    // <form id="login" onSubmit={onSubmit}>

    //     <div className="container">
    //         <div className="brand-logo"></div>
    //         <h1>Login</h1>
    //         <label htmlFor="email">Email:</label>
    //         <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />
    //         <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             placeholder="Sokka@gmail.com"
    //             onChange={onChange}
    //             value={values.email}
    //         />

    //         <label htmlFor="login-pass">Password:</label>
    //         <input type="password" id="login-password" name="password" />
    //         <input
    //             type="password"
    //             id="login-password"
    //             name="password"
    //             onChange={onChange}
    //             value={values.password}
    //         />
    //         <input type="submit" className="btn submit" value="Login" />
    //         <p className="field">
    //             <span>If you don't have profile click <a href="#">here</a></span>
    //         </p>
    //     </div>
    // </form>
  );

};
export default Login;
