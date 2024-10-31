import { createGame } from "./gameController.js";

const gameController = createGame();
const canvasElement = document.getElementById("gamegrid");
const ctx = canvasElement.getContext('2d');

const gameBoard = gameController.getGameState().gameBoard;

function drawBoard(gameBoard) {
    // clear the current canvas
    // loop through the gameboard and draw each cell
   //
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 400, 800);
    ctx.fillStyle = "black";

    for (let i = 0; i < gameBoard.length; i++) {
        const row =  gameBoard[i]
        for (let j = 0; j < row.length; j++){
            ctx.fillRect(j * 20 + 1, i * 20 + 1, 19, 19);
        }
    }
}

drawBoard(gameBoard);
