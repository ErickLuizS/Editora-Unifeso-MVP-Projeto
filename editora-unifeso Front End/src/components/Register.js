import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/auth/register', { username, password })
      .then(response => {
        navigate('/login'); 
      })
      .catch(error => {
        console.error('Registration failed!', error);
      });
  };

  return (
    <div className="container">
      <header className="register-header">
        <h2>Register</h2>
      </header>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
