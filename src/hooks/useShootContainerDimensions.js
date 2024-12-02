import { useState, useEffect, useRef } from 'react';

const useShootContainerDimensions = () => {
  // Référence pour le conteneur de tir
  const containerRef = useRef(null);
  // État pour les dimensions du conteneur
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Fonction pour mettre à jour les dimensions du conteneur
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    // Mettre à jour les dimensions au montage du composant
    updateDimensions();
    // Ajouter un écouteur d'événements pour la redimensionnement de la fenêtre
    window.addEventListener('resize', updateDimensions);

    // Nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return { containerRef, ...dimensions };
};

export default useShootContainerDimensions;