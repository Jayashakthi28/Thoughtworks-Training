import { useContext, useEffect, useState } from "react";
import { GameLogic } from "../utits/Game";
import Board from "./Board";

export default function Game() {
  const initBoard = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(initBoard);
  const [prevRow, setPrevRow] = useState(null);
  const [prevCol, setPrevCol] = useState(null);
  useEffect(() => {
    GameLogic.initBoard(board);
  }, []);

  useEffect(() => {
    if (board.toString() === initBoard.toString()) {
      GameLogic.initBoard(board);
    } else {
      const currentWinner = GameLogic.getWinner(
        currentPlayer,
        +prevRow,
        +prevCol
      );
      setCurrentPlayer((prev) => {
        return prev === "X" ? "O" : "X";
      });

      if (currentWinner !== "") {
        setTimeout(() => {
          resetGame();
        }, 1500);
        setWinner(currentWinner);
      }
    }
  }, [board]);

  const resetGame = () => {
    setBoard(initBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };
  return (
    <div className=" flex flex-col items-center justify-center h-[100vh] bg-[#ffbe98]">
      <div className=" p-5 flex items-center justify-center">
        <h2 className="text-2xl font-extrabold">
          {winner !== null ? (
            <>
              Game Over : {winner === "Tied" ? "" : "Winner is "}
              {winner}
            </>
          ) : (
            <>Current Player is {currentPlayer}</>
          )}
        </h2>
        <h2
          className="text-xl cursor-pointer font-extrabold ml-5 p-2 px-4 bg-[#ff1414] text-white rounded-full"
          onClick={resetGame}
        >
          Reset
        </h2>
      </div>
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setWinner={setWinner}
        winner={winner}
        board={board}
        setBoard={setBoard}
        setPrevRow={setPrevRow}
        setPrevCol={setPrevCol}
      />
    </div>
  );
}
