// RegisterForm.jsx
import React, { useState } from 'react';
// import './Form.css';
import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
    Username: 'username',
};

const Register = () => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [repeatPassword, setRepeatPassword] = useState('');
    // const [error, setError] = useState('');

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
        [RegisterFormKeys.Username]: '',
    });

    // const handleRegister = () => {
    //   // Basic input validation
    //   if (!username || typeof username !== 'string') {
    //     setError('Please enter a valid username');
    //     return;
    //   }

    //   if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    //     setError('Please enter a valid email address');
    //     return;
    //   }

    //   if (password !== repeatPassword) {
    //     setError('Passwords do not match');
    //     return;
    //   }

    //   // Additional validation logic if needed

    //   // Clear error on successful registration
    //   setError('');

    //   // Implement your registration logic here
    //   console.log('Username:', username);
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    // };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form>
                <label>Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nickname"
                    value={values[RegisterFormKeys.Username]}
                    onChange={onChange}
                />

                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@email.com"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Email]}
                />

                <label>Password:</label>
                <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />

                <label>Repeat Password:</label>
                <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />

                {/* {error && <p className="error-message">{error}</p>} */}

                <button type="submit" onClick={onSubmit}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
