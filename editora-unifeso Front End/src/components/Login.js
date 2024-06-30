import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom'; // Importação atualizada
import '../Styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate(); // Atualização do hook

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/auth/login', { username, password })
      .then(response => {
        setAuthToken(response.data.token);
        navigate('/'); // Atualização do redirecionamento
      })
      .catch(error => {
        console.error('Login failed!', error);
      });
  };

  return (
    <div className="container">
      <header className="login-header">
        <h2>Login</h2>
      </header>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Usuário:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
