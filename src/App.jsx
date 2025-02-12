import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Lisatiedot from './components/Lisatiedot';
import Osallistujat from './components/Osallistujat';
import Kartta from './components/Kartta';
import Ilmoittautuminen from './components/Ilmoittautuminen';
import Kiitos from './components/Kiitos';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

// CSS Styles
import '../src/assets/styles.css';
import '../src/assets/styles_home.css';
import '../src/assets/styles_carousel.css';
import '../src/assets/styles_lisatiedot.css';
import '../src/assets/styles_playertable.css';
import '../src/assets/styles_kartta.css';
import '../src/assets/styles_contactform.css';
import '../src/assets/styles_kiitos.css';
import '../src/assets/styles_footer.css';
import '../src/assets/styles_notfound.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Etusivu <span className='icon'><FaArrowRight /></span></Link>
            </li>
            <li>
              <span className="vuosi2025">2025 <span className='icon'><FaChevronDown /></span></span>
              <ul>
                <li>
                  <Link to="/2025/lisatiedot">Lisätiedot <span className='icon'><FaArrowRight /></span></Link>
                </li>
                <li>
                  <Link to="/2025/osallistujat">Osallistujat <span className='icon'><FaArrowRight /></span></Link>
                </li>
                <li>
                  <Link to="/2025/kartta">Kartta <span className='icon'><FaArrowRight /></span></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/ilmoittautuminen">Ilmoittautuminen <span className='icon'><FaArrowRight /></span></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2025/lisatiedot" element={<Lisatiedot />} />
          <Route path="/2025/osallistujat" element={<Osallistujat />} />
          <Route path="/2025/kartta" element={<Kartta />} />
          <Route path="/ilmoittautuminen" element={<Ilmoittautuminen />} />
          <Route path="/kiitos" element={<Kiitos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;