import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles_lisatiedot.css';
import { FaArrowRight } from 'react-icons/fa';

function Lisatiedot() {
  return (
    <div className="lisatiedot-container-unique">
      <div className="header-image-unique">
        <img src="/images/kuva009.jpg" alt="Header" />
        <h1>Lisätietoa vuoden 2025 tapahtumasta</h1>
      </div>
      <div className="content-unique">
        <div className="info-cards-unique">
          <div className="card-unique">
            <div className="number">22.2.2025</div>
            <p>Ilmoittautuminen alkaa 25. tammikuuta 2025.</p>
          </div>
          <div className="card-unique">
            <div className="number">klo 14:00</div>
            <p>Pelataan jääkiekkoa ulkojäillä.</p>
          </div>
          <div className="card-unique">
            <div className="number">10-16</div>
            <p>Pelaajia tarvitaan vähintään kymmenen.</p>
            <Link className='karttalinkki-unique' to="/ilmoittautuminen">
              Ilmoittaudu<span className='icon-unique'><FaArrowRight /></span>
            </Link>
          </div>
          <div className="card-unique">
            <div className="number">Sijainti</div>
            <p>Sairionpuisto, 13220 Hämeenlinna</p>
            <Link className='karttalinkki-unique' to="/2025/kartta">
              Kartta<span className='icon-unique'><FaArrowRight /></span>
            </Link>
          </div>
        </div>
        <section className="list-container-unique">
          <h2 className="h2-unique">Tarvittavat varusteet</h2>
          <ul className="equipment-list-unique">
            <li className="equipment-item-unique">Luistimet</li>
            <li className="equipment-item-unique">Oma maila</li>
            <li className="equipment-item-unique">Juomapullo (omat juomat)</li>
            <li className="equipment-item-unique">Kypärä (suositus)</li>
            <li className="equipment-item-unique">Pelipaita (jos löytyy)</li>
          </ul>
          <h2 className="h2-unique">Säännöt</h2>
          <ul className="equipment-list-unique">
            <li className="equipment-item-unique">Tasakentät</li>
            <li className="equipment-item-unique">Ei kohotuksia</li>
            <li className="equipment-item-unique">Ei taklauksia</li>
            <li className="equipment-item-unique">Mailan nostaminen mailalla sallittu</li>
            <li className="equipment-item-unique">Sallittu kaiken ikäisille</li>
            <li className="equipment-item-unique">1 kosketus syötöstä maalit</li>
          </ul>
          <h2 className="h2-unique">Muut tiedot</h2>
          <ul className="equipment-list-unique">
            <li className="equipment-item-unique">Osallistuminen omalla vastuulla</li>
            <li className="equipment-item-unique">Pelaajia tarvitaan vähintään 10</li>
            <li className="equipment-item-unique">Pelit voidaan perua sääolosuhteiden takia</li>
            <li className="equipment-item-unique">Pelit pelataan kaukalossa</li>
            <li className="equipment-item-unique">Mahdolliset jälkipelit sovitaan paikan päällä</li>
          </ul>
        </section>
        <section className="vastuuvapaus-container-unique">
          <h2 className="h2-unique">Vastuuvapauslauseke</h2>
          <p>1. Osallistuminen peleihin on omalla vastuulla. Koollekutsuja ei vastaa mahdollisista tapaturmista tai vahingoista.</p>
          <p>2. Osallistujien tulee noudattaa annettuja sääntöjä ja ohjeita.</p>
          <p>3. Osallistujien tulee olla terveitä ja oireettomia.</p>
          <p>4. Osallistujien tulee käyttää asianmukaisia varusteita. Rikkinäisillä varusteilla pelaaminen on kielletty.</p>
          <p>5. Tämän sivuston ylläpitäjä ei vastaa mahdollisista virheistä tai puutteista sivustolla.</p>
          <p>6. Ylläpitäjä pidättää oikeuden muutoksiin.</p>
          <p>7. Käyttäjän antamia tietoja (nimi ja sähköposti) säilytetään pelitapahtumaan asti ja sen jälkeen ne tuhotaan.</p>
        </section>
      </div>
    </div>
  );
}

export default Lisatiedot;