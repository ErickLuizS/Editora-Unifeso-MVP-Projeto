import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';
import '../Styles/Perfil.css';

function Perfil() {
  const { authToken } = useContext(AuthContext);
  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  useEffect(() => {
    if (authToken) {
      axios.get('/api/usuarios/me', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(response => {
        setUsuario(response.data);
        setNome(response.data.nome);
        setEmail(response.data.email);
        setDataNascimento(response.data.dataNascimento);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
      });
    }
  }, [authToken]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/usuarios/${usuario.id}`, {
      nome,
      email,
      dataNascimento
    }, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(response => {
      alert('Perfil atualizado com sucesso!');
    })
    .catch(error => {
      console.error('There was an error updating the user data!', error);
    });
  };

  if (!usuario) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <header className="perfil-header">
        <h2>Perfil de Usuário</h2>
      </header>
      <form onSubmit={handleSubmit} className="perfil-form">
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Data de Nascimento:
          <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} required />
        </label>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default Perfil;
