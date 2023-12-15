const drawChessboard = (size: number) => {
  let chessboard = "";

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        row += "▓▓";
      } else {
        row += "  ";
      }
    }
    chessboard += row + "\n";
  }

  return chessboard;
};

console.log(drawChessboard(8));