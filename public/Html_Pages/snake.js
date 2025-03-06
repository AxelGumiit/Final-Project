var blockSize = 25;
var rows = 35;
var cols = 35;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var snakeDirection = 'right';
var snakeBody = [{x: snakeX, y: snakeY}];
var foodX, foodY;
var gameInterval;
var gameOverScreen = document.getElementById("gameOverScreen");
var finalScoreElement = document.getElementById("finalScore");
var startGameUI = document.getElementById('startGameUI');
const startBtn = document.getElementById('startBtn');
const quitBtn = document.getElementById('quitBtn');

window.onload = function() {
    startGameUI.style.display = 'block'; // Initially show the start game UI
    gameOverScreen.style.display = 'none'; // Initially hide the game over screen
    document.getElementById('restartBtn').addEventListener('click', restartGame);
};

startBtn.addEventListener('click', () => {
    startGameUI.style.display = 'none'; // Hide the start game UI when the game starts
    startGame();
});


function startGame() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    spawnFood();
    gameInterval = setInterval(update, 100);
    window.addEventListener('keydown', changeDirection);
}

function update() {
    moveSnake();
    
    if (checkCollisions()) {
        gameOver();
        return;
    }
    
    context.clearRect(0, 0, board.width, board.height);
    drawGrid();
    drawSnake();
    drawFood();
}

function moveSnake() {
    var newHead = {x: snakeBody[0].x, y: snakeBody[0].y};
    
    if (snakeDirection === 'up') newHead.y -= blockSize;
    else if (snakeDirection === 'down') newHead.y += blockSize;
    else if (snakeDirection === 'left') newHead.x -= blockSize;
    else if (snakeDirection === 'right') newHead.x += blockSize;

    snakeBody.unshift(newHead);
  
    if (newHead.x === foodX && newHead.y === foodY) {
        spawnFood();
    } else {
        snakeBody.pop();
    }
}

function checkCollisions() {
    if (snakeBody[0].x < 0 || snakeBody[0].x >= board.width || snakeBody[0].y < 0 || snakeBody[0].y >= board.height) {
        return true;
    }
    for (var i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
            return true;
        }
    }
    return false;
}

function changeDirection(event) {
    if (event.key === 'w' || event.key === 'W') {
        if (snakeDirection !== 'down') snakeDirection = 'up';
    } else if (event.key === 's' || event.key === 'S') {
        if (snakeDirection !== 'up') snakeDirection = 'down';
    } else if (event.key === 'a' || event.key === 'A') {
        if (snakeDirection !== 'right') snakeDirection = 'left';
    } else if (event.key === 'd' || event.key === 'D') {
        if (snakeDirection !== 'left') snakeDirection = 'right';
    }
}

function spawnFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;

    for (var i = 0; i < snakeBody.length; i++) {
        if (snakeBody[i].x === foodX && snakeBody[i].y === foodY) {
            spawnFood();
            return;
        }
    }
}

function drawGrid() {
    context.strokeStyle = "#ddd";
    for (var x = 0; x < board.width; x += blockSize) {
        for (var y = 0; y < board.height; y += blockSize) {
            context.strokeRect(x, y, blockSize, blockSize);
        }
    }
}

function drawSnake() {
    context.fillStyle = "green";
    for (var i = 0; i < snakeBody.length; i++) {
        context.beginPath();
        context.arc(snakeBody[i].x + blockSize / 2, snakeBody[i].y + blockSize / 2, blockSize / 2, 0, Math.PI * 2);
        context.fill();
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.beginPath();
    context.arc(foodX + blockSize / 2, foodY + blockSize / 2, blockSize / 2, 0, Math.PI * 2);
    context.fill();
}

function gameOver() {
    clearInterval(gameInterval);
    finalScoreElement.textContent = snakeBody.length - 1;
    
    // Hide the game canvas when the game is over
    board.style.display = 'block';
    
    // Show the Game Over screen and Start UI
    gameOverScreen.style.display = "block";
    startGameUI.style.display = 'none';
}

function restartGame() {
    // Reset game state
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    snakeDirection = 'right';
    snakeBody = [{x: snakeX, y: snakeY}];
    spawnFood();

    // Hide the Game Over screen and Start UI
    gameOverScreen.style.display = "none";
    startGameUI.style.display = 'none';

    // Show the game canvas and restart the game
    board.style.display = 'block';
    gameInterval = setInterval(update, 100);
}
