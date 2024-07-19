import { useState } from 'react';
import { COLORS } from '../constants.js';
import Circles from './Circles';
import Controls from './Controls';

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const Board = () => {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);

  const handleClick = (e) => {
    setCircles((prev) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: +new Date(),
          bgColor: getRandomColor(),
        },
      ];
    });
  };

  const handleUndo = () => {
    const copy = [...circles];
    const lastCircle = copy.pop();

    setHistory((prev) => [...prev, lastCircle]);
    setCircles(copy);
  };

  const handleRedo = () => {
    const copy = [...history];
    const lastHistory = copy.pop();

    setCircles((prev) => [...prev, lastHistory]);
    setHistory(copy);
  };
  const handleReset= () => {
    setCircles([])
    setHistory([])
  }
  return (
    <div className="board" onClick={handleClick}>
      <Circles circles={circles} />
      <Controls onUndo={handleUndo} onRedo={handleRedo} onReset={handleReset} />
    </div>
  );
};

export default Board;
