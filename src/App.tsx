import React, { useCallback, useEffect, useState } from "react";
import Ballon from "./Components/Ballon";

type colors = "red" | "blue" | "green" | "yellow";

export interface IBallon {
  id: number;
  color: colors;
  position: {
    x: number;
    y: number;
  };
}

const App = () => {
  const [ballons, setBallons] = useState<IBallon[]>([]);
  const [ballonSpawningInterval, setBallonSpawningInterval] = useState(400);
  const [ballonSpawningFunction, setBallonSpawningFunction] =
    useState<NodeJS.Timer>();

  const colors: colors[] = ["red", "blue", "green", "yellow"];

  const generateRandomNumber = useCallback((min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  const pickRandom = useCallback(
    (arr: any[]) => {
      return arr[generateRandomNumber(0, arr.length - 1)];
    },
    [generateRandomNumber]
  );

  const handleBalloonClick = (ballonId: number) => {
    setBallons((currentBallons) => {
      return currentBallons.filter((ballon) => ballon.id !== ballonId);
    });
  };

  useEffect(() => {
    if (ballonSpawningFunction) clearInterval(ballonSpawningFunction);
    setBallonSpawningFunction(
      setInterval(() => {
        setBallons((currentBallons) => {
          return [
            ...currentBallons,
            {
              id: Date.now(),
              color: pickRandom(colors),
              position: {
                x: 2,
                y: generateRandomNumber(1, 100),
              },
            },
          ];
        });
      }, ballonSpawningInterval)
    );
  }, [ballonSpawningInterval, generateRandomNumber]);

  useEffect(() => {
    console.log(ballons);
  }, [ballons]);

  return (
    <div>
      {ballons.map((ballon) => {
        return (
          <Ballon
            key={ballon.id}
            onClick={handleBalloonClick}
            ballon={ballon}
          />
        );
      })}
    </div>
  );
};

export default App;
