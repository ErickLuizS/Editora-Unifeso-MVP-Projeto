import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Admin.css';

function Admin() {
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    axios.get('/api/publicacoes')
      .then(response => {
        setPublicacoes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the publications!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/publicacoes/${id}`)
      .then(response => {
        setPublicacoes(publicacoes.filter(pub => pub.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the publication!', error);
      });
  };

  return (
    <div className="container">
      <header className="admin-header">
        <h2>Administração de Publicações</h2>
      </header>
      <ul className="publicacao-list">
        {publicacoes.map(publicacao => (
          <li key={publicacao.id} className="publicacao-item">
            <div className="publicacao-info">
              <a href={`/publicacao/${publicacao.id}`} className="publicacao-link">{publicacao.titulo}</a>
              <button onClick={() => handleDelete(publicacao.id)} className="publicacao-delete">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
