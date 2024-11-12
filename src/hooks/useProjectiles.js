import { useState, useEffect, useCallback } from 'react';

const useProjectiles = () => {
  const [projectiles, setProjectiles] = useState({
    bonk: 0,
    pew: 0,
    boom: 0,
    kaboom: 0,
  });

  const addProjectile = useCallback((type, count = 1) => {
    setProjectiles(prev => ({ ...prev, [type]: prev[type] + count }));
  }, []);

  const resetProjectiles = () => {
    setProjectiles({ bonk: 0, pew: 0, boom: 0, kaboom: 0 });
  };

  return { projectiles, addProjectile, resetProjectiles };
};

export default useProjectiles;
