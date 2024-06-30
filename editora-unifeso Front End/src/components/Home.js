import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Home.css';

function Home() {
  const [publicacoes, setPublicacoes] = useState([]);

  return (
      <div className="home-container">
        
        <section className="banner">
          <div className="banner-content">
            <h2>Bem-vindo ao Editorial da Faculdade</h2>
            <p>Explorando ideias, inovações e descobertas através da escrita e da pesquisa.</p>
          </div>
        </section>
  
        <section id="destaques" className="destaques">
          <div className="destaques-content">
            <h2>Destaques</h2>
            <div className="destaque-item">
              <img src="https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Destaques" />
              <div className="destaque-text">
                <h3>Título do Destaque 1</h3>
                <p>Descrição breve do destaque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="/publicacao/1" className="saiba-mais">Saiba mais</a>
              </div>
            </div>
            <div className="destaque-item">
              <img src="https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Destaques" />
              <div className="destaque-text">
                <h3>Título do Destaque 2</h3>
                <p>Descrição breve do destaque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="/publicacao/2" className="saiba-mais">Saiba mais</a>
              </div>
            </div>
          </div>
        </section>
  
        <section id="sobre" className="sobre">
          <div className="sobre-content">
            <h2>Sobre o Editorial</h2>
            <p>O Editorial da Faculdade se dedica a promover o pensamento crítico e a divulgação de conhecimento através de artigos e análises rigorosas.</p>
          </div>
        </section>
  
        <section id="colunistas" className="colunistas">
          <div className="colunistas-content">
            <h2>Colunistas</h2>
            <div className="colunista-item">
              <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Colunistas" />
              <div className="colunista-info">
                <h3>Nome do Colunista 1</h3>
                <p>Descrição breve do colunista. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="colunista-item">
              <img src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Colunistas" />
              <div className="colunista-info">
                <h3>Nome do Colunista 2</h3>
                <p>Descrição breve do colunista. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
  
        <footer id="contato" className="footer">
          <div className="footer-content">
            <h3>Entre em contato</h3>
            <p>Endereço da Faculdade<br />Telefone: (XX) XXXX-XXXX<br />Email: contato@faculdade.com</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    );
  
  
}

export default Home;
