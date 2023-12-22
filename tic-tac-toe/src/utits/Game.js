const TicTacToeGame = () => {
  let _highlightIdx = [];
  let _board = [];
  const initBoard = (board) => {
    _board = board;
    _highlightIdx = [];
  };
  const getBoard = () => {
    return _board;
  };
  const _isGameOver = () => {
    let gameOver = true;
    _board.forEach((row) => {
      row.forEach((ele) => {
        if (ele === "-") {
          gameOver = false;
          return false;
        }
      });
    });
    return gameOver;
  };
  const _winnerCheck = (player = "X", row = 0, col = 0) => {
    let rowCheck = true,
      colCheck = true,
      leftDiagonalCheck = true,
      rightDiagonalCheck = true,
      rowIdx = [],
      colIdx = [],
      leftDiagonalIdx = [],
      rightDiagonalIdx = [];
    for (let i = 0; i < 3; i++) {
      rowIdx.push(`${row}${i}`);
      colIdx.push(`${i}${col}`);
      leftDiagonalIdx.push(`${i}${i}`);
      rightDiagonalIdx.push(`${i}${2 - i}`);
      if (_board[row][i] !== player) {
        rowCheck = false;
      }
      if (_board[i][col] !== player) {
        colCheck = false;
      }
      if (_board[i][i] !== player) {
        leftDiagonalCheck = false;
      }
      if (_board[i][2 - i] !== player) {
        rightDiagonalCheck = false;
      }
    }
    switch (true) {
      case rowCheck:
        _highlightIdx = rowIdx;
        break;
      case colCheck:
        _highlightIdx = colIdx;
        break;
      case leftDiagonalCheck:
        _highlightIdx = leftDiagonalIdx;
        break;
      case rightDiagonalCheck:
        _highlightIdx = rightDiagonalIdx;
        break;
      default:
        _highlightIdx = [];
        break;
    }
    return rowCheck || colCheck || leftDiagonalCheck || rightDiagonalCheck;
  };
  const getHighlightedIdx = () => {
    return _highlightIdx;
  };
  const getWinner = (player, row, col) => {
    const gameOver = _isGameOver();
    const isWinner = _winnerCheck(player, row, col);
    if (gameOver && !isWinner) {
      return "Tied";
    }
    return isWinner ? player : "";
  };
  return {
    getBoard,
    initBoard,
    getWinner,
    getHighlightedIdx,
  };
};

export const GameLogic = TicTacToeGame();
