import { createGame } from "./gameController.js";

const gameController = createGame();
const canvasElement = document.getElementById("gamegrid");
const ctx = canvasElement.getContext('2d');
const cellSize = 20;

function drawBoard() {

    // clear the current canvas
    // loop through the gameboard and draw each cell
    const gameBoard = gameController.getGameState().gameBoard;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, (gameBoard[0].length * cellSize) + 1, (gameBoard.length * cellSize) + 1);
    ctx.fillStyle = "black";

    for (let i = 0; i < gameBoard.length; i++) {
        const row =  gameBoard[i]
        for (let j = 0; j < row.length; j++){
            ctx.fillRect(j * cellSize + 1, i * cellSize + 1, cellSize - 1, cellSize - 1);
        }
    }
}

drawBoard();

function drawTetromino(tetromino) {
    const offsetX = tetromino.xPosition;
    const offsetY = tetromino.yPosition;
    tetromino.piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                ctx.fillStyle = value; // You can change the color for each tetromino
                ctx.fillRect((x + offsetX) * cellSize, (y + offsetY) * cellSize, cellSize, cellSize);
            }
        });
    });
}

drawTetromino(gameController.gamesState.activeTetromino);

gameController.lockPiece();
