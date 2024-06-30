import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Home.css';

const Publications = () => {
  const location = useLocation();
  const { resultados } = location.state || { resultados: [] };
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    axios.get('/data/publications.json')
      .then(({data}) => {
        // Ordenar as publicações da mais recente para a mais antiga
        const sortedPublications = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPublications(sortedPublications);
      });
  }, []);

  // Se houver resultados da busca, exibir esses resultados, senão, exibir todas as publicações
  const displayPublications = resultados.length > 0 ? resultados : publications;

  return (
    <section id="publications" className="home-container" style={{ marginTop: '25px' }}>
      <h2 style={{ marginBottom: '25px' }}>Publicações</h2>
      <div className="publication-list">
        {displayPublications.map(publication => (
          <div className="publication destaques" key={publication.id}>
            <h3>{publication.title}</h3>
            <p><strong>Autor:</strong> {publication.author}</p>
            <p><strong>Data:</strong> {publication.date}</p>
            <p>{publication.summary}</p>
            <Link to={`/publications/${publication.id}`}>Leia mais</Link>
          </div>
        ))}
        {displayPublications.length === 0 && <p>Nenhuma publicação encontrada.</p>}
      </div>
    </section>
  );
}

export default Publications;
