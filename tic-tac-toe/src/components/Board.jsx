import Box from "./Box";

export default function Board({
  currentPlayer,
  setCurrentPlayer,
  setWinner,
  winner,
  setBoard,
  board,
  setPrevRow,
  setPrevCol,
}) {
  return (
    <div className=" grid grid-cols-3 grid-rows-3 gap-2 bg-orange-400 shadow-2xl">
      {board.map((row, rowIdx) =>
        row.map((ele, colIdx) => (
          <Box
            row={rowIdx}
            col={colIdx}
            element={ele}
            key={rowIdx + colIdx}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            setWinner={setWinner}
            winner={winner}
            setBoard={setBoard}
            setPrevCol={setPrevCol}
            setPrevRow={setPrevRow}
          />
        ))
      )}
    </div>
  );
}
