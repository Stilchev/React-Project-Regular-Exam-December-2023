// RegisterForm.jsx
import React, { useState } from 'react';
// import './Form.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Basic input validation
    if (!username || typeof username !== 'string') {
      setError('Please enter a valid username');
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    // Additional validation logic if needed

    // Clear error on successful registration
    setError('');

    // Implement your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <label>Repeat Password:</label>
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
