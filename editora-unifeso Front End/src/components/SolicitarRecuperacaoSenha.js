import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/SolicitarRecuperacaoSenha.css';

function SolicitarRecuperacaoSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/recuperacaosenha/solicitar', { email })
      .then(response => {
        setMensagem('Verifique seu email para o token de recuperação.');
      })
      .catch(error => {
        setMensagem('Erro ao solicitar recuperação de senha.');
      });
  };

  return (
    <div className="container">
      <header className="recuperacao-header">
        <h2>Solicitar Recuperação de Senha</h2>
      </header>
      <form onSubmit={handleSubmit} className="recuperacao-form">
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Solicitar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

export default SolicitarRecuperacaoSenha;
