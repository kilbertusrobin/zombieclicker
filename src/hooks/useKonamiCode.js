import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
];

const useKonamiCode = () => {
  // État pour afficher le div secret
  const [showSecretDiv, setShowSecretDiv] = useState(false);
  // État pour la classe de zoom
  const [zoomClass, setZoomClass] = useState('');
  // État pour cacher la pluie
  const [hideRain, setHideRain] = useState(false);
  // Référence pour stocker les entrées de l'utilisateur
  const userInput = useRef([]);
  const navigate = useNavigate();

  // Fonction pour vérifier si le code Konami est entré correctement
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
          navigate('/valise');
        }, 500);
      }, 1100);
    }
  };

  // Gestionnaire d'événements pour les touches enfoncées
  const handleKeyDown = (event) => {
    checkKonamiCode(event.code);
  };

  // Ajouter et supprimer l'écouteur d'événements pour les touches enfoncées
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { showSecretDiv, zoomClass, hideRain };
};

export default useKonamiCode;