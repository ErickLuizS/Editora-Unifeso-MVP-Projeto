import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import PublicacaoDetalhes from './components/PublicacaoDetalhes';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';
import Perfil from './components/Perfil.js';
import SolicitarRecuperacaoSenha from './components/SolicitarRecuperacaoSenha';
import ResetarSenha from './components/ResetarSenha';
import HistoricoNotificacoes from './components/HistoricoNotificacoes';
import Header from './components/Header';
import './Styles/App.css'

export const AuthContext = createContext();

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [isAdmin, setIsAdmin] = useState(false);

  const setToken = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
    // Simulating admin check for simplicity
    setIsAdmin(token === 'admin-token');
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken, isAdmin }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/publicacao/:id" element={<PublicacaoDetalhes />} />
          <Route path="/admin" element={authToken && isAdmin ? <Admin /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={authToken ? <Perfil /> : <Navigate to="/login" />} />
          <Route path="/solicitar-recuperacao-senha" element={<SolicitarRecuperacaoSenha />} />
          <Route path="/resetar-senha" element={<ResetarSenha />} />
          <Route path="/historico-notificacoes" element={authToken ? <HistoricoNotificacoes /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
