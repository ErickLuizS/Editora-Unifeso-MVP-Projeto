import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/BuscaAvancada.css';

const BuscaAvancada = () => {
  const navigate = useNavigate();
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataPublicacao, setDataPublicacao] = useState('');
  const [palavraChave, setPalavraChave] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('/api/publicacoes/busca-avancada', {
        params: {
          autor,
          categoria,
          dataPublicacao,
          palavraChave,
        }
      });
      // Navegar para a página de publicações com os resultados da busca avançada
      navigate('/publications', { state: { resultados: response.data } });
    } catch (error) {
      console.error('Houve um erro ao realizar a busca avançada!', error);
      // Navegar para a página de publicações mesmo em caso de erro
      navigate('/publications', { state: { resultados: [] } });
    }
  };

  return (
    <div className="busca-container">
      <form onSubmit={handleSubmit} className="busca-form">
        <input type="text" placeholder="Autor" value={autor} onChange={e => setAutor(e.target.value)} />
        <input type="text" placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)} />
        <input type="date" value={dataPublicacao} onChange={e => setDataPublicacao(e.target.value)} />
        <input type="text" placeholder="Palavra-chave" value={palavraChave} onChange={e => setPalavraChave(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default BuscaAvancada;
