import { createGame } from "./gameController.js";

const frame_time = 50
let frame_count = 0
const gameController = createGame();
const canvasElement = document.getElementById("gamegrid");
const ctx = canvasElement.getContext('2d');
const cellSize = 20;

gameController.clearLines();


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
            ctx.fillStyle = gameBoard[i][j] ? gameBoard[i][j] : "black"
            ctx.fillRect(j * cellSize + 1, i * cellSize + 1, cellSize - 1, cellSize - 1);
        }
    }
}


function drawTetromino() {
    const tetromino = gameController.getGameState().activeTetromino
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

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    switch (event.code) {
        case 'ArrowLeft':
            gameController.movePieceLeft();
            drawBoard()
            drawTetromino()
            break;
        case 'ArrowRight':
            gameController.movePieceRight();
            drawBoard()
            drawTetromino()
            break;
        case 'ArrowUp':
            gameController.rotateClockwise();
            drawBoard()
            drawTetromino()
            break;
        case 'ArrowDown':
            gameController.movePieceDown();
            drawBoard()
            drawTetromino()
            break;
        case 'Space':
            console.log('Hard drop');
            break;
        case 'KeyC':
            console.log('Hold piece');
            break;
        case 'KeyZ':
            gameController.rotateAnticlockwise();
            drawBoard()
            drawTetromino()
            break;
        default:
       
            break;
    }
}

function gameLoop() {
    frame_count += 1
    if (frame_count >= frame_time) {
        gameController.gameTick()
        drawBoard()
        drawTetromino()
        frame_count = 0
    }
    requestAnimationFrame(gameLoop)
}


drawBoard();
gameLoop()