import React from 'react';

function Kartta() {
  return (
    <div className="kartta-container">
      <div className="kartta-lisatiedot-container">
        <div className="kartta-header-image">
          <img src="/images/kuva004.jpg" alt="Header" />
          <h1>Kartta pelipaikalle</h1>
        </div>
      </div>
   
      <div className="kartta-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.1234567890123!2d24.4694016!3d61.0114915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e5db75e7fc871%3A0xe4bb2a21ebb175!2sSairionpuisto%2C%2013220%20H%C3%A4meenlinna%2C%20Finland!5e0!3m2!1sen!2sfi!4v1616161616161!5m2!1sen!2sfi&z=20"
          className="kartta-map-iframe"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <h3>Information</h3>
        <p>Osoite: Sairionpuisto, 13220 Hämeenlinna</p>
      </div>
    </div>
  );
}

export default Kartta;