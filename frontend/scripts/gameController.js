const WIDTH = 10
const HEIGHT = 20

const TETROMINO_SHAPES = {
    I_PIECE: [[null, "cyan", null, null],
              [null, "cyan", null, null],
              [null, "cyan", null, null],
              [null, "cyan", null, null]],
    T_PIECE: [["purple", "purple", "purple"],
              [null, "purple", null],
              [null, null, null],],
    L_PIECE: [[null, null, "orange"],
              ["orange", "orange", "orange"],
              [null, null, null],],
    J_PIECE: [["blue", null, null],
              ["blue", "blue", "blue"],
              [null, null, null],],
    S_PIECE: [[null, "green", "green"],
              ["green", "green", null],
              [null, null, null],],
    Z_PIECE: [["red", "red", null],
              [null, "red", "red"],
              [null, null, null],],
    O_PIECE: [[null, null, null, null],
              [null, "yellow", "yellow", null],
              [null, "yellow", "yellow", null],
              [null, null, null, null]],

}

// Gets a random piece name from TETROMINO_SHAPES
function getRandomPiece() {
    rand = Math.floor(Math.random() * 7);
    block_list = Object.keys(TETROMINO_SHAPES)
    shape = block_list[rand]
    map_tetromino_shapes(shape)
}

function map_tetromino_shapes(shape) {
    console.log(TETROMINO_SHAPES[shape])
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

