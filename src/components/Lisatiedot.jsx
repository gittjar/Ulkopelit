// src/components/Lisatiedot.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles_lisatiedot.css';
import { FaArrowRight } from 'react-icons/fa';

function Lisatiedot() {
  return (
    <div className="lisatiedot-container">
      <div className="header-image">
        <img src="/images/kuva007.jpg" alt="Header" />
        <h1>Lisätietoa vuoden 2025 tapahtumasta</h1>
      </div>
      <div className="content">
        <div className="info-cards">
          <div className="card">
            <div className="number">22.2.2025</div>
            <p>Ilmoittautuminen alkaa 25. tammikuuta 2025.</p>
          </div>

          
          <div className="card">
            <div className="number">14:00 PM</div>
            <p>Pelataan jääkiekkoa ulkojäillä.</p>
          </div>
            <div className="card">
            <div className="number">10-16</div>
            <p>Pelaajia tarvitaan vähintään kymmenen.</p>
            </div>
            <div className="card">
            <div className="number">Sijainti</div>
            <p>Sairionpuisto, 13220 Hämeenlinna
            </p>
            <Link className='karttalinkki' to="/2025/kartta">
            Kartta<span className='icon'><FaArrowRight /></span>
            </Link>

        </div>
       

        </div>
        <section className="list-container">
        <h2>Tarvittavat varusteet</h2>
        <ul className="equipment-list">
          <li className="equipment-item">Luistimet</li>
          <li className="equipment-item">Oma maila</li>
          <li className="equipment-item">Juomapullo (omat juomat)</li>
          <li className="equipment-item">Kypärä (suositus)</li>
          <li className="equipment-item">Pelipaita (jos löytyy)</li>
        </ul>
        <h2>Säännöt</h2>
        <ul className="equipment-list">
          <li className="equipment-item">Tasakentät</li>
          <li className="equipment-item">Ei kohotuksia</li>
          <li className="equipment-item">Ei taklauksia</li>
          <li className="equipment-item">Mailan nostaminen mailalla sallittu</li>
          <li className="equipment-item">Ei maalivahtia</li>
          <li className="equipment-item">1 kosketus syötöstä maalit</li>
        </ul>
        <h2>Muut tiedot</h2>
          <ul className="equipment-list">
          <li className="equipment-item">Osallistuminen omalla vastuulla</li>
          <li className="equipment-item">Pelaajia tarvitaan vähintään 10</li>
          <li className="equipment-item">Pelit voidaan perua sääolosuhteiden takia</li>
          <li className="equipment-item">Pelit pelataan kaukalossa</li>
          <li className="equipment-item">Mahdolliset jälkipelit sovitaan paikan päällä</li>
        </ul>
        </section>
        <section className="vastuuvapaus-container">
        <h2>Vastuuvapauslauseke</h2>
        <p>1. Osallistuminen peleihin on omalla vastuulla. Koollekutsuja ei vastaa mahdollisista tapaturmista tai vahingoista.</p>
        <p>2. Osallistujien tulee noudattaa annettuja sääntöjä ja ohjeita.</p>
        <p>3. Osallistujien tulee olla terveitä ja oireettomia.</p>
        <p>4. Osallistujien tulee käyttää asianmukaisia varusteita. Rikkinäisillä varusteilla pelaaminen on kielletty.</p>
      <p>5. Tämän sivuston ylläpitäjä ei vastaa mahdollisista virheistä tai puutteista sivustolla.</p>
      <p>6. Ylläpitäjä pidättää oikeuden muutoksiin.</p>
      </section>
     
      </div>

     
    </div>
  );
}

export default Lisatiedot;