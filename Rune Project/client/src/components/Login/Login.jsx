// LoginForm.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Additional validation logic if needed

    // Clear error on successful login
    setError('');

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
