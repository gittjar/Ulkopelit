import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import '../src/assets/styles.css';
import Home from './components/Home';
import Year2025 from './components/Year2025';
import Lisatiedot from './components/Lisatiedot';
import Osallistujat from './components/Osallistujat';
import Kartta from './components/Kartta';
import Ilmoittautuminen from './components/Ilmoittautuminen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/2025">2025</Link>
              <ul>
                <li>
                  <Link to="/2025/lisatiedot">Lisätiedot</Link>
                </li>
                <li>
                  <Link to="/2025/osallistujat">Osallistujat</Link>
                </li>
                <li>
                  <Link to="/2025/kartta">Kartta</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/ilmoittautuminen">Ilmoittautuminen</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2025" element={<Year2025 />} />
          <Route path="/2025/lisatiedot" element={<Lisatiedot />} />
          <Route path="/2025/osallistujat" element={<Osallistujat />} />
          <Route path="/2025/kartta" element={<Kartta />} />
          <Route path="/ilmoittautuminen" element={<Ilmoittautuminen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;