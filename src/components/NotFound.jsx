// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../assets/styles_notfound.css';

const NotFound = () => {
  return (
    <div>
      <section className='pagenotfound'>
        <article className='pagenotfound-text'>
        <h1>404 - Sivua ei löydy</h1>
        <p>Anteeksi, mutta sivua ei löytynyt..</p>
        <p>Palaa takaisin
        <Link to="/"> etusivulle <span className='icon'><FaArrowRight /></span></Link>
        </p>
        </article>
      </section>
    </div>
  );
};

export default NotFound;