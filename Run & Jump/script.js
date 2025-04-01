const runner = document.getElementById("runner");
const obstacle = document.getElementById("obstacle");
const scoreElement = document.getElementById("score");
let score = 0;
let isJumping = false;

// Jump function
function jump() {
    if (!isJumping) {
        isJumping = true;
        runner.classList.add("jump");
        setTimeout(() => {
            runner.classList.remove("jump");
            isJumping = false;
        }, 500);
    }
}

// Collision detection
function checkCollision() {
    const runnerRect = runner.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        runnerRect.right > obstacleRect.left &&
        runnerRect.left < obstacleRect.right &&
        runnerRect.bottom > obstacleRect.top
    ) {
        alert("Game Over! Your Score: " + score);
        score = 0;
    } else {
        score++;
    }
    scoreElement.innerText = score;
}

// Event listener for jump
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
    }
});

// Game loop
setInterval(checkCollision, 100);
