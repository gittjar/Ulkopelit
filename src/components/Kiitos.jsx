import React from 'react';
import { useLocation } from 'react-router-dom';

function Kiitos() {
  const location = useLocation();
  const { playerName } = location.state || { playerName: "pelaaja" };

  return (
    <div className="thank-you-container">
      <h2>Kiitos, {playerName}!</h2>
      <p>Kiitos ilmoittautumisesta!</p>
      <p>Nimesi lisätään pian listalle.</p>
      <p>Ilmoita tällä samalla lomakkeella, jos et pääsekään pelaamaan!</p>
      <p>Kiekko tippuu jäähän 22.2.2025 klo 14:00</p>
      <p>Sairionpuisto, 13220 Hämeenlinna</p>
      <p>Nähdään pian!</p>
    </div>
  );
}

export default Kiitos;