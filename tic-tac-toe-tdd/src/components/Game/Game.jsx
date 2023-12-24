import { useContext, useEffect, useMemo, useState } from "react";
import Board from "../Board/Board";
import { GameLogic } from "../../utits/Game";
import { INITBOARD } from "../../utits/constants";

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
    console.log(GameLogic.getBoard(), board, initBoard);
    if (board.toString() === initBoard.toString()) {
      console.log("Entering here///");
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
    <div
      className=" flex flex-col items-center justify-center h-[100vh] bg-[#ffbe98]"
      data-cy="game"
    >
      <div className=" p-5 flex items-center justify-center" data-cy="header">
        <h2 className="text-2xl font-extrabold" data-cy="result">
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
          data-cy="reset"
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
