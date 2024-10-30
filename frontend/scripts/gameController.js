const WIDTH = 10
const HEIGHT = 20

const TETROMINO_SHAPES = {
    I_PIECE: [],
    T_PIECE: [],
    L_PIECE: [],
    J_PIECE: [],
    S_PIECE: [],
    Z_PIECE: [],
    O_PIECE: [],

}

// Gets a random piece name from TETROMINO_SHAPES
function getRandomPiece() {
}

function create2DArray(width, height) {
    let array = new Array(height)
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(width).fill(null)
    }

    return array
}

const emptyGameState = {
    gameBoard: create2DArray(WIDTH, HEIGHT),
    activeTetromino: null,
    upcomingTetrominos: [],
    score: 0,
    holdPiece: null,
    isGameOver: false,
}

// Creates the game controller

export function createGame(loadedState = emptyGameState) {
    const tetrisGame = {
        gamesState: loadedState,
        /* 
        Move the game forward one time step
        */
        gameTick: function() {
            // 1. Move the active piece down
            // 2. Lock in place if it can't move
            // 3. Clear any lines
            // 4. Get new piece
        },
        getGameState: function() {
            return this.gamesState
        },
        movePieceRight: function() {

        },
        movePieceLeft: function() {

        },
        movePieceDown: function() {

        },
        rotateClockwise: function() {

        },
        rotateAnticlockwise: function() {

        },
        instantDrop: function() {

        },
        getNextPiece: function() {

        },
        checkCollision: function() {

        },
        lockPiece: function() {

        },
        clearLines: function () {

        },
    
    }

    return tetrisGame
}

