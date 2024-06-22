import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Comentarios.css';

function Comentarios({ publicacaoId }) {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');

  const fetchComentarios = () => {
    axios.get(`/api/publicacoes/${publicacaoId}/comentarios`)
      .then(response => {
        setComentarios(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the comments!', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`/api/publicacoes/${publicacaoId}/comentarios`, { texto: novoComentario })
      .then(response => {
        setNovoComentario('');
        fetchComentarios();
      })
      .catch(error => {
        console.error('There was an error posting the comment!', error);
      });
  };

  useEffect(() => {
    fetchComentarios();
  }, []);

  return (
    <div className="comentarios-container">
      <h3>Comentários</h3>
      <ul className="comentarios-list">
        {comentarios.map(comentario => (
          <li key={comentario.id} className="comentario-item">
            {comentario.texto}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="comentario-form">
        <textarea value={novoComentario} onChange={e => setNovoComentario(e.target.value)} required></textarea>
        <button type="submit">Comentar</button>
      </form>
    </div>
  );
}

export default Comentarios;
