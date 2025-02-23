import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Etusivu <span className='icon'><FaArrowRight /></span></Link>
        <Link to="/2026/lisatiedot">Lisätiedot <span className='icon'><FaArrowRight /></span></Link>
        <Link to="/2026/osallistujat">Osallistujat <span className='icon'><FaArrowRight /></span></Link>
        <Link to="/2026/kartta">Kartta <span className='icon'><FaArrowRight /></span></Link>
        <Link to="/ilmoittautuminen">Ilmoittautuminen <span className='icon'><FaArrowRight /></span></Link>
        <br />
        <div className="footer-info">
        <p>This webapp is created with React<span className="react-logo icon"><FaReact /></span> and Vite<span className="vite-logo icon"><SiVite /></span> 2025</p>
      </div>
      </div>

    </footer>
  );
};

export default Footer;