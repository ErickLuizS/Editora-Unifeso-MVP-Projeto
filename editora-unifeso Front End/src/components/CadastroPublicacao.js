import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/CadastroPublicacao.css';

function CadastroPublicacao() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [dataPublicacao, setDataPublicacao] = useState('');
  const [resumo, setResumo] = useState('');
  const [categorias, setCategorias] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/publicacoes', { titulo, autor, dataPublicacao, resumo, categorias })
      .then(response => {
        alert('Publicação cadastrada com sucesso!');
        setTitulo('');
        setAutor('');
        setDataPublicacao('');
        setResumo('');
        setCategorias('');
      })
      .catch(error => {
        console.error('Houve um erro ao cadastrar a publicação!', error);
      });
  };

  return (
    <div className="container">
      <header className="cadastro-header">
        <h2>Cadastro de Publicação</h2>
      </header>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <label>
          Título:
          <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
        </label>
        <label>
          Autor:
          <input type="text" value={autor} onChange={e => setAutor(e.target.value)} required />
        </label>
        <label>
          Data de Publicação:
          <input type="date" value={dataPublicacao} onChange={e => setDataPublicacao(e.target.value)} required />
        </label>
        <label>
          Resumo:
          <textarea value={resumo} onChange={e => setResumo(e.target.value)} required></textarea>
        </label>
        <label>
          Categorias:
          <input type="text" value={categorias} onChange={e => setCategorias(e.target.value)} required />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroPublicacao;
