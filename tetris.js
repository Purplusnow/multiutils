const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(30, 30);

const ROWS = 20;
const COLUMNS = 10;

function createMatrix(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
}

const tetrominoes = [
    [[1, 1, 1], [0, 1, 0]], // T
    [[1, 1], [1, 1]], // O
    [[0, 1, 1], [1, 1, 0]], // S
    [[1, 1, 0], [0, 1, 1]], // Z
    [[1, 1, 1, 1]], // I
    [[1, 1, 1], [1, 0, 0]], // L
    [[1, 1, 1], [0, 0, 1]], // J
];

const colors = ["red", "blue", "green", "purple", "orange", "yellow", "cyan"];

let board = createMatrix(ROWS, COLUMNS);
let piece = { pos: { x: 4, y: 0 }, matrix: tetrominoes[0], color: "red" };
let dropCounter = 0;
let lastTime = 0;

function collide(board, piece) {
    for (let y = 0; y < piece.matrix.length; y++) {
        for (let x = 0; x < piece.matrix[y].length; x++) {
            if (piece.matrix[y][x] !== 0) {
                let boardX = x + piece.pos.x;
                let boardY = y + piece.pos.y;
                if (boardY >= ROWS || boardX < 0 || boardX >= COLUMNS || board[boardY][boardX]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function merge(board, piece) {
    piece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                board[y + piece.pos.y][x + piece.pos.x] = piece.color;
            }
        });
    });
}

function rotate(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i])).reverse();
}

function playerDrop() {
    piece.pos.y++;
    if (collide(board, piece)) {
        piece.pos.y--;
        merge(board, piece);
        resetPiece();
        sweep();
    }
    dropCounter = 0;
}

function playerMove(offset) {
    piece.pos.x += offset;
    if (collide(board, piece)) {
        piece.pos.x -= offset;
    }
}

function playerRotate() {
    let rotated = rotate(piece.matrix);
    let prevMatrix = piece.matrix;
    piece.matrix = rotated;
    if (collide(board, piece)) {
        piece.matrix = prevMatrix;
    }
}

function resetPiece() {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    piece.matrix = tetrominoes[randomIndex];
    piece.color = colors[randomIndex];
    piece.pos.x = Math.floor(COLUMNS / 2) - Math.floor(piece.matrix[0].length / 2);
    piece.pos.y = 0;
    if (collide(board, piece)) {
        board = createMatrix(ROWS, COLUMNS);
    }
}

function sweep() {
    for (let y = ROWS - 1; y >= 0; y--) {
        if (board[y].every(cell => cell !== 0)) {
            board.splice(y, 1);
            board.unshift(Array(COLUMNS).fill(0));
        }
    }
}

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > 1000) {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(board, { x: 0, y: 0 });
    drawMatrix(piece.matrix, piece.pos, piece.color);
}

function drawMatrix(matrix, offset, color = "white") {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = color;
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
                context.strokeStyle = "black";
                context.strokeRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") playerMove(-1);
    if (event.key === "ArrowRight") playerMove(1);
    if (event.key === "ArrowDown") playerDrop();
    if (event.key === "ArrowUp") playerRotate();
});

resetPiece();
update();
