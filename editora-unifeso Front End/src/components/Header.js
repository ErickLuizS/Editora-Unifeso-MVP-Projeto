import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';
import BuscaAvancada from './BuscaAvancada';
import '../Styles/Header.css';
import Logo from '../Styles/Imagens/logo.png';

function Header() {
  const { isAdmin } = useContext(AuthContext);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/Publications">Publicações</Link></li>
            {isAdmin ? (
              <li><Link to="/admin">Admin</Link></li>
            ) : (
              <li><Link to="/perfil">Perfil</Link></li>
            )}
            <li><Link to="/historico-notificacoes">Notificações</Link></li>
          </ul>
        </nav>
        <div className="search-icon" onClick={toggleSearch}>
          <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" alt="Buscar" />
        </div>
      </div>
      {searchVisible && <BuscaAvancada />}
    </header>
  );
}

export default Header;
