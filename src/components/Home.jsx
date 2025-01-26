// src/components/Home.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/styles_carousel.css';

function Home() {
  const images = [
    { src: '/images/kuva002.jpg', title: 'Ulkojäiden pelit', description: 'Tule mukaan pelaamaan!' },
    { src: '/images/kuva004.jpg', title: 'Pelataan jääkiekkoa ulkona', description: 'Ulkojäällä jääkiekkoa!' },
    { src: '/images/kuva005.jpg', title: 'Sairionpuisto / Hämeenlinna', description: 'Tule mukaan pelaamaan!' },
    { src: '/images/kuva006.jpg', title: '22.2.2025 klo 14:00', description: 'Tule mukaan pelaamaan!' },
  ];

  return (
    <div className='home-main'>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {images.map((image, index) => (
          <div key={index} className="carousel-card">
            <img src={image.src} alt={image.title} />
            <div className="carousel-card-content">
              <h1>{image.title}</h1>
              {index === images.length - 1 && (
                <Link to="/ilmoittautuminen" className="carousel-button">
                  Ilmoittautuminen <span className='icon'><FaArrowRight /></span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;