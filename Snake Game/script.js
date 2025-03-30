const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

const box = 20;
let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT";
let food = generateFood();
let gameSpeed = 100;

// AI Snake Movement (Greedy Algorithm)
function aiMove() {
    let head = { ...snake[0] };

    if (head.x < food.x) direction = "RIGHT";
    else if (head.x > food.x) direction = "LEFT";
    else if (head.y < food.y) direction = "DOWN";
    else if (head.y > food.y) direction = "UP";
}

// Move the snake
function move() {
    let head = { ...snake[0] };

    if (direction === "RIGHT") head.x += box;
    else if (direction === "LEFT") head.x -= box;
    else if (direction === "UP") head.y -= box;
    else if (direction === "DOWN") head.y += box;

    snake.unshift(head);

    // Check if food is eaten
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
    } else {
        snake.pop();
    }
}

// Generate random food position
function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box,
    };
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Snake
    ctx.fillStyle = "lime";
    snake.forEach((segment, index) => {
        ctx.fillRect(segment.x, segment.y, box, box);
        ctx.strokeStyle = "black";
        ctx.strokeRect(segment.x, segment.y, box, box);
    });

    // Draw Food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);
}

// Check collision
function isGameOver() {
    let head = snake[0];

    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// Game loop
function gameLoop() {
    aiMove();
    move();
    if (isGameOver()) {
        alert("Game Over!");
        snake = [{ x: 700, y: 700 }];
        direction = "RIGHT";
        food = generateFood();
    }
    draw();
    setTimeout(gameLoop, gameSpeed);
}

// Start game
gameLoop();
