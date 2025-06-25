import React from 'react';
import { Link } from "react-router-dom";
import logo from '../styles/assets/logo-ccp.png'; // ajuste o nome se for SVG

export default function Header() {
  return (
    <header className="header-main">
      <div className="header-content">
        <Link to="/" className="logo-area">
          <img src={logo} alt="CCP Soluções Contábeis" className="logo-img" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/depoimentos">Depoimentos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}