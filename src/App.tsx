import React, { useState } from "react";
import "./App.css";
import Game from "./Components/Game";

import Button from "./Components/Button";
import Title from "./Components/Title";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleButtonClick = () => {
    setGameStarted(true);
  };

  if (gameOver) {
    return (
      <div className="main-wrapper">
        <Title color="red">Game Over!</Title>
      </div>
    );
  }

  if (gameStarted) {
    return <Game score={score} setScore={setScore} setGameOver={setGameOver} />;
  }

  return (
    <div className="main-wrapper">
      <Title>Balloonsux</Title>
      <Button onClick={handleButtonClick}>Play</Button>
    </div>
  );
};

export default App;
