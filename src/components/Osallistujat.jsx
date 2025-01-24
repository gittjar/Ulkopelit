import React, { useState } from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Osallistujat() {
  const [players, setPlayers] = useState([
    { name: 'Connor McDavid (test)', handedness: 'Left', favoriteTeam: 'Edmonton Oilers' },
    { name: 'Sidney Crosby (test)', handedness: 'Left', favoriteTeam: 'Pittsburgh Penguins' },
    { name: 'Mika Zibanejad (test)', handedness: 'Right', favoriteTeam: 'New York Rangers' },
    { name: 'Jarno K', handedness: 'Left', favoriteTeam: 'HPK' }
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isModalVisible, setIsModalVisible] = useState(true);

  const sortedPlayers = [...players].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="table-container">

      <div className="table-header-image">
        <img src="/images/kuva010.jpg" alt="Header" />
        <h2>Osallistujat 22.2.2025</h2>
      </div>
      <p></p>
      {isModalVisible && (
        <div className="modal">
          <p>Ilmoittautuneita {players.length}/16 ja tilaa on vielä reilusti!</p>
          <Link to="/ilmoittautuminen" className="signup-button">
        Ilmoittaudu mukaan <FaArrowRight className="icon" />
      </Link>
          <button onClick={closeModal}>Sulje</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>
              Pelaajan nimi
              <FaArrowDown className={`icon ${sortConfig.key === 'name' ? sortConfig.direction : ''}`} />
            </th>
            <th onClick={() => requestSort('handedness')}>
              Kätisyys
              <FaArrowDown className={`icon ${sortConfig.key === 'handedness' ? sortConfig.direction : ''}`} />
            </th>
            <th onClick={() => requestSort('favoriteTeam')}>
              Lempijoukkue
              <FaArrowDown className={`icon ${sortConfig.key === 'favoriteTeam' ? sortConfig.direction : ''}`} />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.handedness}</td>
              <td>{player.favoriteTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
   
    </div>
  );
}

export default Osallistujat;