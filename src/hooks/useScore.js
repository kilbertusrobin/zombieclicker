import { useState } from 'react';

const useScore = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    console.log('Incrementing score');
    setScore(prevScore => prevScore + 1);
  };

  return { score, incrementScore };
};

export default useScore;
