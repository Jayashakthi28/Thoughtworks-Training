import { GameLogic } from "../../utits/Game";

export default function Box({
  row,
  col,
  element,
  currentPlayer,
  setBoard,
  winner,
  setPrevRow,
  setPrevCol,
}) {
  const highLightedIdx = GameLogic.getHighlightedIdx();
  const currIdx = `${row}${col}`;
  const isHighlighted =
    highLightedIdx.filter((t) => t === currIdx).length === 1 && winner !== null;
  return (
    <div
      onClick={() => {
        if (element !== "-" || winner !== null) return;
        setPrevCol(col);
        setPrevRow(row);
        setBoard((prevBorad) => {
          let board = [...prevBorad];
          board[row][col] = currentPlayer;
          return board;
        });
      }}
      aria-disabled={element !== "-" || winner !== null}
      className={`p-2 ${isHighlighted ? "bg-black" : " bg-gray-600"} ${
        winner === null ? "cursor-pointer" : "cursor-not-allowed"
      } flex items-center justify-center h-[150px] w-[150px] text-5xl hover:${
        isHighlighted ? "" : "bg-gray-400"
      }  transition-all text-white`}
      data-cy="box"
      data-box={`${row}${col}`}
    >
      {element}
    </div>
  );
}
