import { useState } from 'react';

const useScore = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  return { score, incrementScore, setScore };
};

export default useScore;