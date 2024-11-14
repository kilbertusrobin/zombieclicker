import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
];

const useKonamiCode = () => {
  const [showSecretDiv, setShowSecretDiv] = useState(false);
  const [zoomClass, setZoomClass] = useState('');
  const [hideRain, setHideRain] = useState(false);
  const userInput = useRef([]);
  const navigate = useNavigate();

  const checkKonamiCode = (key) => {
    userInput.current.push(key);
    if (userInput.current.length > konamiCode.length) {
      userInput.current.shift();
    }

    if (JSON.stringify(userInput.current) === JSON.stringify(konamiCode)) {
      setShowSecretDiv(true);
      setZoomClass('zoom-in');

      setTimeout(() => setHideRain(true), 1000);
      setTimeout(() => {
        setZoomClass('zoom-out');
        setTimeout(() => {
          setShowSecretDiv(false);
          setHideRain(false);
          navigate('/valise'); // Redirection vers /valise
        }, 500);
      }, 1100);
    }
  };

  const handleKeyDown = (event) => {
    checkKonamiCode(event.code);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { showSecretDiv, zoomClass, hideRain };
};

export default useKonamiCode;