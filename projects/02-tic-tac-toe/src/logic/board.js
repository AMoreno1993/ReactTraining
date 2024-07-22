import { WINNER_COMBOS } from "../constants";
export const checkWinnerFrom = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras para ver si X u O ganó
  //Esto compara las combinaciones ganadoras propuestas viendo si coincide el contenido de
  //cada posición
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

//Revisamos si hay un empate si no hay más espacios vacíos en el tablero
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
