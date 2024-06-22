import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

function HistoricoNotificacoes() {
  const { authToken } = useContext(AuthContext);
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    if (authToken) {
      axios.get('/api/notificacoes/me', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(response => {
        setNotificacoes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar notificações!', error);
      });
    }
  }, [authToken]);

  return (
    <div className="container">
      <header>
        <h1>Histórico de Notificações</h1>
      </header>
      <ul>
        {notificacoes.map(notificacao => (
          <li key={notificacao.id}>
            <p>{notificacao.mensagem}</p>
            <small>{new Date(notificacao.dataEnvio).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoricoNotificacoes;
