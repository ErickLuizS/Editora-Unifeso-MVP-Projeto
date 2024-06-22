import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/ResetarSenha.css';

function ResetarSenha() {
  const [token, setToken] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/recuperacaosenha/resetar', { token, novaSenha })
      .then(response => {
        setMensagem('Senha alterada com sucesso.');
        navigate('/login');
      })
      .catch(error => {
        setMensagem('Erro ao resetar senha.');
      });
  };

  return (
    <div className="container">
      <header>
        <h1>Resetar Senha</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          Token:
          <input type="text" value={token} onChange={e => setToken(e.target.value)} required />
        </label>
        <label>
          Nova Senha:
          <input type="password" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} required />
        </label>
        <button type="submit">Resetar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default ResetarSenha;
