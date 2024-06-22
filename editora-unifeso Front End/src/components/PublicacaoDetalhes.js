import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles/Publicacao.css';

function PublicacaoDetalhes() {
  const { id } = useParams();
  const [publicacao, setPublicacao] = useState(null);

  useEffect(() => {
    axios.get(`/api/publicacoes/${id}`)
      .then(response => {
        setPublicacao(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the publication details!', error);
      });
  }, [id]);

  if (!publicacao) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <header className="publicacao-header">
        <h2>{publicacao.titulo}</h2>
      </header>
      <p>Autor: {publicacao.autor}</p>
      <p>Data de Publicação: {publicacao.dataPublicacao}</p>
      <p>Resumo: {publicacao.resumo}</p>
      <a href={publicacao.arquivo} download className="publicacao-download">Download</a>
    </div>
  );
}

export default PublicacaoDetalhes;
